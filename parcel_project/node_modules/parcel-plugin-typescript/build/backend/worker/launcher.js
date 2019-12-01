"use strict";
const tslib_1 = require("tslib");
const tsc_1 = require("../compiler/tsc");
const config_loader_1 = require("../config-loader");
const index_1 = require("../service/index");
const compilers = new Map();
const services = new Map();
function getCompiler(file, rootDir) {
    let compiler = compilers.get(rootDir);
    if (!compiler) {
        compiler = config_loader_1.loadConfiguration(file, rootDir).then(config => new tsc_1.TypeScriptCompiler(config));
        compilers.set(rootDir, compiler);
    }
    return compiler;
}
function getService(file, rootDir) {
    let service = services.get(rootDir);
    if (!service) {
        service = config_loader_1.loadConfiguration(file, rootDir).then(({ typescript }) => new index_1.LanguageService(typescript));
        services.set(rootDir, service);
    }
    return service;
}
const handler = {
    compile({ file, reportErrors, rootDir }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const compiler = yield getCompiler(file, rootDir);
            return compiler.compile(file, reportErrors, rootDir);
        });
    },
    typeCheck({ file, reportErrors, rootDir }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const service = yield getService(file, rootDir);
            return service.check(file, reportErrors, rootDir);
        });
    }
};
module.exports = handler;
//# sourceMappingURL=launcher.js.map