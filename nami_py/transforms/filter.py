"""
Filter transform module
"""

class Filter:
    """Data filter transform"""
    
    def __init__(self, condition):
        self.condition = condition
    
    def process(self, data):
        """Apply filter to data"""
        # FIXME: Add support for regex pattern matching
        if callable(self.condition):
            return [item for item in data if self.condition(item)]
        return data
