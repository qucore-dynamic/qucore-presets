# QuCore Dynamic: Official Presets

This repository contains the official development presets and architectural standards for the **QuCore Dynamic** ecosystem. Use these templates to build new modules, integrations, or to extend the core infrastructure while maintaining strict code consistency.

> **Warning:** All presets are synchronized with the global QuCore linting policy: **Strict Backticks** and **Zero Semicolons**.

## Available Presets

| Preset | Path | Purpose | License |
| :--- | :--- | :--- | :--- |
| **Backend Core** | `/back` | Isolated Node.js services and API modules. | GPL-3.0 |
| **Frontend Core** | `/front` | Next.js interfaces for the ecosystem. | GPL-3.0 |

## Technical Stack

- **Runtime**: Node.js 22+
- **Language**: TypeScript (Strict Mode)
- **Linter**: ESLint 9+ (QuCore Elite Config)
- **Style**: Backticks-only, Zero semicolons.

---

## Configuration & Placeholders

Before running any module, you must replace the following placeholders across files (Docker Compose, `.env`, `package.json`, `config.ts`, etc):

* **`<MODULE_NAME>`**: The functional name of the module (e.g., `auth`, `workspace`). This defines the project identity and subdomains.
* **`<SERVICE_NAME>`**: The specific name of the microservice or Docker container within the stack.
* **`<SERVICE_PORT>`**: The port on which the specific microservice is exposed.

---

## Installation & Setup

### 1. Project Initialization
To create a new module using a preset without git history:

```bash
# For a Backend module
npx degit qucore-dynamic/qucore-presets/back qucore-module-name

# For a Frontend module
npx degit qucore-dynamic/qucore-presets/front qucore-app-name
```

### 2. Environment Configuration
Crucial step before running the application. The configuration is split into two logic blocks within your `.env` files.

```bash
# Create your local environment file from the template
cp .env.example .env

# Open .env and follow the instructions inside:
# 1. Fill BLOCK #1 for local development (npm run dev).
# 2. Fill BLOCK #2 for Docker overrides in .env.prod.
# 3. Replace <MODULE_NAME>, <SERVICE_NAME>, and <SERVICE_PORT>.
```

### 3. Local Execution
Standard procedure for running a module locally:

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Backend only: Generate Prisma client
npx prisma generate

# Run in development mode
npm run dev
```

### 4. Docker Execution
The infrastructure supports flexible deployment via Docker Compose.

#### **Backend**
Commands should be executed relative to the `back/docker` directory:
```bash
# Run infrastructure only (DB, Redis, etc.)
docker-compose -f docker-compose.infra.yml up -d

# Run the service in development mode
docker-compose -f docker-compose.dev.yml up -d --build

# Run in production
docker-compose -f docker-compose.prod.yml up -d
```

#### **Frontend**
Execute from the `front` directory:
```bash
# Development mode
docker-compose -f docker-compose.dev.yml up -d

# Production mode
docker-compose -f docker-compose.prod.yml up -d --build
```

---

## Contributing
We are building an open but strictly structured ecosystem:
1. Read the [CONTRIBUTING.md](./CONTRIBUTING.md) - it defines the "Elite" style guide.
2. Ensure your code passes the check: `npm run lint`.
3. Open a Pull Request to the appropriate branch.

## License & Authorship
The **QuCore Dynamic** project and these presets are created and maintained by **Artem Zhytovoz**.
Distributed under the **GNU GPL v3** license.

---
_Every line of code is a step toward global technological leverage._