
import { PgSqlDataType, PostgresDialect } from "../PostgresDialect";
import { Dialect } from "../Dialect";
import { ObjectMetadata } from "../ObjectMetadata";
import { MColumn } from "../Metadata";
test("create table", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new PostgresDialect(metadata);
	const columns: MColumn[] = [
		{
			name: "C1",
			type: PgSqlDataType.NVARCHAR,
			size: 100
		},
		{
			name: "C2",
			type: PgSqlDataType.INTEGER
		},
		{
			name: "C3",
			type: PgSqlDataType.DECIMAL,
			precision: 19,
			scale:6
		}
	]
    const sql = dialect.createTable("TEST", columns, ["C1"])
	expect(sql).toStrictEqual('create table "TEST"("C1" varchar(100) primary key,"C2" integer,"C3" numeric(19, 6))');
});

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