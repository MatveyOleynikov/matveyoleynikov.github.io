-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: eyesightkick
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exercises`
--

DROP TABLE IF EXISTS `exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercises` (
  `exercise_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` text,
  `list_id` int DEFAULT NULL,
  `url` varchar(120) DEFAULT '/images/exercises/1.jpg',
  `time` int NOT NULL DEFAULT '10',
  PRIMARY KEY (`exercise_id`),
  KEY `list_id` (`list_id`),
  CONSTRAINT `exercises_ibfk_1` FOREIGN KEY (`list_id`) REFERENCES `lists_of_exercises` (`list_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercises`
--

LOCK TABLES `exercises` WRITE;
/*!40000 ALTER TABLE `exercises` DISABLE KEYS */;
INSERT INTO `exercises` VALUES (1,'Метод стрельбы глазами','Смотрим вверх-вниз с максимальной амплитудой.',1,'/images/exercises/1.jpg',10),(2,'Метод стрельбы глазами','Чертим круг по часовой стрелке и обратно.',1,'/images/exercises/2.jpg',20),(3,'Метод стрельбы глазами','Рисуем глазами диагонали.',1,'/images/exercises/3.jpg',15),(4,'Метод стрельбы глазами','Рисуем взглядом квадрат.',1,'/images/exercises/4.jpg',10),(5,'Метод стрельбы глазами','Взгляд идет по дуге — выпуклой и вогнутой.',1,'/images/exercises/5.png',30),(6,'Метод стрельбы глазами','Обводим взглядом ромб.',1,'/images/exercises/6.png',25),(7,'Метод стрельбы глазами','Рисуем глазами бантики.',1,'/images/exercises/7.png',15),(8,'Метод стрельбы глазами','Рисуем букву S — сначала в горизонтальном положении, потом в вертикальном.',1,'/images/exercises/8.png',30),(9,'Метод стрельбы глазами','Чертим глазами вертикальные дуги, сначала по часовой стрелке, потом — против.',1,'/images/exercises/9.png',15),(10,'Метод стрельбы глазами','Переводим взгляд из одного угла в другой по диагоналям квадрата.',1,'/images/exercises/10.png',15),(11,'Метод стрельбы глазами','Сводим зрачки к переносице изо всех сил, приблизив палец к носу.',1,'/images/exercises/11.png',20),(12,'Метод стрельбы глазами','Часто-часто моргаем веками — как бабочка машет крылышками.',1,'/images/exercises/12.png',25),(13,'Метод Жданова','Водим глазами вверх-вниз.',1,'/images/exercises/13.png',10),(14,'Метод Жданова','Водим глазами влево вправо до упора.',1,'/images/exercises/14.png',15),(15,'Метод Жданова','Водим глазами по диагонали.',1,'/images/exercises/15.png',15),(16,'Метод Жданова','Водим глазами по воображаемому квадрату.',1,'/images/exercises/16.png',20),(17,'Метод Жданова','Водим глазами по горизонтальной бабочке.',1,'/images/exercises/17.png',20),(18,'Метод Жданова','Водим глазами по воображаемой вертикальной бабочке.',1,'/images/exercises/18.png',15),(19,'Метод Жданова','Водим глазами по кругу.',1,'/images/exercises/19.png',25),(20,'Метод Жданова','Делаем движения глазами согласно зиг-загу.',1,'/images/exercises/20.png',15),(21,'Метод Жданова','Делаем движение глазами согласно рисунку. По воображаемой горизонтальной спирали (спину).',1,'/images/exercises/21.png',15),(22,'Метод Жданова','Делаем движение глазами согласно рисунку. По воображаемой вертикальной спирали (спину).',1,'/images/exercises/22.png',15),(23,'Метод Жданова','Водим глазами по спирали типа улитка, как на рисунке.',1,'/images/exercises/23.png',15),(24,'Метод Жданова','Водим глазами по траектории на иллюстрации.',1,'/images/exercises/24.png',15),(25,'Метод Жданова','Фокусируемся на промежутке меж кончиков пальцев вытянутых рук и двигаем ладони влево -вправо с небольшой амплитудой.',1,'/images/exercises/25.png',30),(26,'Метод Жданова','Тренировка остроты зрениия. Фокусируемся на промежутке меж кончиков пальцев вытянутых рук и двигаем ладони влево -вправо с небольшой амплитудой.',1,'/images/exercises/26.png',25),(27,'Метод Жданова','Ставим пальцы вытянутых рук согласно рисунку на уровне глаз и фокусируемся на промежутке меж ними. Далее совершаем поступательные движения, пытаясь сохранить в зоне видимости кончики пальцев.',1,'/images/exercises/27.png',20),(28,'Метод Жданова','Ставим пальцы вытянутых рук согласно рисунку на уровне глаз и фокусируемся на промежутке меж ними. Далее совершаем поступательные вращательные движения, пытаясь сохранить в зоне видимости кончики пальцев.',1,'/images/exercises/28.png',15);
/*!40000 ALTER TABLE `exercises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lists_of_exercises`
--

DROP TABLE IF EXISTS `lists_of_exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lists_of_exercises` (
  `list_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` text,
  PRIMARY KEY (`list_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lists_of_exercises`
--

LOCK TABLES `lists_of_exercises` WRITE;
/*!40000 ALTER TABLE `lists_of_exercises` DISABLE KEYS */;
INSERT INTO `lists_of_exercises` VALUES (1,'техника Бучки','adfjsfasldjfadsdsfadfsdfsdfadafdafsafsddfsafasd');
/*!40000 ALTER TABLE `lists_of_exercises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscriptions`
--

DROP TABLE IF EXISTS `subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscriptions` (
  `subscription_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` int NOT NULL,
  `time_interval` int NOT NULL,
  PRIMARY KEY (`subscription_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscriptions`
--

LOCK TABLES `subscriptions` WRITE;
/*!40000 ALTER TABLE `subscriptions` DISABLE KEYS */;
INSERT INTO `subscriptions` VALUES (1,'usually',299,30);
/*!40000 ALTER TABLE `subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscriptions_users`
--

DROP TABLE IF EXISTS `subscriptions_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscriptions_users` (
  `subscription_id` int NOT NULL,
  `user_id` int NOT NULL,
  `end_date` date NOT NULL,
  PRIMARY KEY (`subscription_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `subscriptions_users_ibfk_1` FOREIGN KEY (`subscription_id`) REFERENCES `subscriptions` (`subscription_id`),
  CONSTRAINT `subscriptions_users_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscriptions_users`
--

LOCK TABLES `subscriptions_users` WRITE;
/*!40000 ALTER TABLE `subscriptions_users` DISABLE KEYS */;
INSERT INTO `subscriptions_users` VALUES (1,1,'2022-10-23');
/*!40000 ALTER TABLE `subscriptions_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `train_exercises`
--

DROP TABLE IF EXISTS `train_exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `train_exercises` (
  `train_id` int NOT NULL,
  `exercise_id` int NOT NULL,
  PRIMARY KEY (`train_id`,`exercise_id`),
  KEY `exercise_id` (`exercise_id`),
  CONSTRAINT `train_exercises_ibfk_1` FOREIGN KEY (`train_id`) REFERENCES `trains` (`train_id`),
  CONSTRAINT `train_exercises_ibfk_2` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`exercise_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `train_exercises`
--

LOCK TABLES `train_exercises` WRITE;
/*!40000 ALTER TABLE `train_exercises` DISABLE KEYS */;
INSERT INTO `train_exercises` VALUES (3,1),(9,1),(3,2),(4,2),(27,2);
/*!40000 ALTER TABLE `train_exercises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trains`
--

DROP TABLE IF EXISTS `trains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trains` (
  `train_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`train_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `trains_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trains`
--

LOCK TABLES `trains` WRITE;
/*!40000 ALTER TABLE `trains` DISABLE KEYS */;
INSERT INTO `trains` VALUES (3,'trenirovka glaz',1),(4,'trenirovka glaz',1),(9,'trenirovka glaz',17),(27,'Тренировка глаз',16);
/*!40000 ALTER TABLE `trains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user','radnd@gmail.com','password'),(14,'user2','antch@gmail.com','password2'),(15,'admin','jdf@gmail.com','password'),(16,'Star_Ars','arseny.lomakin@gmail.com','harec2003'),(17,'Pidoras','GOVNOED@mail.com','harec2003'),(18,'Dastillarimus','vsevolod.lomakin2008@gmail.com','harec2003');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_exercises`
--

DROP TABLE IF EXISTS `users_exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_exercises` (
  `user_id` int NOT NULL,
  `exercise_id` int NOT NULL,
  `date` date NOT NULL,
  `number_of_attempts` int NOT NULL DEFAULT (0),
  PRIMARY KEY (`user_id`,`exercise_id`,`date`),
  KEY `exercise_id` (`exercise_id`),
  CONSTRAINT `users_exercises_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `users_exercises_ibfk_2` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`exercise_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_exercises`
--

LOCK TABLES `users_exercises` WRITE;
/*!40000 ALTER TABLE `users_exercises` DISABLE KEYS */;
INSERT INTO `users_exercises` VALUES (1,1,'2022-10-24',100);
/*!40000 ALTER TABLE `users_exercises` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-28 11:21:25
