# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- Login
- Fetch users and product

## Stack Used

`JavaScript`
`Typescript`
`Yarn`
`React hook form`
`React Query`
`Zod`
`Context API`
`TailwindCSS`
`axios`

## Development Setup

1. Clone the repository.

```bash
git clone https://github.com/Duruwilly/crm-dashboard-assessment
```

```bash
# 2. Install the dependencies using
yarn install.
```

```bash
# 3. Start the development server with
yarn dev.
```

4. Access the application at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
yarn build
```

## Query Language

`REST API`

## Folder Structure (src) Library

The important folders are located in the `app` directory. These include:

- `assets`: Contains static files like images, fonts, and stylesheets.
- `components`: Reusable UI components.
- `config`: Configuration files or settings.
- `models`: api response data.
- `lib`: External libraries, constants variables, custom hooks for shared logic, axios interceptor, utility functions or helper classes.
- `routes`: Higher-level layout components for page structures.
- `store`: state management related files.
- `types`- Global types or typescript types.

### Decisions

This assessment doesn't really require the need for a global state managememt and as such, the requirement for Context Api wasn't used. However, a boilerplate for it was written but it is not used in anywhere.