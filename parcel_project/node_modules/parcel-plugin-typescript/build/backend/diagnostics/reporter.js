"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = require("./format");
function reportDiagnostics(diagnostics, context) {
    if (diagnostics.length > 0) {
        const frame = format_1.formatDiagnostics(diagnostics, context);
        console.error(frame);
    }
}
exports.reportDiagnostics = reportDiagnostics;
//# sourceMappingURL=reporter.js.map