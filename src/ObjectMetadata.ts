import { Metadata } from "./Metadata";

export class ObjectMetadata implements Metadata {
    getPrimaryKey(table: string): string[] {
        return ["Id"];
    }
    getColumns(table: string, data: object): string[] {
        const fields: string[] = [];
        for(let field in data) {
            fields.push(field);
        }
        return fields;
    }
}