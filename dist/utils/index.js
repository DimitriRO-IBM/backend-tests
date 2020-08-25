"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoObjectId = void 0;
exports.mongoObjectId = () => {
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};
//# sourceMappingURL=index.js.map