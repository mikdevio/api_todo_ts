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
| `GET` | `/api/tasks` | Obtener todas las tareas. |
| `POST` | `/api/tasks` | Crear una nueva tarea. |
| `PUT` | `/api/tasks/:id` | Actualizar una tarea. |
| `DELETE` | `/api/tasks/:id` | Eliminar una tarea. |

## 🧪 Ejemplo de Payload (POST /api/tasks)

```json
{
  "title": "Aprender TypeScript en profundidad",
  "description": "Completar el proyecto del portfolio"
}