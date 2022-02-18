const albumsRouter = require('express').Router();
const {
  findAllAlbums,
  findOneAlbumById,
  insertAlbum,
  updateAlbum,
  deleteAlbum,
} = require('../models/albums');

albumsRouter.get('/', (req, res) => {
  findAllAlbums().then(([album]) => {
    res.json(album);
  });
});

albumsRouter.get('/:id', async (req, res) => {
  const [[album]] = await findOneAlbumById(req.params.id);
  if (album) {
    res.json(album);
  } else {
    res.status(404).json();
  }
});

albumsRouter.post('/', async (req, res) => {
  const [{ insertId: id }] = await insertAlbum(req.body);
  const newAlbum = req.body;
  res.status(201).json({
    id,
    ...newAlbum,
  });
});

albumsRouter.put('/:id', async (req, res) => {
  await updateAlbum(req.body, req.params.id);
  res.status(204).json();
});

albumsRouter.delete('/:id', async (req, res) => {
  await deleteAlbum(req.params.id);
  res.status(204).json();
});

module.exports = albumsRouter;
