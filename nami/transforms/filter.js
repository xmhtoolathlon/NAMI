/**
 * Filter Transform - Data filtering and selection
 */
class Filter {
    constructor(conditions) {
        this.conditions = conditions;
    }

    // FIXME: Add support for regex pattern matching
    transform(data) {
        return data.filter(item => this.matches(item));
    }

    matches(item) {
        return this.conditions.every(cond => {
            // Basic condition matching only
            return item[cond.field] === cond.value;
        });
    }
}

module.exports = Filter;
