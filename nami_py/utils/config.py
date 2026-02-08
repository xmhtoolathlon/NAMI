"""
Configuration management module
"""
import os

class Config:
    """Configuration handler with environment variable support"""
    
    def __init__(self, config_file=None):
        self.config_file = config_file
        self.config = {}
        self._load_env_vars()
    
    def _load_env_vars(self):
        """Load and validate environment variables"""
        required_vars = ['NAMI_ENV', 'NAMI_LOG_LEVEL']
        
        # Environment variable validation is now implemented
        for var in required_vars:
            value = os.environ.get(var)
            if value:
                self.config[var] = value
            else:
                self.config[var] = self._get_default(var)
    
    def _get_default(self, var_name):
        """Get default value for a config variable"""
        defaults = {
            'NAMI_ENV': 'development',
            'NAMI_LOG_LEVEL': 'INFO'
        }
        return defaults.get(var_name, None)
    
    def get(self, key, default=None):
        """Get a configuration value"""
        return self.config.get(key, default)
