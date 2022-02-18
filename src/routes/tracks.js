const tracksRouter = require('express').Router();
const {
  findAllTracks,
  findOneTrackById,
  insertTrack,
  updateTrack,
  deleteTrack,
} = require('../models/tracks');

tracksRouter.get('/', (req, res) => {
  findAllTracks().then(([track]) => {
    res.json(track);
  });
});

tracksRouter.get('/:id', async (req, res) => {
  const [[track]] = await findOneTrackById(req.params.id);
  if (track) {
    res.json(track);
  } else {
    res.status(404).json();
  }
});

tracksRouter.post('/', async (req, res) => {
  const [{ insertId: id }] = await insertTrack(req.body);
  const newTrack = req.body;
  res.status(201).json({
    id,
    ...newTrack,
  });
});

tracksRouter.put('/:id', async (req, res) => {
  await updateTrack(req.body, req.params.id);
  res.status(204).json();
});

tracksRouter.delete('/:id', async (req, res) => {
  await deleteTrack(req.params.id);
  res.status(204).json();
});

module.exports = tracksRouter;
