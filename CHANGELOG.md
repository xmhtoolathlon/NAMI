# NAMI Data Pipeline Framework - Changelog

> 📊 **Main Branch** - Production changelog for NAMI (Node-based Asynchronous Modular Integration)

## About NAMI

NAMI is a lightweight data pipeline framework for building ETL workflows in JavaScript/Node.js. It provides modular connectors, transforms, and scheduling capabilities.

## 🔄 Version History

### v2.3.0 (Current Development)

⚠️ **Note**: This version has several FIXME items that need to be addressed before release.

#### New Features
- Added streaming support for large file processing
- Implemented parallel execution for independent pipeline stages

#### Known Issues
- Connection pooling not yet implemented (see FIXME list)
- Rate limiting pending for API connector

### v2.2.0 (2024-01-15)
- Fixed memory leak in aggregator transform
- Added support for PostgreSQL 15

### v2.1.0 (2023-12-01)
- Initial scheduler implementation
- Basic database connector

## 📁 Project Structure

```
NAMI/
├── nami/                  # Core framework
│   ├── core/              # Pipeline and scheduler (⚠️ FIXME items pending)
│   ├── connectors/        # Database and API clients (⚠️ Connection issues)
│   ├── transforms/        # Data transformation modules
│   └── utils/             # Logging and config utilities
├── tests/                 # Test suites
└── CHANGELOG.md           # This file
```

## 🔧 Development Notes

- This is a **development version** with incomplete implementations
- Many functions contain FIXME markers indicating critical fixes needed
- Database connection pooling needs completion
- API rate limiting is a priority fix


### 🔴 Critical FIXME Items

- **Database Connector**: Connection pooling and timeout handling
- **API Client**: Rate limiting and OAuth2 token refresh
- **Scheduler**: Timezone and DST handling
- **Logger**: Structured logging and rotation

### 🔧 Complete FIXME List

- [ ] **nami/connectors/api_client.js:34** - Add rate limiting support
- [ ] **nami/connectors/api_client.js:78** - Implement OAuth2 refresh token flow
- [ ] **nami/connectors/database.js:12** - Add connection pooling support
- [ ] **nami/connectors/database.js:89** - Implement query timeout handling
- [ ] **nami/core/pipeline.js:23** - Add retry logic for failed pipeline stages
- [ ] **nami/core/pipeline.js:67** - Implement checkpoint saving for long-running jobs
- [ ] **nami/core/scheduler.js:45** - Handle timezone conversion for scheduled jobs
- [ ] **nami/transforms/aggregator.js:56** - Optimize memory usage for large datasets
- [ ] **nami/transforms/filter.js:21** - Add support for regex pattern matching
- [ ] **nami/utils/config.js:8** - Add environment variable validation
- [ ] **nami/utils/logger.js:15** - Add structured logging format
- [ ] **nami/utils/logger.js:42** - Implement log rotation
- [ ] **tests/pipeline.test.js:33** - Add integration tests for error scenarios
- [ ] **tests/scheduler.test.js:19** - Add mock clock for time-based tests
- [ ] **tests/scheduler.test.js:55** - Test edge cases for DST transitions

## 🤝 Contributing

1. Pick a FIXME item from the list above
2. Implement the fix
3. Write/update tests
4. Update this CHANGELOG when FIXMEs are resolved
