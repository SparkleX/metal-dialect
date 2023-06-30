import { MColumn } from "./Metadata.js";

export interface Dialect {
    findByKeySql(table: string, key: any): string;
    findByKeyParams(table: string, key: any): any[];
    insertSql(table: string, data: any): string;

    insertParams(table: string, data: any): any[];
    updateSql(table: string, key: any, data: any): string;
    updateParams(table: string, key: any, data: any): any[];
    deleteSql(table: string, key: any): string;

    createTable(name: string, columns:MColumn[], keys:string[]): string;
    createIndex(name: string, columns:string[], unique: boolean): string;
}