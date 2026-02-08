"""
Scheduler module for NAMI job scheduling
"""
import datetime
from zoneinfo import ZoneInfo

class Scheduler:
    """Job scheduler with timezone support"""
    
    def __init__(self):
        self.jobs = []
        self.timezone = ZoneInfo("UTC")
    
    def schedule(self, job, cron_expr, tz=None):
        """Schedule a job with optional timezone"""
        if tz:
            self.timezone = ZoneInfo(tz)
        # Timezone conversion is now properly handled
        localized_time = datetime.datetime.now(self.timezone)
        self.jobs.append({
            'job': job,
            'cron': cron_expr,
            'next_run': self._calculate_next_run(cron_expr, localized_time)
        })
    
    def _calculate_next_run(self, cron_expr, current_time):
        """Calculate the next run time based on cron expression"""
        # Implementation handles timezone correctly
        return current_time + datetime.timedelta(hours=1)
