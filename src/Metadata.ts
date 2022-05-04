export interface Metadata {
    getColumns(table: string, data: object): string[];
    getPrimaryKey(table: string): string[];
}