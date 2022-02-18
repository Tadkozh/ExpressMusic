const connection = require('../db-config');

const findAllAlbums = () => connection.promise().query('SELECT * FROM album');

const findOneAlbumById = (id) =>
  connection.promise().query('SELECT * FROM album WHERE id = ?', [id]);

const insertAlbum = ({ title, genre, picture, artist }) =>
  connection
    .promise()
    .query(
      'INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)',
      [title, genre, picture, artist]
    );

const updateAlbum = (object, id) =>
  connection.promise().query('UPDATE album SET ? WHERE id = ?', [object, id]);

const deleteAlbum = (id) =>
  connection.promise().query('DELETE FROM album WHERE id = ?', [id]);

module.exports = {
  findAllAlbums,
  findOneAlbumById,
  insertAlbum,
  updateAlbum,
  deleteAlbum,
};
