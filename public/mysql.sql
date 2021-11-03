# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# Host: xx.xx.xx.xx(MySQL 5.5.62)
# Database: explore
# Generation Time: 2021-06-24 14:37:31 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table tb_user_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tb_user_info`;

CREATE TABLE `tb_user_info` (
  `id` varchar(36) PRIMARY KEY,
  `uid` varchar(64),
  `user_name` varchar(255),
  `pass_word` varchar(255) NOT NULL,
  `user_age` int(11),
  `user_sex` varchar(16),
  `user_type` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_address` varchar(255),
  `user_cellphone` varchar(32),
  `create_time` varchar(32),
  `update_time` varchar(32)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tb_user_info` WRITE;
/*!40000 ALTER TABLE `tb_user_info` DISABLE KEYS */;

INSERT INTO `tb_user_info` (`id`, `uid`, `user_name`, `pass_word`, `user_age`, `user_sex`, `user_type`, `user_address`, `user_cellphone`, `create_time`, `update_time`)
VALUES
	('master','supervons','冯一朔','098f6bcd4621d373cade4e832627b4f6',NULL,NULL,1,NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `tb_user_info` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

DROP TABLE IF EXISTS `tb_file_info`;

CREATE TABLE `tb_file_info` (
  `id` varchar(36) PRIMARY KEY,
  `file_name` varchar(255),
  `file_size` varchar(32) NOT NULL,
  `file_type` varchar(32),
  `file_path` varchar(255) NOT NULL,
  `file_access_path` varchar(255),
  `create_time` varchar(32),
  `update_time` varchar(32)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tb_avatar_info`;

CREATE TABLE `tb_avatar_info` (
  `id` varchar(36) PRIMARY KEY,
  `user_id` varchar(32) NOT NULL,
  `file_id` varchar(32) NOT NULL,
  `status` varchar(4),
  `create_time` varchar(32),
  `update_time` varchar(32)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tb_profile_info`;

CREATE TABLE `tb_profile_info` (
  `id` varchar(36) PRIMARY KEY,
  `user_id` varchar(32) NOT NULL,
  `avatar_id` varchar(32),
  `theme` varchar(16),
  `motto` varchar(255),
  `create_time` varchar(32),
  `update_time` varchar(32)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tb_news_info`;

CREATE TABLE `tb_news_info` (
  `id` varchar(36) PRIMARY KEY,
  `news_title` varchar(64) NOT NULL,
  `news_content` blob,
  `create_user_id` varchar(32),
  `create_time` varchar(32),
  `update_time` varchar(32)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tb_verify_info`;

CREATE TABLE `tb_verify_info` (
  `id` varchar(36) PRIMARY KEY,
  `uid` varchar(32) NOT NULL,
  `type` varchar(32) NOT NULL,
  `code` varchar(16) NOT NULL,
  `email` varchar(255) NOT NULL,
  `expiration_time` bigint NOT NULL,
  `usable` int NOT NULL default 0 comment "usable 1-y，0-n",
  `sended` int NOT NULL default 0 comment "send success? 1-y，0-n",
  `create_user_id` varchar(32),
  `create_time` varchar(32),
  `update_time` varchar(32)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;