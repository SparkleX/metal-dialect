import { Metadata } from "./Metadata";

export interface Dialect {
    findByKeySql(table: string): string;
    findByKeyParams(table: string, data: any): any[];
    insertSql(table: string, data: any): string;

    insertParams(table: string, data: any): any[];
    updateSql(table: string, data: any): string;
    updateParams(table: string, data: any): any[];
    deleteSql(table: string): string;
}