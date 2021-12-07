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
-- Temporary view structure for view `mostloyalcustomer`
--

DROP TABLE IF EXISTS `mostloyalcustomer`;
/*!50001 DROP VIEW IF EXISTS `mostloyalcustomer`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `mostloyalcustomer` AS SELECT 
 1 AS `name`,
 1 AS `branchNo`,
 1 AS `location`,
 1 AS `clientAppointments`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `customerpayments`
--

DROP TABLE IF EXISTS `customerpayments`;
/*!50001 DROP VIEW IF EXISTS `customerpayments`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `customerpayments` AS SELECT 
 1 AS `appointmentNo`,
 1 AS `clientName`,
 1 AS `date`,
 1 AS `location`,
 1 AS `branchNo`,
 1 AS `totalPayment`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `staffappointment`
--

DROP TABLE IF EXISTS `staffappointment`;
/*!50001 DROP VIEW IF EXISTS `staffappointment`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `staffappointment` AS SELECT 
 1 AS `staffNo`,
 1 AS `name`,
 1 AS `branchNo`,
 1 AS `location`,
 1 AS `staffAppointments`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `mostloyalcustomer`
--

/*!50001 DROP VIEW IF EXISTS `mostloyalcustomer`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`cx7hxpf3okktuuml`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `mostloyalcustomer` AS select `c`.`name` AS `name`,`b`.`branchNo` AS `branchNo`,`b`.`location` AS `location`,count(`a`.`appointmentNo`) AS `clientAppointments` from ((`clients` `c` join `branches` `b`) join `appointments` `a`) where ((`c`.`clientNo` = `a`.`clientNo`) and (`b`.`branchNo` = `a`.`branchNo`) and (`a`.`date` >= '2021-08-01 00:00:00') and (`a`.`date` <= '2021-08-31 00:00:00')) group by `c`.`name`,`b`.`branchNo`,`b`.`location` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `customerpayments`
--

/*!50001 DROP VIEW IF EXISTS `customerpayments`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`cx7hxpf3okktuuml`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `customerpayments` AS select `a`.`appointmentNo` AS `appointmentNo`,`c`.`name` AS `clientName`,`a`.`date` AS `date`,`b`.`location` AS `location`,`b`.`branchNo` AS `branchNo`,sum(`ser`.`price`) AS `totalPayment` from ((((`services` `ser` join `clients` `c`) join `appointments` `a`) join `branches` `b`) join `serciveappointment` `sa`) where ((`ser`.`serviceType` = `sa`.`serviceType`) and (`a`.`appointmentNo` = `sa`.`appointmentNo`) and (`a`.`clientNo` = `c`.`clientNo`) and (`a`.`branchNo` = `b`.`branchNo`)) group by `a`.`appointmentNo` order by `a`.`appointmentNo` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `staffappointment`
--

/*!50001 DROP VIEW IF EXISTS `staffappointment`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`cx7hxpf3okktuuml`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `staffappointment` AS select `s`.`staffNo` AS `staffNo`,`s`.`name` AS `name`,`b`.`branchNo` AS `branchNo`,`b`.`location` AS `location`,count(`astf`.`appointmentNo`) AS `staffAppointments` from (((`staffs` `s` join `branches` `b`) join `appointments` `a`) join `appointmentstaff` `astf`) where ((`s`.`staffNo` = `astf`.`staffNo`) and (`b`.`branchNo` = `s`.`branchNo`) and (`astf`.`appointmentNo` = `a`.`appointmentNo`) and (`a`.`date` >= '2021-08-01 00:00:00') and (`a`.`date` <= '2021-08-31 00:00:00')) group by `astf`.`staffNo` order by `s`.`staffNo` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-06 19:42:33
