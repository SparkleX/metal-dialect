# SQL Dialect


```js
    const metadata = new ObjectMetadata();
	const dialect = new AnsiDialect(metadata);
    const data = {
		a: 1,
		b: 2
	}
    const sql = dialect.insertSql("TEST", data);
	expect(sql).toStrictEqual('insert into "TEST"("a","b") values(?,?)');
```