# NAMI
Node-based Asynchronous Modular Integration - A lightweight data pipeline framework

## About

NAMI is a lightweight data pipeline framework for building ETL workflows. It provides modular connectors, transforms, and scheduling capabilities with implementations in both JavaScript/Node.js and Python.

## 🔧 Development Status

This repository is under active development. The Python implementation (`nami_py/`) is the current focus.

### 🔧 Complete FIXME List

- [ ] **nami_py/connectors/database.py:9** - Add connection pooling support
- [ ] **nami_py/connectors/database.py:25** - Implement query timeout handling
- [ ] **nami_py/core/pipeline.py:27** - Implement checkpoint saving for long-running jobs
- [ ] **nami_py/core/pipeline.py:32** - Add validation for circular dependencies
- [ ] **nami_py/transforms/filter.py:13** - Add support for regex pattern matching
- [ ] **nami_py/utils/logger.py:10** - Add structured logging format
- [ ] **tests_py/test_scheduler.py:20** - Test edge cases for DST transitions

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

1. Pick a FIXME item from the list above
2. Implement the fix
3. Write/update tests
4. Submit a pull request
