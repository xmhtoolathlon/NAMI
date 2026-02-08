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


### 🐛 Bug Fixes Log

> This section tracks FIXME items found in Python source files.

| File | Line | Description |
|------|------|-------------|
| nami_py/connectors/api_client.py | 25 | FIXME: Implement OAuth2 refresh token flow |
| nami_py/connectors/database.py | 10 | FIXME: Add connection pooling support |
| nami_py/connectors/database.py | 24 | FIXME: Implement query timeout handling |
| nami_py/core/pipeline.py | 28 | FIXME: Implement checkpoint saving for long-running jobs |
| nami_py/core/scheduler.py | 15 | FIXME: Handle timezone conversion for scheduled jobs |
| nami_py/transforms/aggregator.py | 18 | FIXME: Fix memory leak in group aggregation |
| nami_py/transforms/filter.py | 12 | FIXME: Add support for regex pattern matching |
| nami_py/utils/config.py | 12 | FIXME: Add environment variable validation |
| nami_py/utils/logger.py | 9 | FIXME: Add structured logging format |
| tests_py/test_pipeline.py | 15 | FIXME: Add integration tests for error scenarios |
| tests_py/test_scheduler.py | 23 | FIXME: Test edge cases for DST transitions |

### 🔴 Critical FIXME Items

- **Database Connector**: Connection pooling and timeout handling
- **API Client**: Rate limiting and OAuth2 token refresh
- **Scheduler**: Timezone and DST handling
- **Logger**: Structured logging and rotation

### 🔧 Complete FIXME List

- [ ] **nami/connectors/api_client.js:32** - Implement OAuth2 refresh token flow
- [ ] **nami/connectors/database.js:6** - Add connection pooling support
- [ ] **nami/connectors/database.js:17** - Implement query timeout handling
- [ ] **nami/core/pipeline.js:32** - Implement checkpoint saving for long-running jobs
- [ ] **nami/core/scheduler.js:13** - Handle timezone conversion for scheduled jobs
- [ ] **nami/transforms/filter.js:9** - Add support for regex pattern matching
- [ ] **nami/utils/config.js:6** - Add environment variable validation
- [ ] **nami/utils/logger.js:7** - Add structured logging format
- [ ] **tests/pipeline.test.js:13** - Add integration tests for error scenarios
- [ ] **tests/scheduler.test.js:20** - Test edge cases for DST transitions

## 🤝 Contributing

1. Pick a FIXME item from the list above
2. Implement the fix
3. Write/update tests
4. Update this CHANGELOG when FIXMEs are resolved
