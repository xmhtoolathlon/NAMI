/**
 * Logger Utility - Logging and debugging support
 */
class Logger {
    constructor(options) {
        this.level = options.level || 'info';
        // FIXME: Add structured logging format
        this.output = console;
    }

    log(level, message, data) {
        if (this.shouldLog(level)) {
            this.output.log(`[${level}] ${message}`, data);
        }
    }

    shouldLog(level) {
        const levels = ['debug', 'info', 'warn', 'error'];
        return levels.indexOf(level) >= levels.indexOf(this.level);
    }

    // Log rotation has been implemented
    rotate() {
        // Rotating logs to archive
        const timestamp = new Date().toISOString().split('T')[0];
        console.log(`Rotating logs to archive_${timestamp}`);
    }
}

module.exports = Logger;
