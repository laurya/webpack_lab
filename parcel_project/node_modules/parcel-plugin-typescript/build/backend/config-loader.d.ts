import * as ts from 'typescript';
export declare type TransformerList = Array<ts.TransformerFactory<ts.SourceFile>>;
export interface Transformers {
    before: TransformerList;
    after?: TransformerList;
}
export interface Configuration {
    path: string | null;
    typescript: ts.ParsedCommandLine;
    plugin: {
        transpileOnly: boolean;
        transformers: Transformers;
    };
}
export declare function loadConfiguration(path: string, rootDir: string): Promise<Configuration>;
