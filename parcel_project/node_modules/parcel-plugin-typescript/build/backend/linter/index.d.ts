import * as tslint from 'tslint';
import * as ts from 'typescript';
export declare class Linter {
    private readonly config;
    private readonly linter;
    constructor(program: ts.Program, config: tslint.Configuration.IConfigurationFile);
    lint(file: string, code: string): tslint.RuleFailure[];
}
