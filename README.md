# QuCore Dynamic: Official Presets

This repository contains the official development presets and architectural standards for the **QuCore Dynamic** ecosystem. Use these templates to build new modules, integrations, or to extend the core infrastructure while maintaining strict code consistency.

> **Warning:** All presets are synchronized with the global QuCore linting policy: **Strict Backticks** and **Zero Semicolons**.

## Available Presets

| Preset                | Path    | Purpose                                           | License |
| :-------------------- | :-------| :------------------------------------------------ | :------ |
| **Backend Core**      | /back   | Isolated Node.js services and API modules.        | GPL-3.0 |
| **Frontend Core**     | /front  | Next.js interfaces for the ecosystem.             | GPL-3.0 |

## Technical Stack

- **Runtime**: Node.js 22+
- **Language**: TypeScript (Strict Mode)
- **Linter**: ESLint 9+ (QuCore Elite Config)
- **Style**: Backticks-only, Zero semicolons.

## How to Start a New Module

If you are creating a new QuCore Dynamic module from scratch, use `degit` to download the specific preset without the git history:

```bash
# For a Backend module
npx degit qucore-dynamic/qucore-presets/back qucore-module-name

# For a Frontend module
npx degit qucore-dynamic/qucore-presets/front qucore-app-name
```

## Contributing

We are building an open but strictly structured ecosystem. If you plan to propose a module or a fix to the core:

1. Read the [CONTRIBUTING.md](./CONTRIBUTING.md) - it defines the "Elite" style guide.
2. Ensure your code passes the check: `npm run lint`.
3. Open a Pull Request to the appropriate branch.

## License & Authorship

The **QuCore Dynamic** project and these presets are created and maintained by **Artem Zhytovoz**.

Distributed under the **GNU GPL v3** license. We believe in the power of Open Source: any code built upon the QuCore core must remain open to the community.

---

_Every line of code is a step toward global technological leverage._
