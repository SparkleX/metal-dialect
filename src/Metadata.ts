export interface MColumn {
    name?: string;
    type?: string;
    size?: number;
    precision?: number;
    scale?: number;
} 




export interface Metadata {
    getColumns(table: string, data: object): string[];
    getPrimaryKey(table: string): string[];
}