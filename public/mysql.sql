# ************************************************************
# Sequel Pro SQL dump
# Version 4541
# Database: commonProject
# Generation Time: 2021-06-10 15:43:46 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table news_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `news_info`;

CREATE TABLE `news_info` (
  `news_id` varchar(50) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(30) DEFAULT NULL COMMENT '新闻标题',
  `news_introduction` varchar(255) DEFAULT NULL COMMENT '新闻简介',
  `news_favorite_id` varchar(50) DEFAULT NULL COMMENT '点赞编号',
  `news_comments_id` varchar(50) DEFAULT NULL COMMENT '评论编号',
  `news_time` varchar(50) DEFAULT NULL COMMENT '发布时间',
  `news_title_image` varchar(50) DEFAULT NULL COMMENT '标题图片',
  `news_content_image` varchar(50) DEFAULT NULL COMMENT '内容图片',
  `news_content` longtext COMMENT '新闻内容',
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='新闻表';

LOCK TABLES `news_info` WRITE;
/*!40000 ALTER TABLE `news_info` DISABLE KEYS */;

INSERT INTO `news_info` (`news_id`, `news_title`, `news_introduction`, `news_favorite_id`, `news_comments_id`, `news_time`, `news_title_image`, `news_content_image`, `news_content`)
VALUES
	('11111','supervons','supervons','测试','男','北京','176xxxxxxxx','',''),
	('111134123456788899443221','supervons','supervons','测试','男','北京','176xxxxxxxx','',''),
	('11113421','supervons','supervons','测试','男','北京','176xxxxxxxx','',''),
	('123','123','supervons','测试','男','北京','176xxxxxxxx','',''),
	('12333','345','supervons','测试','男','北京','176xxxxxxxx','',''),
	('123333','567','supervons','测试','男','北京','176xxxxxxxx','',''),
	('1233s33','789','supervons','测试','男','北京','176xxxxxxxx','','');

/*!40000 ALTER TABLE `news_info` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_info`;

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_age` int(11) DEFAULT NULL,
  `login_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `user_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `pass_word` varchar(255) COLLATE utf8_bin NOT NULL,
  `user_sex` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_address` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_cellphone` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;

INSERT INTO `user_info` (`id`, `user_age`, `login_id`, `user_name`, `pass_word`, `user_sex`, `user_address`, `user_cellphone`)
VALUES
	(1,20,X'61646D696E',X'63686C79',X'6531306164633339343962613539616262653536653035376632306638383365',NULL,NULL,NULL),
	(2,22,X'74657374',X'74657374',X'74657374',NULL,NULL,NULL),
	(3,22,X'3137363838383838383838',X'',X'383838383838',NULL,NULL,NULL);

/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;