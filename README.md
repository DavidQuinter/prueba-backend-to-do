# API To-Do List

Una API REST simple para gestionar tareas pendientes (to-do list) desarrollada con Node.js.

## 🚀 Descripción

Esta API proporciona endpoints para crear, leer, actualizar y eliminar tareas (CRUD). Las tareas se almacenan en memoria utilizando un arreglo, lo que la hace perfecta para propósitos de desarrollo y pruebas.

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- Nodemon (para desarrollo)

## ⚙️ Instalación

1. Clona este repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

El servidor se iniciará en `http://localhost:[PUERTO]` utilizando nodemon para reinicio automático durante el desarrollo.

## 📡 Endpoints

### Obtener todas las tareas
- **GET** `/tasks`
- **Respuesta**: Array de tareas
```json
[
  {
    "id": 1,
    "titulo": "Completar proyecto",
    "completada": false
  }
]
```

### Crear nueva tarea
- **POST** `/tasks`
- **Body**:
```json
{
  "titulo": "Nueva tarea",
  "completada": false
}
```

### Actualizar tarea
- **PUT** `/tasks/:id`
- **Body**:
```json
{
  "titulo": "Tarea actualizada",
  "completada": true
}
```

### Eliminar tarea
- **DELETE** `/tasks/:id`
- **Respuesta**: 200 OK si se eliminó correctamente

## 🧑‍💻 Uso

Ejemplo de cómo crear una nueva tarea utilizando curl:

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Mi primera tarea", "completada": false}'
```

## ✍️ Autor

David Quintero

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE para detalles

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.
