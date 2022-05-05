import { MColumn } from "./Metadata";

export enum SqlDataType {
    DECIMAL = "DECIMAL",
    INTEGER = "INTEGER",
    NVARCHAR = "NVARCHAR",
    FLOAT = "FLOAT",
}

export interface Dialect {
    findByKeySql(table: string): string;
    findByKeyParams(table: string, data: any): any[];
    insertSql(table: string, data: any): string;

    insertParams(table: string, data: any): any[];
    updateSql(table: string, key: any, data: any): string;
    updateParams(table: string, key: any, data: any): any[];
    deleteSql(table: string): string;

    createTable(name: string, columns:MColumn[], keys:string[]): string;
    createIndex(name: string, columns:string[], unique: boolean): string;
}