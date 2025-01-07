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

El servidor se iniciará en `http://localhost:3030` utilizando nodemon para reinicio automático durante el desarrollo.

## 📡 Endpoints

### Obtener todas las tareas
- **GET** `/tasks`
- **Respuesta**: Array de tareas
```json
[
  {
    "id": 1,
    "title": "Completar proyecto",
    "description":'...'
    "status": true
  }
]
```

### Crear nueva tarea
- **POST** `/tasks`
- **Body**:
```json
{
  "title": "Nueva tarea",
  "description":'...'
}
```

### Actualizar tarea
- **PUT** `/tasks/:id`
- **Body**:
```json
{
  "title": "Tarea actualizada",
  "description":'...'
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
  -d '{"title": "Mi primera tarea", "description":'...'}'
```

## ✍️ Autor

David Quintero

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE para detalles

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.
