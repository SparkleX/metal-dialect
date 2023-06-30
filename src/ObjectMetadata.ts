import { Metadata } from "./Metadata.js";

export class ObjectMetadata implements Metadata {
    public getPrimaryKey(table: string): string[] {
        return ["Id"];
    }
    public getColumns(table: string, data: object): string[] {
        const fields: string[] = [];
        for(let field in data) {
            fields.push(field);
        }
        return fields;
    }
}