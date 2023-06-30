import { Dialect } from "./Dialect.js";
import { MColumn, Metadata } from "./Metadata.js";

export class AnsiDialect implements Dialect{
    constructor( metadata: Metadata) {
        this.metadata = metadata;
    }
    public createTable(name: string, columns: MColumn[], keys: string[]): string {
        return "";
    }
    public createIndex(name: string, columns: string[], unique: boolean): string {
        return "";
    }
    metadata: Metadata;
    public findByKeySql(table: string, key: any):string {
        const where = this.whereSqlKeysWithName(key);
        const sql = `select * from "${table}" where ${where}`
        return sql
    }
    public findByKeyParams(table: string, key: any):any[] {
        const rt = this.whereSqlKeysParams(table, key);
    
        return rt;
    }
    public insertSql(table: string, data: any):string {
        const columns = this.metadata.getColumns(table, data);
        let strColumn = "";
        let strValue = "";
        for(let column of columns) {
            strColumn+=`"${column}",`;
            strValue+=`?,`;
        }
        strColumn = strColumn.substring(0, strColumn.length-1);
        strValue = strValue.substring(0, strValue.length-1);
        const sql = `insert into "${table}"(${strColumn}) values(${strValue})`
        return sql
    }

    public insertParams(table: string, data: any):any [] {
        const columns = this.metadata.getColumns(table, data);
        const rt: any[] = [];
        for(let column of columns) {
            const value = data[column];
            rt.push(value);
        }
        return rt;
    }

    public updateSql(table: string, key: any, data: any):string {
        const columns = this.metadata.getColumns(table, data);
        let sqlUpdate = "";
        for(let column of columns) {
            sqlUpdate+=`"${column}"=?,`;
        }
        sqlUpdate = sqlUpdate.substring(0, sqlUpdate.length-1);
        const sqlWhere = this.whereSqlKeys(table);
        const sql = `update "${table}" set ${sqlUpdate} where ${sqlWhere}`
        return sql
    }
    public updateParams(table: string, key: any, data: any):any[] {
        const columns = this.metadata.getColumns(table, data);
        const colKeys = this.metadata.getPrimaryKey(table);
        const rt: any[] = [];

        for(let column of columns) {
            rt.push(data[column]);
        }
        for(let column of colKeys) {
            rt.push(key[column]);
        }

        return rt
    }
    public deleteSql(table: string, key: any):string {
        const columns = this.metadata.getPrimaryKey(table);
        const where = this.whereSqlKeysWithName(key);
        const sql = `delete from "${table}" where ${where}`;
        return sql
    }
    private whereSqlKeysWithName(key: any): string {
        let where = "";
        for(let k in key) {
            where+=`"${k}"=:${k} and `;
        }
        where = where.substring(0, where.length-5);
        return where;
    }
    private whereSqlKeys(table: string): string {
        const columns = this.metadata.getPrimaryKey(table);
        let where = "";
        for(let column of columns) {
            where+=`"${column}"=? and `;
        }
        where = where.substring(0, where.length-5);
        return where;
    }
    private whereSqlKeysParams(table: string, data: any): any[] {
        const columns = this.metadata.getPrimaryKey(table);
        const rt: any[] = [];
        for(let column of columns) {
            rt.push(data[column]);
        }
        return rt;
    }
}