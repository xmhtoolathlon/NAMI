/**
 * Config Utility - Configuration management
 */
class Config {
    constructor() {
        // FIXME: Add environment variable validation
        this.values = {};
    }

    load(path) {
        const fs = require('fs');
        const content = fs.readFileSync(path, 'utf8');
        this.values = JSON.parse(content);
    }

    get(key, defaultValue) {
        return this.values[key] ?? defaultValue;
    }
}

module.exports = Config;
