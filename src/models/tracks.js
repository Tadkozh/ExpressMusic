const connection = require('../db-config');

const findAllTracks = () => connection.promise().query('SELECT * FROM track');

const findOneTrackById = (id) =>
  connection.promise().query('SELECT * FROM track WHERE id = ?', [id]);

const insertTrack = ({ title, youtube_url, id_album }) =>
  connection
    .promise()
    .query(
      'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)',
      [title, youtube_url, id_album]
    );

const updateTrack = (object, id) =>
  connection.promise().query('UPDATE track SET ? WHERE id = ?', [object, id]);

const deleteTrack = (id) =>
  connection.promise().query('DELETE FROM track WHERE id = ?', [id]);

//As a user, I need to be able to retrieve the tracks list of one album
const findOneByAlbum = (albumId) =>
  connection
    .promise()
    .query(`SELECT * FROM track WHERE id_album = ?`, [albumId]);

module.exports = {
  findAllTracks,
  findOneTrackById,
  insertTrack,
  updateTrack,
  deleteTrack,
  findOneByAlbum,
};
