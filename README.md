# GimnasioAdmin

## Practica 21

### ¿Qué pieza de React Router corresponde a router-outlet, a routerLink y a routerLinkActive?

`router-outlet` corresponde a `<Outlet />`, `routerLink` a `<Link>` y `routerLinkActive` a `<NavLink>`.

### ¿Por qué la ruta comodín (**) va al final y la ruta vacía necesita pathMatch: 'full'?

Porque Angular usa la primera ruta que coincide, en el orden en que las escribí. `**` coincide con cualquier URL, entonces si va antes tapa a las demás. La ruta vacía necesita `pathMatch: 'full'` porque por defecto compara solo el principio de la URL, y una ruta vacía es el principio de todas, entonces redirigiría todas las páginas a `/clases`.

### ¿Dónde vive el valor de un campo en un formulario reactivo y en qué se diferencia del useState de React?

Vive en el `FormControl` de cada campo, por ejemplo `f.nombre.value`. A diferencia de `useState`, no tengo que crear la variable ni actualizarla con un `onChange`, porque Angular la actualiza solo cuando se escribe en el campo.

### ¿Qué regresa un validador propio cuando el valor es válido y cuando no, y cómo se relaciona con hasError?

Regresa `null` si el valor es válido y un objeto con el nombre del error si no lo es, en mi caso `{ multiploDe: { n, valor } }`. `hasError('multiploDe')` busca ese nombre en los errores del control, por eso tiene que ser el mismo que puse en el validador.

### ¿Qué cambió en el servicio del catálogo y por qué ningún componente se enteró?

Las clases dejaron de ser un `signal` con los datos del archivo local y ahora salen de un `httpResource` que pide `GET /clases`. Ningún componente se enteró porque el servicio sigue dando `visibles`, `minutosTotales`, `clasesLargas`, `filtrar` y `seleccionar` igual que antes.

### ¿Por qué no hizo falta iniciar sesión para leer el catálogo?

Porque `GET /clases` tiene el decorador `@Publico()` en el backend, entonces cualquiera puede ver el catálogo sin cuenta.

## Practica 20

### ¿Qué diferencia hay entre un signal y un computed, y cuál se parece a useState y cuál a useMemo?

Un `signal` guarda un valor que se puede cambiar con `set()` o `update()`, como `categoria` y `seleccionada` en mi servicio. Un `computed` se calcula a partir de otros signals y no se puede modificar a mano, solo se vuelve a calcular cuando cambia alguno de los que usa. `signal` equivale a `useState` y `computed` a `useMemo`, solo que en Angular no se escribe el arreglo de dependencias porque las detecta solo.

### ¿Qué pasa si el filtro hace new Catalogo() en lugar de inject(Catalogo)?

Se crea una copia nueva del servicio solo para el filtro. Los botones cambian la categoría de esa copia, pero el tablero sigue leyendo el `Catalogo` que le da Angular con `inject()`, entonces la lista no se filtra. Con `inject(Catalogo)` los dos componentes usan la misma instancia, por eso comparten el estado.

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
