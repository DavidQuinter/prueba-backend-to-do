import { TaskList, createTask, updateTaskById, deleteTaskById } from "../models/todo.model.js";

export const getTaskList = (req, res) => {
    try {
      const tasks = TaskList();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las tareas", error: error.message });
    }
  };
  
  export const addTask = async (req, res) => {
    try {
      const { title, description } = req.body;
      if (!title || !description) {
        return res.status(400).json({ message: "El título y la descripción son requeridos" });
      }
      
      const newTask = await createTask({
        title,
        description,
        status: true
      });
      
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: "Error al crear la tarea", error: error.message });
    }
  };
  
  export const updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      
      const updatedTask = await updateTaskById(parseInt(id), updateData);
      if (!updatedTask) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }
      
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar la tarea", error: error.message });
    }
  };
  
  export const deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      
      const deletedTask = await deleteTaskById(parseInt(id));
      if (!deletedTask) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }
      
      res.json({ message: "Tarea eliminada exitosamente", task: deletedTask });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar la tarea", error: error.message });
    }
  };