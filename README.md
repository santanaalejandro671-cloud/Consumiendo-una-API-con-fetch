# Asignacion TypeScript: Fetch de usuarios

Alexandro Josue Santana Rodriguez 24-SISN-2-057

Este proyecto realiza una peticion HTTP GET al endpoint publico:

```text
https://jsonplaceholder.typicode.com/users
```

La respuesta se convierte a JSON con `.json()` y se maneja como un arreglo de usuarios originales del endpoint (`ApiUser[]`). Luego se utiliza `map` para crear un nuevo arreglo tipado como `User[]`, conservando unicamente:

- `name`
- `email`
- `username`
- `city`

La propiedad `city` se obtiene desde `address.city`.

Tambien se incluye el bonus opcional: una segunda operacion con `filter` para obtener usuarios cuyo correo termina en `.biz` o `.org`, sin modificar el arreglo transformado original.

## Estructura del proyecto

```text
asignacion-fetch-users/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Requisitos

- Node.js 18 o superior, porque incluye `fetch` de forma nativa.
- npm.

## Instalacion

```bash
npm install
```

## Ejecutar en modo desarrollo

```bash
npm run dev
```

## Compilar TypeScript

```bash
npm run build
```

## Ejecutar el codigo compilado

```bash
npm start
```

## Que muestra en consola

Primero se muestra:

```typescript
console.log(response[0]);
```

Esto permite revisar la estructura del primer usuario recibido desde el endpoint.

Despues se muestra el arreglo transformado con estructura similar a:

```typescript
[
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    username: "Bret",
    city: "Gwenborough"
  }
]
```

Finalmente, se muestra el arreglo filtrado con los usuarios cuyo correo electronico termina en `.biz` o `.org`.

## Preparar y subir a GitHub

No se incluye un enlace inventado de GitHub. Despues de crear tu repositorio publico, puedes completar aqui tu enlace:

```text
