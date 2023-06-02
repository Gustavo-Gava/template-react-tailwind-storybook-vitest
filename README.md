# Template with Tailwind, Storybook and Jest

## 📋 Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Git Workflow](#git-workflow)
  - [Branches](#branches)
  - [Commits](#commits)
- [Useful extensions](#useful-extensions)
  - [Tailwind Intellisense](#tailwind-intellisense)
- [Folder Structure](#folder-structure)
- [License](#license)

## ℹ️ About {#about}

This is a template for creating React applications with Next.js, Tailwind CSS, Storybook, and Jest.

## 🧗 Getting Started {#getting-started}

### Prerequisites

- Node.js
- Yarn or npm

### Installation

```bash
  # Clone the repository
  $ git clone url

  # Enter the project directory
  $ cd project-name

  # Install dependencies
  $ yarn install

  # Start the development server
  $ yarn dev

  # Run storybook (optional)
  $ yarn storybook
```

## 🛤️ Git Workflow {#git-workflow}

### Branches

When creating a new feature or fix, you should create a new branch from the `main` branch. The branch name should be `[feat/fix]/<feature-name>`.

```bash
  # Create a new branch
  $ git checkout -b [feat/fix]/<feature-name>

  # Push the branch to the remote repository
  $ git push -u origin [feat/fix]/<feature-name>
```

When you are done with the action, you should create a pull request to merge the feature branch into the `main` branch. After the pull request is approved, you should delete the feature branch.

```bash
  # Switch to the main branch
  $ git checkout main

  # Pull the latest changes from the remote repository
  $ git pull
```

### Commits

When committing changes, you should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

```bash
  # Commit changes
  $ git commit -m "feat: add new feature"
```

## 🛠️ Useful extensions {#useful-extensions}

### Tailwind Intellisense

Tailwind CSS IntelliSense enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.

Extension link: <https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss>
Extension ID: bradlc.vscode-tailwindcss

To make it work with cva, you need to add the following to your settings.json:

```json
  ...
  "tailwindCSS.experimental.classRegex": [["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]]
  ...
```

## 📂 Folder Structure {#folder-structure}

Explanation of each folder and its purpose:

- components: contains two subdirectories
  - ui: contains shared UI components such as buttons, modals, containers, etc.
  - [form]: contains components specific to a particular context, such as forms, which will be used throughout the application.
- context: contains application contexts
- features: features are a combination of components, hooks, and contexts that are used to implement a specific functionality in the application. Each feature should be self-contained and should not depend on other features.
- hooks: contains custom hooks used in the application
- lib: contains integrations with third-party libraries
- pages: contains application pages and server-side functionality provided by Next.js
- styles: contains global styles for the application, including themes, resets, and global configurations
- utils: contains utility functions that can be used throughout the application without being tied to any specific context

## 🪪 License {#license}

Created by Gustavo Gava. This project is licensed under the MIT License.
