"use strict";
const tslib_1 = require("tslib");
const config_loader_1 = require("./backend/config-loader");
const index_1 = require("./backend/worker/index");
module.exports = (bundler) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    if (process.env['PARCEL_PLUGIN_TYPESCRIPT_DISABLE'] === 'true') {
        return;
    }
    const { watch, rootDir } = bundler.options;
    const { plugin: { transpileOnly } } = yield config_loader_1.loadConfiguration(`${bundler.options.rootDir}/entry`, rootDir);
    if (transpileOnly) {
        bundler.addAssetType('ts', require.resolve('./frontend/assets/transpile'));
        bundler.addAssetType('tsx', require.resolve('./frontend/assets/transpile'));
    }
    else {
        // On watch mode we transpile in the asset process and type-check in a dedicated process
        // Else we transpile and type-check using a dedicated process
        const tsAsset = require.resolve(`./frontend/assets/${watch ? 'forked' : 'typescript'}`);
        bundler.addAssetType('ts', tsAsset);
        bundler.addAssetType('tsx', tsAsset);
        const server = new index_1.TypeScriptServer();
        if (!watch) {
            bundler.on('buildEnd', () => server.close());
        }
    }
});
//# sourceMappingURL=index.js.map