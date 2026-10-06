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
Enlace del repositorio: https://github.com/santanaalejandro671-cloud/Consumiendo-una-API-con-fetch
```

### 1. Crear el repositorio

1. Entra a GitHub.
2. Crea un repositorio publico.
3. Puedes llamarlo, por ejemplo:

```text
asignacion-fetch-users
```

4. No agregues README, `.gitignore` ni licencia desde GitHub si ya usaras los archivos de este proyecto.

### 2. Inicializar Git

Desde la carpeta del proyecto, ejecuta:

```bash
git init
```

### 3. Realizar el commit

```bash
git add .
git commit -m "Crear asignacion de fetch con TypeScript"
```

### 4. Conectar el repositorio remoto

Reemplaza `TU_USUARIO` y `TU_REPOSITORIO` con tus datos reales:

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```

### 5. Hacer push

```bash
git branch -M main
git push -u origin main
```

### 6. Obtener el enlace publico

Cuando el `push` termine, abre tu repositorio en GitHub y copia el enlace publico. Deberia tener una forma similar a:

```text
https://github.com/TU_USUARIO/TU_REPOSITORIO
```
