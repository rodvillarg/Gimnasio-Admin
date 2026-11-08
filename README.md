# GimnasioAdmin

## Practica 19

### ¿Qué archivo de Angular hace el papel de main.tsx, de App.tsx y de vite.config.ts?

`main.tsx` equivale a `src/main.ts`, porque ahí se inicia la aplicación con `bootstrapApplication(App, appConfig)`. `App.tsx` equivale a `src/app/app.ts`, que es el componente raíz y junto con `app.html` y `app.css` forma lo que se ve en pantalla. `vite.config.ts` equivale a `angular.json`, donde se configuran el build, los estilos globales y la carpeta `public`.

### ¿Por qué clase() lleva paréntesis y para qué sirve track?

`clase` se crea con `input.required<Clase>()`, y eso devuelve un signal, no la clase directamente, sin paréntesis estaría usando el signal y no la clase, entonces `nombre` no existiría.

`track` le dice a Angular cómo identificar cada elemento del `@for`, en mi caso con `track clase.id`. Así, cuando la lista cambia, reutiliza las tarjetas que ya existen en lugar de crearlas todas de nuevo. 

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
