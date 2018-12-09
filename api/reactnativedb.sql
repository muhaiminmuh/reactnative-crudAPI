/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 100128
Source Host           : localhost:3306
Source Database       : reactnativedb

Target Server Type    : MYSQL
Target Server Version : 100128
File Encoding         : 65001

Date: 2018-10-18 14:49:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for berita
-- ----------------------------
DROP TABLE IF EXISTS `berita`;
CREATE TABLE `berita` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `judul` varchar(255) DEFAULT NULL,
  `konten` varchar(255) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of berita
-- ----------------------------
INSERT INTO `berita` VALUES ('1', 'Universitas Duta Bangsa', 'Selamat datang dikampus kebanggaan, Universitas Duta Bangsa sebuah kampus dengan motto \"The Global Enterpreneur University\". Kampus ini merukapan penggabungan STMIK Duta Bangsa, APIKES Citra Medika dan AKBID Citra Medika yang sudah cukup terkenal di Jawa ', 'https://udb.ac.id/images/logo/udb-header.png');
INSERT INTO `berita` VALUES ('2', 'Visi', 'Menjadi Universitas berkelas dunia (World Class University) pada tahun 2031 dalam bidang ilmu pengetahuan dan teknologi dengan mengembangkan nilai moral, agama dan kepribadian Pancasila', 'https://stmikdb.ac.id/templates/stmikdbv2/images/logo_stmik.png');
