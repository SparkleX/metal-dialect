import { AnsiDialect } from "./AnsiDialect.js";
import { MColumn, Metadata } from "./Metadata.js";

export class PostgresDialect extends AnsiDialect {


  /*  public createTable(name: string, columns: MColumn[], keys: string[]): string {

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
            case SqlType.varchar:
               return `varchar(${column.size})`;
            case SqlType.integer:
                return "integer";
            case SqlType.float:
                return `float`;
            case SqlType.decimal:
                return `numeric(${column.precision}, ${column.scale})`;
            case SqlType.date:
                return `date`;
            case SqlType.time:
                return `time`;
            case SqlType.timestamp:
                return `timestamp`;
            case SqlType.clob:
                return `text`;
            case SqlType.blob:
                return `bytea`;
            default:
                throw new Error(`unknown type ${column.name}`);
        }
    }*/
}
