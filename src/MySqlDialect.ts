import { Field, Table, DbFieldType } from "dcmm-schema";
import { AnsiDialect } from "./AnsiDialect.js";

export class MySqlDialect extends AnsiDialect {
    public createTable(table: Table): string {
        let sql = `create table \`${table.name}\`(`;
        for (let name in table.fields) {
            const field = table.fields[name];
            const type = this.columnToSqlType(field, name);
            sql = sql + `\`${name}\` ${type},`;
        }
        //sql = sql.substring(0, sql.length - 1);
        sql = sql + ` primary key(\`NodeID\`))`;

        return sql;
    }

    columnToSqlType(field: Field, name: string): string {
        switch(field.type) {
            case DbFieldType.STRING:
                return `varchar(${field.size})`;
            case DbFieldType.UUID:
               return `varchar(40)`;
            case DbFieldType.NUMBER:
                return "int";
            case DbFieldType.DECIMAL:
                return `decimal(19, 6)`;
            case DbFieldType.DATE:
                return `date`;
            //case DbFieldType.TIME:
                //return `time`;
            default:
                throw new Error(`unknown type ${name}`);
        }
    }
}