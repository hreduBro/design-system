# Design System

This project is an Angular-based design system using Nx workspace for scalable enterprise development. It provides reusable UI components, patterns, and guidelines to ensure consistent user experiences across applications.

## Project Structure

```
design-system/
├── apps/                     # Application projects
│   └── core-one/             # Main application
├── libs/                     # Shared libraries (components, utilities, etc.)
│   ├── ui/                   # UI component libraries
│   ├── shared/               # Shared utilities and services
│   └── feature-modules/      # Feature-specific libraries
├── nx.json                   # Nx configuration
└── package.json              # Project dependencies
```

## Development

### Running Applications

To start the development server for a specific application:

```bash
nx serve core-one
```

The application will be available at `http://localhost:4200/`.

### Building Applications

To build an application:

```bash
nx build core-one
```

Built artifacts will be stored in the `dist/` directory.

### Creating Libraries

To generate a new library:

```bash
nx g @nx/angular:library my-lib --directory=libs/ui
```

### Building Libraries

To build a specific library:

```bash
nx build my-lib
```

## Component Development with Storybook

### Running Storybook

To start Storybook for a specific library:

```bash
nx run ui-components:storybook
```

Storybook will be available at `http://localhost:4400/`.

### Building Storybook

To build a static Storybook site:

```bash
nx run ui-components:build-storybook
```

## Testing

### Running Unit Tests

To execute unit tests for a specific project:

```bash
nx test core-one
```

or

```bash
nx test ui-components
```

### Running E2E Tests

To run end-to-end tests:

```bash
nx e2e core-one-e2e
```

## Code Generation

Nx provides powerful code generation capabilities:

```bash
nx g @nx/angular:component my-component --project=ui-components
```

## Dependency Graph

To visualize project dependencies:

```bash
nx graph
```

## Guidelines

- **Libraries**: Create focused, single-responsibility libraries
- **Components**: Follow the Atomic Design methodology
- **Testing**: Maintain high test coverage for all components
- **Documentation**: Document components with Storybook stories
- **Versioning**: Follow semantic versioning for libraries

## Additional Resources

- [Nx Documentation](https://nx.dev)
- [Angular Documentation](https://angular.dev)
- [Storybook Documentation](https://storybook.js.org)
- [PrimeNG Documentation](https://primeng.org)
