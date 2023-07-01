
import { MySqlDialect } from "../MySqlDialect.js";
import jsonfile from "jsonfile";
import { Table } from "dcmm-schema";
test("test", () => {
	const table = jsonfile.readFileSync("resources/table/CARD.table.json") as Table;
	const oDialect = new MySqlDialect();
	const sql = oDialect.createTable(table);
	console.debug(sql);
	expect(sql).toStrictEqual("create table `CARD`(`NodeID` int,`CardName` int) primary key(`NodeID`)");

});
