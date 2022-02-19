const albumsRouter = require('express').Router();
const {
  findAllAlbums,
  findOneAlbumById,
  insertAlbum,
  updateAlbum,
  deleteAlbum,
} = require('../models/albums');

const tracksModel = require('../models/tracks');

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

//As a user, I need to be able to retrieve the tracks list of one album
albumsRouter.get('/:id/tracks', async (req, res) => {
  const [tracks] = await tracksModel.findOneByAlbum(req.params.id);
  res.json(tracks);
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
