"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Linter {
    constructor(program, config) {
        this.config = config;
        this.linter = null;
        try {
            const tslintModule = require('tslint');
            this.linter = new tslintModule.Linter({ fix: false }, program);
        }
        catch (_a) {
            this.linter = null;
        }
    }
    lint(file, code) {
        const { linter } = this;
        if (!linter) {
            return [];
        }
        linter.lint(file, code, this.config);
        return linter
            .getResult()
            .failures
            .filter(failure => failure.getFileName() === file);
    }
}
exports.Linter = Linter;
//# sourceMappingURL=index.js.map