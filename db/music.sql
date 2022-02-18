DROP TABLE IF EXISTS `track`;
DROP TABLE IF EXISTS `album`;

CREATE TABLE `album` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `genre` VARCHAR(255) NOT NULL,
  `picture` VARCHAR(255) NOT NULL,
  `artist` VARCHAR(255) NOT NULL
);

INSERT INTO `album` (`title`, `genre`, `picture`, `artist`) 
VALUES ('The Dark Side Of The Moon','rock','https://cdns-images.dzcdn.net/images/cover/900c148afe1a36d1ebeae91f78112cc4/500x500-000000-80-0-0.jpg','Pink Floyd');

INSERT INTO `album` (`title`, `genre`, `picture`, `artist`) 
VALUES ('The Best Of Dire Straits','rock','https://cdns-images.dzcdn.net/images/cover/0aeeab7a9ef9dcc03e3c6490f9bf822d/500x500-000000-80-0-0.jpg','Dire Straits');

CREATE TABLE `track` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(128) NOT NULL,
  `youtube_url` VARCHAR(255) NOT NULL,
  `id_album` INT NOT NULL
);

INSERT INTO `track` (`title`, `youtube_url`, `id_album`) 
VALUES ('Money','https://youtu.be/-0kcet4aPpQ','1');

INSERT INTO `track` (`title`, `youtube_url`, `id_album`) 
VALUES ('Money For Nothing','https://youtu.be/wTP2RUD_cL0','2');