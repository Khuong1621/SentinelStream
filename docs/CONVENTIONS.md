# Project Conventions

This document outlines the coding and commit conventions for the project.

---

## 💬 Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification with a specific format for JIRA integration.

### Format
```
<type>[optional scope]: [<jira-task-id>] <description>

[optional body]

[optional footer]
```

### Components
- **type**: Required keyword to categorize the commit (e.g., `feat`, `fix`, `refactor`, `docs`, `style`, `test`).
- **scope**: Optional, used to specify the area of influence (e.g., `feat(auth):`).
- **jira-task-id**: The ID of the task being worked on (e.g., `[TSW-223]`).
- **description**: A short summary of the changes.
- **body**: Optional, detailed description of the changes.
- **footer**: Optional, extra information like PR numbers or breaking changes.

### Examples
```
feat: [TSW-223] add validate of A feature

fix: [TSW-223] fix die dashboard page

feat(feature_a): [TSW-223] add validate of A1 feature
```

---

## 💻 Coding Convention (C#)

### Naming
- **UpperCamelCase**:
  - File names.
  - Public methods and properties.
  - Classes, records, and structs.
  - Interface names (with `I` prefix, e.g., `IWorkerQueue`).
  - Public types, fields, events, and local functions.
- **lowerCamelCase**:
  - Scope variables within methods.
  - Method arguments.
- **_lowerCamelCase**:
  - Private or internal fields (e.g., `private IWorkerQueue _workerQueue;`).
- **s_lowerCamelCase / t_lowerCamelCase**:
  - Private/internal static fields (`s_`) or thread-static fields (`t_`).

### Named Arguments
When calling methods, use named arguments for clarity.
```csharp
// Correct
DoSomething(foo: "someString", bar: 1);
```

### Comments
- Use `///` (XML comments) for describing fields and methods.
- Describe return values and complex logic.

### Entity Framework (EF) & Database
- Use `async` `Task` whenever possible.
- Database logic must be in the **Repository Layer**.
- Column constraints:
  - `[MaxLength(128)]` for ID columns.
  - `[MaxLength(200)]` for Name columns.
  - `[MaxLength(500)]` for Note columns.
- Use `nullable` for all columns except Primary Keys.
- Explicitly declare field types for new DB schemas.

### Unit Testing
- Every Controller Action must have at least one unit test.
- Test only the specific action (avoid decoupling actions within a single test).

### Project Structure (.Net + Angular)
- **Repository**: Basic CRUD, no business logic.
- **Service**: Business logic, communicates with Repository.
- **Controller**: Uses Services, no direct Repository access, no business logic.

---

## 💻 Coding Convention (TypeScript)

| Style          | Category                                                           |
| :------------- | :----------------------------------------------------------------- |
| UpperCamelCase | class / interface / type / enum / decorator / type parameters      |
| lowerCamelCase | variable / parameter / function / method / property / module alias |
| CONSTANT_CASE  | global constant values, including enum values                      |

### Rules
- Use `===` for equality comparisons.
- Use ES6 arrow functions `() => {}`.
- Use single quotes `'bar'` for strings.
- Always use curly braces `{}` for blocks.
- Mandatory type declarations (avoid `any` unless necessary).
- Use **kebab-case** for file and folder names.
- Use **Tailwind CSS** for styling; avoid plain CSS.

### Project Structure
- Modules should have an `export.ts` to expose components.
- Use `index.service.ts` for all API calls within a module.

---

## 💻 Coding Convention (Dart - Flutter)

### Naming
- **UpperCamelCase**: Classes, enum types, typedefs, and type parameters.
- **lowercase_with_underscores**: Libraries, packages, directories, and source files.
- **lowerCamelCase**: Variables, parameters, functions, properties.

### Rules
- Use single quotes `'bar'`.
- Organize imports: `dart:`, then packages, then local files.
- Use `///` for documentation comments.

### Project Structure
- `lib/common`: Config, constants, models, utils, widgets.
- `lib/feature`: Organized by feature (bloc, repository, screen, widget).
