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
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `serviceType` varchar(45) NOT NULL,
  `serviceDescription` varchar(45) NOT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`serviceType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES ('BrakeDiscs/Drums','BrakeDiscs/Drums',199),('car wash','car wash description',100),('carWash','carWash',100),('ChangeEngineOil','ChangeEngineOil',100),('Check Brake pads/Liners, Brake discs/Drums, a','NDWWMRURAB',132),('Check condition of the tires','UVYTNMHCLI',200),('Check level and refill brake fluid/clutch flu','INBTVDKZJL',135),('Check the battery','FLYTPZSRGD',129),('CheckBattery','CheckBattery',309),('CheckBrakePads','CheckBrakePads',213),('CheckChargingSystems','CheckChargingSystems',50),('CheckCondition(tires)','CheckCondition(tires)',50),('CheckCoolantHoses','CheckCoolantHoses',50),('CheckLevel','INBTVDKZJL',135),('inspection','general inspection',50),('maintenance','maintenance description',150),('RefillBrakeFluid/ClutchFlu','NDWWMRURAB',132),('ReplaceAirFilter','LBSIXEWEOC',132),('ReplaceCabin','MUEIKPZHVN',141),('ReplaceFuelFilter','JKAKSTRKYG',123),('Replacement','Replace Car componet ',90),('ReplaceOilFilter','CLPIBWEGCP',201),('ReplaceSparkPlugs','BIBGPFIPOI',32),('tire change','Tier Change',149.99);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
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

-- Dump completed on 2021-12-06 19:42:24
