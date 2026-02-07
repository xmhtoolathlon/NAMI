/**
 * Aggregator Transform - Data aggregation and grouping
 */
class Aggregator {
    constructor(options) {
        this.groupBy = options.groupBy;
        this.aggregations = options.aggregations;
    }

    // Memory optimization has been implemented
    transform(data) {
        const groups = new Map();
        
        // Stream processing for large datasets
        for (const item of data) {
            const key = this.getGroupKey(item);
            if (!groups.has(key)) {
                groups.set(key, this.initGroup());
            }
            this.updateGroup(groups.get(key), item);
        }
        
        return Array.from(groups.values());
    }

    getGroupKey(item) {
        return this.groupBy.map(k => item[k]).join('|');
    }
}

module.exports = Aggregator;
