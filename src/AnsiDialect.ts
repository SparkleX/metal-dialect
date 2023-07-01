import { Dialect } from "./Dialect.js";
import { Table } from "dcmm-schema";

export class AnsiDialect implements Dialect {
  createTable(table: Table): string {
    throw new Error("Method not implemented.");
  }
    /*
    CREATE TABLE `ORDR1` (
  `_ID` int,
  PRIMARY KEY (`_ID`)
) 
*/


}