import { AnsiDialect } from "./AnsiDialect";
import { MColumn } from "./Metadata";

export enum PgSqlDataType {
    DECIMAL = "DECIMAL",
    INTEGER = "INTEGER",
    NVARCHAR = "NVARCHAR",
    FLOAT = "FLOAT",
}

export class PostgresDialect extends AnsiDialect {

    public createTable(name: string, columns: MColumn[], keys: string[]): string {

        let sqlColumns = "";
        for(let column of columns) {
            let pk = "";
            if (keys.includes(column.name as string)) {
                pk = " primary key";
            }
            sqlColumns+=(this.columnToSql(column)+ `${pk},`);
        }
        sqlColumns = sqlColumns.substring(0, sqlColumns.length-1);
        const sql = `create table "${name}"(${sqlColumns})`;
        return sql;
    }

    columnToSql(column: MColumn): string {
        const sql = this.columnToSqlType(column);
        return `"${column.name}" ${this.columnToSqlType(column)}`
    }
    columnToSqlType(column: MColumn): string {
        switch(column.type) {
            case PgSqlDataType.NVARCHAR:
               return `varchar(${column.size})`;
            case PgSqlDataType.INTEGER:
                return "integer";
            case PgSqlDataType.DECIMAL:
                return `numeric(${column.precision}, ${column.scale})`;
            default:
                throw new Error(`unknown type ${column.name}`);
        }
    }
}
