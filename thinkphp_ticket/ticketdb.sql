/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 100113
Source Host           : localhost:3306
Source Database       : ticketdb

Target Server Type    : MYSQL
Target Server Version : 100113
File Encoding         : 65001

Date: 2017-06-02 10:23:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cinema
-- ----------------------------
DROP TABLE IF EXISTS `cinema`;
CREATE TABLE `cinema` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '影院信息id',
  `title` varchar(100) DEFAULT NULL COMMENT '影院名称',
  `picname` varchar(20) DEFAULT NULL COMMENT '图片名称',
  `phone` varchar(16) DEFAULT NULL COMMENT '联系电话',
  `address` varchar(50) DEFAULT NULL COMMENT '影院地址',
  `service` varchar(50) DEFAULT NULL COMMENT '影院服务',
  `introduction` text COMMENT '简介',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '状态',
  `addtime` int(10) unsigned DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='影院信息表';

-- ----------------------------
-- Records of cinema
-- ----------------------------
INSERT INTO `cinema` VALUES ('1', '新影联·华谊兄弟影院', '592801d81e44c.jpg', '4000009009 ', '朝阳区广顺北大街16号望京华彩商业中心B1', '20个影厅 1737个座位', '&lt;span style=&quot;color: rgb(51, 51, 51); font-family: helvetica, 微软雅黑, &amp;quot;microsoft yahei&amp;quot;, verdana, lucida, arial, sans-serif, 黑体; font-size: 14px;&quot;&gt;华彩商业中心提供300多个座位&lt;/span&gt;&lt;br /&gt;', '0', '0');
INSERT INTO `cinema` VALUES ('2', '中影国际影城北京丰台千禧街店', '592802b90593b.jpg', '01088177970', '北京市丰台区靛厂路千禧商业街4号楼', '1.3米（含）以下儿童观看2D/3D/巨幕片免费（无座），一名成人限带一名免票儿童，超过数量的儿童和', '&lt;strong&gt;商业街提供1000个座位&lt;/strong&gt;', '0', null);
INSERT INTO `cinema` VALUES ('3', '大地影院—十里河铭泽店', '5928039c86bb1.jpg', '01087156707 ', '北京市朝阳区周庄嘉园甲32号楼铭泽生活广场5层大地影院', '1.3米（含）以下儿童观看2D/3D/巨幕片免费（无座）， 一名成人限带一名免票儿童，超过数量的儿童', '&lt;br /&gt;&lt;br /&gt;商业街提供1000个座位', '0', null);
INSERT INTO `cinema` VALUES ('4', '博纳国际影城土桥店', '592803dac51fa.jpg', '01061510188', '北京市通州区梨园镇砖厂南里华远铭悦好天地5号楼301', '1.3米（含）以下儿童观看2D/3D/巨幕片免费（无座）， 一名成人限带一名免票儿童，超过数量的儿童', '&lt;br /&gt;&lt;br /&gt;商业街提供1000个座位', '0', null);
INSERT INTO `cinema` VALUES ('5', '首都电影院（金融街店）', '5928042e92893.jpg', '01066086662', '金融大街18号金融街购物中心二期地下一层', '1.3米（含）以下儿童观看2D/3D/巨幕片免费（无座）， 一名成人限带一名免票儿童，超过数量的儿童', '&lt;br /&gt;&lt;br /&gt;商业街提供1000个座位&lt;br /&gt;', '0', null);
INSERT INTO `cinema` VALUES ('6', '大地影院-北京垡头永辉2222', '59280473b10ac.jpg', '01056350596 ', '北京市朝阳区垡头翠城永辉超市地下一层', '1.3米（含）以下儿童观看2D/3D/巨幕片免费（无座）， 一名成人限带一名免票儿童，超过数量的儿童', '&lt;br /&gt;&lt;br /&gt;商业街提供1000个座位', '0', '0');
INSERT INTO `cinema` VALUES ('7', '星博正华影城', '59280e32a0db2.jpg', '01087688666', '北京市丰台区政馨园三区B1', '1.3米（含）以下儿童观看2D/3D/巨幕片免费（无座）， 一名成人限带一名免票儿童，超过数量的儿童', '商业街提供1000个座位', '0', null);
INSERT INTO `cinema` VALUES ('8', '首都电影院（金融街店）', '59281f88e6354.jpg', '01066086662 ', '金融大街18号金融街购物中心二期地下一层', '1.3米（含）以下儿童观看2D/3D/巨幕片免费（无座）， 一名成人限带一名免票儿童，超过数量的儿童', '商业街提供1000个座位', '0', '1495801737');
INSERT INTO `cinema` VALUES ('9', '新影联·华谊兄弟影院reet', '5928281935a75.jpg', '1235634324', '北京市丰台区靛厂路千禧商业街4号楼', '1.3米（含）以下儿童观看2D/3D/巨幕片免费（无座）， 一名成人限带一名免票儿童，超过数量的儿童', '&lt;br /&gt;&lt;br /&gt;商业街提供1000个座位', '0', '1495803929');
INSERT INTO `cinema` VALUES ('10', '大地影院-北京垡头永辉89', '592828baa2eee.jpg', '0108817797034', '北京市朝阳区垡头翠城永辉超市地下一层', '1.3米（含）以下儿童观看2D/3D/巨幕片免费（无座），一名成人限带一名免票儿童，超过数量的儿童和', '&lt;br /&gt;&lt;br /&gt;商业街提供1000个座位', '0', '1495804090');
INSERT INTO `cinema` VALUES ('11', '你好新影联·华谊兄弟影院', '59282943a8955.jpg', '12356343244545', '朝阳区广顺北大街16号望京华彩商业中心B1', '1.3米（含）以下儿童观看2D/3D/巨幕片免费（无座），一名成人限带一名免票儿童，超过数量的儿童和', '停车场1223242324235', '0', '1495967934');

-- ----------------------------
-- Table structure for film
-- ----------------------------
DROP TABLE IF EXISTS `film`;
CREATE TABLE `film` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id号',
  `title` varchar(50) NOT NULL COMMENT '影片名称',
  `picname` varchar(20) DEFAULT NULL COMMENT '图片名称',
  `fid` tinyint(3) unsigned DEFAULT NULL COMMENT '影片类型',
  `firsttime` date DEFAULT NULL COMMENT '首映时间',
  `duration` varchar(32) DEFAULT NULL COMMENT '时长',
  `director` varchar(32) DEFAULT NULL COMMENT '导演',
  `actor` varchar(200) DEFAULT NULL COMMENT '主演阵容',
  `region` varchar(32) DEFAULT NULL COMMENT '放映地区',
  `language` varchar(30) DEFAULT NULL,
  `score` tinyint(3) unsigned DEFAULT NULL COMMENT '评分',
  `introduction` text COMMENT '简介,描述',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '状态',
  `addtime` int(10) unsigned DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='影片信息';

-- ----------------------------
-- Records of film
-- ----------------------------
INSERT INTO `film` VALUES ('5', '荡寇风云 (2017)', '592c50b9d867f.jpg', '1', '0000-00-00', '120', '陈嘉上', '赵文卓', '中国', '中文', '6', '&lt;p class=&quot;mt6 lh18&quot; style=&quot;margin: 6px 0px 0px; padding: 0px; line-height: 23.4px; color: rgb(51, 51, 51); font-family: helvetica, 微软雅黑, &amp;quot;microsoft yahei&amp;quot;, verdana, lucida, arial, sans-serif, 黑体; font-size: 13px;&quot;&gt;根据中华民族英雄戚继光的事迹改编，讲述了明嘉靖年间，倭寇在中国沿海烧杀掳掠，在剿倭战争节节失利的情况下，一代名将戚继光（赵文卓饰）组建中国历史上首支“特种部队”戚家军，独创“鸳鸯阵”，装备“狼筅”、“三眼铳”、“虎蹲炮..&lt;/p&gt;&lt;div&gt;&lt;br /&gt;&lt;/div&gt;', '0', '1496076473');
INSERT INTO `film` VALUES ('6', '红军小学', '592c4bae7689f.png', '1', '0000-00-00', '90分钟', 'XX', '廖震', '中国', '中文', '7', '&lt;span style=&quot;color: rgb(51, 51, 51); font-family: &amp;quot;Microsoft YaHei&amp;quot;, Helvetica, Arial, sans-serif; font-size: 14px;&quot;&gt;红军将领之子廖焕章在父亲随红军主力开始长征的途中与父亲走失，一名红军战士在带领他追赶父亲队伍的途中遭到白军追捕，不幸于川陕中央革命根据地内的一个古镇落难，最终不得不隐匿在古镇内，与当地苏维埃政府为培养革命的接班人而开办的“红军小学”内的小学生一起学知识、学文化并与白军和奸细斗智斗勇，一场由一群孩子们主导的惊心动魄的革命战争开始了。&lt;/span&gt;&lt;br /&gt;', '1', '1496075258');
INSERT INTO `film` VALUES ('7', '小茜当家', '592c51906348d.jpg', '1', '0000-00-00', '93分钟', '田玉', '陈瑾', '中国', '中文', '7', '&lt;span style=&quot;color: rgb(51, 51, 51); font-family: &amp;quot;Microsoft YaHei&amp;quot;, Helvetica, Arial, sans-serif; font-size: 14px;&quot;&gt;电影以一个真实的故事为蓝本，讲述一个原本幸福富裕的家庭，因为飞来横祸爸爸突然离家，家庭一时陷入困境，留下妈妈和孩子支撑家庭，但一次意外妈妈又病重入院，困顿的现实压在了家庭中唯一的孩子，电影小主角年仅10岁的小茜身上。她用自己的力量去背负起整个家庭的责任的感人故事。&lt;/span&gt;&lt;br /&gt;', '1', '1496076696');
INSERT INTO `film` VALUES ('8', '迷失Z城', '592c5276b367b.jpg', '1', '0000-00-00', '104分钟', '詹姆士·格雷', '查理·汉纳姆', '全世界', '英文', '8', '&lt;span style=&quot;color: rgb(51, 51, 51); font-family: &amp;quot;Microsoft YaHei&amp;quot;, Helvetica, Arial, sans-serif; font-size: 14px;&quot;&gt;1925年,英国上校福赛特（查理·汉纳姆 饰）深入亚马逊丛林寻找失落的古老文明,希望找到历史上最重大的发现。几个世纪以来,欧洲人一直坚信亚马逊这个世界上最大的丛林里掩藏着一个黄金国,然而,成干上万闯入丛林探险的人都丧身其中,这使得很多科学家认为亚马逊是人类无法进入的。但福赛特上校却三次深入丛林探险,他下定决心要证明给世人,这个被他称为“Z城”的古老文明是真实存在过的。&lt;/span&gt;&lt;br /&gt;', '1', '1496076934');
INSERT INTO `film` VALUES ('9', '加勒比海盗5：死无对证', '592c534998139.jpg', '1', '2017-05-31', '129分钟', '乔阿吉姆·罗恩尼', '约翰尼·德普', '全世界', 'EG', '8', '&lt;span style=&quot;color: rgb(51, 51, 51); font-family: &amp;quot;Microsoft YaHei&amp;quot;, Helvetica, Arial, sans-serif; font-size: 14px;&quot;&gt;令人闻风丧胆的“海上屠夫”萨拉查船长 （哈维尔·巴登 饰）竟率领着一众夺命亡灵水手逃出了百慕大三角区。他们扬言要杀尽世上所有的海盗，头号目标就是杰克船长（约翰尼·德普 饰）。要想改写命运，杰克船长唯一的希望就是找到传说中海神波塞冬的三叉戟，拥有它就能拥有统治整个海洋的力量！为了寻获这件神器，杰克船长和聪明美丽的天文学家卡琳娜·史密斯（卡雅·斯考达里奥 饰）以及固执的年轻皇家海军亨利（布兰顿·思怀兹 饰）联手出击。航行着他那破破烂烂的“死海鸥号”，杰克船长不但决心要改变自己的厄运，同时也力求能从史上最狠毒可怕的敌人那里捡回一条命。&lt;/span&gt;&lt;br /&gt;', '0', '1496077129');

-- ----------------------------
-- Table structure for filmtype
-- ----------------------------
DROP TABLE IF EXISTS `filmtype`;
CREATE TABLE `filmtype` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `addtime` int(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of filmtype
-- ----------------------------
INSERT INTO `filmtype` VALUES ('1', '悬疑片5D', '1495904042');
INSERT INTO `filmtype` VALUES ('2', '爱情片', '1495904037');
INSERT INTO `filmtype` VALUES ('3', '动作片', '1495904031');
INSERT INTO `filmtype` VALUES ('4', '喜剧片wewe', '1495904000');
INSERT INTO `filmtype` VALUES ('8', '文艺片', '1495904050');
INSERT INTO `filmtype` VALUES ('21', '推理片', '1495904056');
INSERT INTO `filmtype` VALUES ('22', '搞笑片', '1495904090');
INSERT INTO `filmtype` VALUES ('23', '8Dsds', '1495903289');

-- ----------------------------
-- Table structure for hall
-- ----------------------------
DROP TABLE IF EXISTS `hall`;
CREATE TABLE `hall` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '放映厅信息id',
  `title` varchar(50) DEFAULT NULL,
  `cid` int(10) unsigned DEFAULT NULL COMMENT '所属影院信息id号',
  `htype` tinyint(3) unsigned DEFAULT NULL COMMENT '放映厅类型',
  `number` int(10) unsigned DEFAULT NULL COMMENT '座位数量',
  `layout` varchar(255) DEFAULT NULL COMMENT '座位布局',
  `status` tinyint(3) unsigned DEFAULT NULL COMMENT '状态',
  `addtime` int(10) unsigned DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='放映厅信息';

-- ----------------------------
-- Records of hall
-- ----------------------------
INSERT INTO `hall` VALUES ('1', '4厅', '1', '1', '666', '', '0', '1495990763');
INSERT INTO `hall` VALUES ('2', '1厅', '2', '1', '6668888', '', '0', '1495990753');
INSERT INTO `hall` VALUES ('3', '1厅', '4', '2', '9999', '', '0', '1495990742');
INSERT INTO `hall` VALUES ('4', '2厅', '6', '2', '888', '', '0', '1495990724');
INSERT INTO `hall` VALUES ('5', '3厅', '1', '1', '0', '', '0', '1495990717');
INSERT INTO `hall` VALUES ('6', '2厅', '1', '1', '666', '', '0', '1495990709');
INSERT INTO `hall` VALUES ('7', '1厅', '3', '1', '666', '', '0', '1495990702');
INSERT INTO `hall` VALUES ('8', '1厅', '1', '1', '0', '', '0', '1495990694');
INSERT INTO `hall` VALUES ('9', '2厅', '2', '1', '0', '', '0', '1495990785');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `seat` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `playtime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `price` float(10,2) DEFAULT NULL,
  `addtime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `ispay` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for projection
-- ----------------------------
DROP TABLE IF EXISTS `projection`;
CREATE TABLE `projection` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fid` int(10) unsigned DEFAULT NULL COMMENT '影片id',
  `cid` int(10) DEFAULT NULL,
  `hid` int(10) unsigned DEFAULT NULL COMMENT '放映厅id',
  `date` date DEFAULT NULL COMMENT '放音日期',
  `time` time DEFAULT NULL,
  `price` double(6,2) unsigned DEFAULT NULL COMMENT '价格',
  `language` varchar(32) DEFAULT NULL COMMENT '语言',
  `seatinfo` blob COMMENT '座位信息',
  `status` tinyint(3) unsigned DEFAULT NULL,
  `addtime` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COMMENT='放映信息';

-- ----------------------------
-- Records of projection
-- ----------------------------
INSERT INTO `projection` VALUES ('21', '5', '2', '9', '2017-06-01', '10:06:00', '66.00', '5', 0x313030, '0', '1496285085');
INSERT INTO `projection` VALUES ('22', '6', '2', '2', '2017-06-01', '11:06:00', '77.00', '5', '', '0', '1496288013');
INSERT INTO `projection` VALUES ('23', '7', '4', '3', '2017-06-01', '11:06:00', '88.00', '5', '', '0', '1496288035');
INSERT INTO `projection` VALUES ('24', '9', '2', '9', '2017-06-01', '11:06:00', '66.00', '5', '', '0', '1496289479');
INSERT INTO `projection` VALUES ('25', '9', '3', '7', '2017-06-01', '14:06:00', '66.00', '5', '', '0', '1496299980');
INSERT INTO `projection` VALUES ('26', '5', '4', '3', '2017-06-01', '14:06:00', '66.00', '5', '', '0', '1496299989');
INSERT INTO `projection` VALUES ('27', '9', '4', '3', '2017-06-01', '14:45:00', '77.00', '9', '', '0', '1496300021');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户id号',
  `account` varchar(32) NOT NULL COMMENT '账号',
  `pass` char(32) NOT NULL COMMENT '密码',
  `name` varchar(16) DEFAULT NULL COMMENT '真实姓名',
  `role` varchar(16) DEFAULT NULL COMMENT '角色',
  `status` tinyint(3) unsigned DEFAULT '0' COMMENT '状态',
  `addtime` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', '21232f297a57a5a743894a0e4a801fc3', '管理员', '超级用户', '0', '12356789');
INSERT INTO `users` VALUES ('5', 'root', '202cb962ac59075b964b07152d234b70', 'zhangsan', 'guanliyuan', '0', '1495801472');
INSERT INTO `users` VALUES ('6', 'phpcms', '202cb962ac59075b964b07152d234b70', 'zhangsan', 'guanliyuan', '0', '1495894567');
INSERT INTO `users` VALUES ('7', 'admin45', '202cb962ac59075b964b07152d234b70', '123', '', '0', '1495895728');

-- ----------------------------
-- Table structure for vipuser
-- ----------------------------
DROP TABLE IF EXISTS `vipuser`;
CREATE TABLE `vipuser` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id号',
  `account` varchar(32) NOT NULL COMMENT '账号',
  `pass` char(32) DEFAULT NULL COMMENT '密码',
  `picname` varchar(20) DEFAULT NULL COMMENT '头像',
  `name` varchar(16) DEFAULT NULL COMMENT '真实姓名',
  `email` varchar(32) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(20) DEFAULT NULL COMMENT '电话',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '状态',
  `addtime` int(10) unsigned DEFAULT NULL COMMENT '注册时间',
  `lasttime` int(10) unsigned DEFAULT NULL COMMENT '最后一次注册时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COMMENT='前台会员信息';

-- ----------------------------
-- Records of vipuser
-- ----------------------------
INSERT INTO `vipuser` VALUES ('25', 'trt3435', '202cb962ac59075b964b07152d234b70', '5927885f80044.jpg', 'zhangsan11111111', '', '', '0', '1495729820', '1495729820');
INSERT INTO `vipuser` VALUES ('26', 'tina123', '202cb962ac59075b964b07152d234b70', '59278c901f6c1.jpg', 'bb', '', '', '0', '1495764112', '1495764112');
INSERT INTO `vipuser` VALUES ('27', 'phpcms', '202cb962ac59075b964b07152d234b70', '59278d4a36875.jpg', '123', '', '', '0', '1495764298', '1495764298');
INSERT INTO `vipuser` VALUES ('28', 'phpcmssdf', '202cb962ac59075b964b07152d234b70', '59278fc6c8231.jpg', '123123', '', '', '0', '1495764935', '1495764935');
INSERT INTO `vipuser` VALUES ('29', 'sdfsdfasdfasdf', '202cb962ac59075b964b07152d234b70', '59278fef22af3.jpeg', '123123123', '', '', '0', '1495764976', '1495764976');
INSERT INTO `vipuser` VALUES ('30', 'sadfasdfasd', '4297f44b13955235245b2497399d7a93', '59279025772ef.jpg', '123123123', '', '', '0', '1495765029', '1495765029');
INSERT INTO `vipuser` VALUES ('31', 'phpcm234234', '202cb962ac59075b964b07152d234b70', '592790ad9a882.jpeg', '123123123', '', '', '0', '1495765166', '1495765166');
INSERT INTO `vipuser` VALUES ('32', 'zvzvzvzv', '202cb962ac59075b964b07152d234b70', '5927914497c1f.jpg', '123123123', '', '', '0', '1495765317', '1495765317');
INSERT INTO `vipuser` VALUES ('33', 'qweqwe', '76d80224611fc919a5d54f0ff9fba446', '59279171d8d7c.jpg', 'qweqwe', '', '', '0', '1495765362', '1495765362');
INSERT INTO `vipuser` VALUES ('34', 'qweqweqwe', '76d80224611fc919a5d54f0ff9fba446', '59279199b6f9c.jpg', 'qweqweqwe', '', '', '0', '1495765402', '1495765402');
INSERT INTO `vipuser` VALUES ('35', 'ertert', '4297f44b13955235245b2497399d7a93', '59279288d71f9.jpeg', '123123123', '', '', '0', '1495765641', '1495765641');
INSERT INTO `vipuser` VALUES ('36', 'qweerwer', '4297f44b13955235245b2497399d7a93', '592c011bc56a3.jpg', '123123', '', '', '0', '1496056091', '1495765949');
INSERT INTO `vipuser` VALUES ('37', 'gfdsgfdg', '202cb962ac59075b964b07152d234b70', '592c01aa805cd.png', 'ADMIN', '', '', '0', '1496056234', '1495767038');
SET FOREIGN_KEY_CHECKS=1;
