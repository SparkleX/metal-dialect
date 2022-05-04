
import { AnsiDialect } from "../AnsiDialect";
import { ObjectMetadata } from "../ObjectMetadata";
test("findByKeySql", () => {
    const metadata = new ObjectMetadata();
	const dialect = new AnsiDialect(metadata);
    const sql = dialect.findByKeySql("TEST");
	expect(sql).toStrictEqual('select * from "TEST" where "Id"=?');
});
test("findByKeyParams", () => {
    const metadata = new ObjectMetadata();
	const dialect = new AnsiDialect(metadata);
    const data = {
		Id: 1,
		b: 2
	}
    const params = dialect.findByKeyParams("TEST", data);
	expect(params).toStrictEqual([1]);
});
test("insertSql", () => {
    const metadata = new ObjectMetadata();
	const dialect = new AnsiDialect(metadata);
    const data = {
		a: 1,
		b: 2
	}
    const sql = dialect.insertSql("TEST", data);
	expect(sql).toStrictEqual('insert into "TEST"("a","b") values(?,?)');
});
test("insertParams", () => {
    const metadata = new ObjectMetadata();
	const dialect = new AnsiDialect(metadata);
    const data = {
		a: 1,
		b: 2
	}
    const params = dialect.insertParams("TEST", data);
	expect(params).toStrictEqual([1, 2]);
});
test("updateSql", () => {
    const metadata = new ObjectMetadata();
	const dialect = new AnsiDialect(metadata);
    const data = {
		a: 1,
		b: 2
	}
    const sql = dialect.updateSql("TEST", data);
	expect(sql).toStrictEqual('update "TEST" set "a"=?,"b"=? where "Id"=?');
});
test("updateParams", () => {
    const metadata = new ObjectMetadata();
	const dialect = new AnsiDialect(metadata);
    const data = {
		Id: 100,
		a: 1,
		b: 2
	}
    const rt = dialect.updateParams("TEST", data);
	expect(rt).toStrictEqual([100,1,2,100]);
});

test("deleteSql", () => {
    const metadata = new ObjectMetadata();
	const dialect = new AnsiDialect(metadata);
    const sql = dialect.deleteSql("TEST");
	expect(sql).toStrictEqual('delete "TEST" where "Id"=?');
});