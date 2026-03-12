# 📋 API REST de Gestión de Tareas (TypeScript + Prisma)

Backend desarrollado con TypeScript, Express y Prisma para gestionar tareas (CRUD). Este proyecto demuestra habilidades en el diseño de APIs seguras, tipado estricto y persistencia de datos.

## 🚀 Características
* **TypeScript Estricto:** Tipado completo de modelos de datos, peticiones y respuestas.
* **Validación de Datos:** Uso de `Zod` para validar el cuerpo de las peticiones (`POST`/`PUT`).
* **Base de Datos Relacional:** `PostgreSQL` gestionado con `Prisma ORM`.
* **Arquitectura Limpia:** Separación clara entre rutas, controladores, esquemas y tipos.
* **Manejo de Errores:** Middleware centralizado para respuestas JSON estructuradas.

## 🛠️ Tecnologías Utilizadas
- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **PostgreSQL**
- **Zod** (Validación)
- **UUID** (Generación de IDs)

## 📋 Requisitos Previos
* Node.js instalado
* Base de datos PostgreSQL configurada

## ⚙️ Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-de-tu-repo>
    cd <nombre-carpeta>
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz y añade la URL de tu base de datos:
    ```env
    DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_db"
    PORT=3000
    ```

4.  **Ejecutar migraciones de Prisma:**
    ```bash
    npx prisma migrate dev
    ```

5.  **Iniciar el proyecto:**
    ```bash
    npm run dev
    ```

## 📡 Endpoints de la API

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/task` | Obtener todas las tareas. |
| `POST` | `/api/task` | Crear una nueva tarea. |
| `PUT` | `/api/task/:id` | Actualizar una tarea. |
| `DELETE` | `/api/task/:id` | Eliminar una tarea. |
| `GET` | `/api/user` | Obtener todos los usuarios. |
| `POST` | `/api/user` | Crear una nueva usuario. |
| `PUT` | `/api/user/:id` | Actualizar una usuario. |
| `DELETE` | `/api/user/:id` | Eliminar una usuario. |

## 🧪 Ejemplos:


### (GET /api/task) Todas las tareas

```bash
curl -X GET http://localhost:3500/task/
```

### (GET /api/task/:id) Tarea especifica con id=1

```bash
curl -X GET http://localhost:3500/task/1
```

### (PUT /api/task)/:id

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"title": "Task 1", "description": "Complete task 0", "user": 1}' http://localhost:3500/task/1
```

### (GET /api/task) Eliminar tarea con id=1

```bash
curl -X DELETE http://localhost:3500/task/1
```


### (GET /api/task) Todos los usuarios

```bash
curl -X GET http://localhost:3500/user/
```

### (GET /api/task/:id) Usuario especifico con id=1

```bash
curl -X GET http://localhost:3500/user/1
```

### (PUT /api/task/:id)

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"firstName": "User", "lastName": "Admin", "address": "One Street", "email": "one@email.com", "isActive": true}' http://localhost:3500/user/1
```

### (GET /api/task) Eliminar usuario con id=1

```bash
curl -X DELETE http://localhost:3500/user/1
```