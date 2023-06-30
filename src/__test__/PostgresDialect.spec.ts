
import { PostgresDialect } from "../PostgresDialect.js";
import { Dialect } from "../Dialect.js";
import { ObjectMetadata } from "../ObjectMetadata.js";
import { MColumn } from "../Metadata.js";
/*test("create table", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new PostgresDialect(metadata);
	const columns: MColumn[] = [
		{
			name: "C1",
			type: SqlType.varchar,
			size: 100
		},
		{
			name: "C2",
			type: SqlType.integer
		},
		{
			name: "C3",
			type: SqlType.decimal,
			precision: 19,
			scale:6
		},
		{
			name: "C4",
			type: SqlType.float
		},
		{
			name: "C5",
			type: SqlType.date
		},
		{
			name: "C6",
			type: SqlType.time
		},
		{
			name: "C7",
			type: SqlType.timestamp
		},
		{
			name: "C8",
			type: SqlType.blob
		},
		{
			name: "C8",
			type: SqlType.clob
		}
	]
    const sql = dialect.createTable("TEST", columns, ["C1"])
	expect(sql).toStrictEqual('create table "TEST"("C1" varchar(100) primary key,"C2" integer,"C3" numeric(19, 6),"C4" float,"C5" date,"C6" time,"C7" timestamp,"C8" bytea,"C8" text)');
});
*/
test("create table", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new PostgresDialect(metadata);
	const columns: MColumn[] = [
		{
			name: "C1",
			type: "Unknow",
			size: 100
		}
	]
	expect(()=>{
    const sql = dialect.createTable("TEST", columns, ["Id"]);
	}).toThrowError();
});