"""
Aggregator transform module
"""

class Aggregator:
    """Data aggregation transform"""
    
    def __init__(self, group_by, agg_func):
        self.group_by = group_by
        self.agg_func = agg_func
    
    def process(self, data):
        """Aggregate data by groups"""
        groups = {}
        for item in data:
            key = item.get(self.group_by)
            if key not in groups:
                groups[key] = []
            groups[key].append(item)
        
        # Memory-efficient implementation
        result = []
        for key, items in groups.items():
            result.append({
                self.group_by: key,
                'value': self.agg_func(items)
            })
            # Clear processed items to prevent memory leak
            items.clear()
        
        return result
