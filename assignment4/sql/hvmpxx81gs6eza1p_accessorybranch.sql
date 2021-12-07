-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: jtb9ia3h1pgevwb1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com    Database: hvmpxx81gs6eza1p
-- ------------------------------------------------------
-- Server version	8.0.23

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `accessorybranch`
--

DROP TABLE IF EXISTS `accessorybranch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accessorybranch` (
  `item` varchar(45) NOT NULL,
  `branchNo` int NOT NULL,
  `inventory` int NOT NULL,
  KEY `itemFK_idx` (`item`),
  KEY `branchNoFK_idx` (`branchNo`),
  CONSTRAINT `branchNoFK` FOREIGN KEY (`branchNo`) REFERENCES `branches` (`branchNo`),
  CONSTRAINT `itemFK` FOREIGN KEY (`item`) REFERENCES `accessories` (`item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accessorybranch`
--

LOCK TABLES `accessorybranch` WRITE;
/*!40000 ALTER TABLE `accessorybranch` DISABLE KEYS */;
INSERT INTO `accessorybranch` VALUES ('snow tire',1,80),('snow tire',2,100),('snow tire',3,40),('Pumper',1,40),('Pumper',4,70),('Air Filter',4,10),('Air Filter',2,15),('Air Filter',3,20),('Cabin',3,20),('Cabin',1,25),('Cabin',2,8),('Battery',1,40),('Battery',2,20),('Battery',3,10);
/*!40000 ALTER TABLE `accessorybranch` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-06 19:42:26
