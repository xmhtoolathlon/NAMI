"""
Logging utility module
"""
import logging
import json

class Logger:
    """Custom logger for NAMI framework"""
    
    # FIXME: Add structured logging format
    def __init__(self, name):
        self.logger = logging.getLogger(name)
        self.logger.setLevel(logging.INFO)
    
    def info(self, message, **kwargs):
        """Log info level message"""
        self.logger.info(message)
    
    def error(self, message, **kwargs):
        """Log error level message"""
        self.logger.error(message)
    
    def debug(self, message, **kwargs):
        """Log debug level message"""
        self.logger.debug(message)
