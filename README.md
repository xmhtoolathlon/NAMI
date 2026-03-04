# NAMI
Node-based Asynchronous Modular Integration - A lightweight data pipeline framework

## About

NAMI is a lightweight data pipeline framework for building ETL workflows. It provides modular connectors, transforms, and scheduling capabilities with implementations in both JavaScript/Node.js and Python.

## 🔧 Development Status

This repository is under active development. The Python implementation (`nami_py/`) is the current focus.

### 🐛 Known Issues

> This section tracks FIXME items found in JavaScript source files, ordered by file path and line number.

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

## 📁 Repository Structure

```
NAMI/
├── nami/                  # JavaScript/Node.js implementation
├── nami_py/               # Python implementation
│   ├── core/              # Pipeline and scheduler
│   ├── connectors/        # Database and API clients
│   ├── transforms/        # Data transformation modules
│   └── utils/             # Logging and config utilities
├── tests/                 # JavaScript test suites
├── tests_py/              # Python test suites
└── README.md              # This file
```

## 🤝 Contributing

1. Pick a Known Issue from the list above
2. Implement the fix
3. Write/update tests
4. Submit a pull request
