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
-- Table structure for table `accessories`
--

DROP TABLE IF EXISTS `accessories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accessories` (
  `item` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `inventory` int NOT NULL,
  `serviceType` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`item`),
  KEY `serviceTypeFK_idx` (`serviceType`),
  KEY `serviceTypeFKAccessory_idx` (`serviceType`),
  CONSTRAINT `serviceTypeFKAccessory` FOREIGN KEY (`serviceType`) REFERENCES `services` (`serviceType`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accessories`
--

LOCK TABLES `accessories` WRITE;
/*!40000 ALTER TABLE `accessories` DISABLE KEYS */;
INSERT INTO `accessories` VALUES ('Air Filter',79,26,'ReplaceAirFilter'),('all-season tire',80,40,'tire change'),('Battery',90,46,'CheckBattery'),('Brack Pads',147,11,'CheckBrakePads'),('BrakeFluid/ClutchFlue',74,18,'RefillBrakeFluid/ClutchFlu'),('Cabin',66,42,'ReplaceCabin'),('Car compnent',105,27,'Replacement'),('Discs/Drums',190,33,'BrakeDiscs/Drums'),('Electric Drill',136,34,'CheckCoolantHoses'),('Electronic Device',140,2,'CheckChargingSystems'),('Engine Oil',142,27,'ChangeEngineOil'),('Fuel Filter',61,22,'ReplaceFuelFilter'),('Gear',187,23,'Maintenance'),('Leveler',115,41,'CheckLevel'),('Oil Filter',59,28,'ReplaceOilFilter'),('Pumper',192,21,'CheckCondition(tires)'),('snow tire',400,0,'tire change'),('Soap',119,39,'carWash'),('Spark Plugs',93,5,'ReplaceSparkPlugs'),('tires',156,15,'tire change'),('Tools',63,7,'Inspection');
/*!40000 ALTER TABLE `accessories` ENABLE KEYS */;
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

-- Dump completed on 2021-12-06 19:42:28
