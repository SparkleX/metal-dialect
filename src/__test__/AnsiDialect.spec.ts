
import { AnsiDialect } from "../AnsiDialect.js";
import { Dialect } from "../Dialect.js";
import { ObjectMetadata } from "../ObjectMetadata.js";
test("findByKeySql", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new AnsiDialect(metadata);
    const sql = dialect.findByKeySql("TEST", {Id:1});
	expect(sql).toStrictEqual('select * from "TEST" where "Id"=:Id');
});
test("findByKeyParams", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new AnsiDialect(metadata);
    const data = {
		Id: 1,
		b: 2
	}
    const params = dialect.findByKeyParams("TEST", data);
	expect(params).toStrictEqual([1]);
});
test("insertSql", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new AnsiDialect(metadata);
    const data = {
		a: 1,
		b: 2
	}
    const sql = dialect.insertSql("TEST", data);
	expect(sql).toStrictEqual('insert into "TEST"("a","b") values(?,?)');
});
test("insertParams", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new AnsiDialect(metadata);
    const data = {
		a: 1,
		b: 2
	}
    const params = dialect.insertParams("TEST", data);
	expect(params).toStrictEqual([1, 2]);
});
test("updateSql", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new AnsiDialect(metadata);
	const key = {
		Id: 100
	}
    const data = {
		a: 1,
		b: 2
	}
    const sql = dialect.updateSql("TEST", key, data);
	expect(sql).toStrictEqual('update "TEST" set "a"=?,"b"=? where "Id"=?');
});
test("updateParams", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new AnsiDialect(metadata);
	const key = {
		Id: 100
	}
    const data = {
		a: 1,
		b: 2
	}
    const rt = dialect.updateParams("TEST", key, data);
	expect(rt).toStrictEqual([1,2,100]);
});

test("deleteSql", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new AnsiDialect(metadata);
    const sql = dialect.deleteSql("TEST", {Id:1});
	expect(sql).toStrictEqual('delete from "TEST" where "Id"=:Id');
});

test("foo", () => {
    const metadata = new ObjectMetadata();
	const dialect: Dialect = new AnsiDialect();
    dialect.createIndex("", [], true);
	dialect.createTable("", [], []);
});