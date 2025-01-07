import database from "../database/todo.database.json" assert { type: "json" };

export const TaskList = () => {
  return database;
};

export const createTask = async (newTask) => {
  const maxId = Math.max(...database.map((task) => task.id), 0);
  const taskWithId = { ...newTask, id: maxId + 1 };
  database.push(taskWithId);
  return taskWithId;
};

export const updateTaskById = async (id, updatedData) => {
  const taskIndex = database.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) return null;

  database[taskIndex] = { ...database[taskIndex], ...updatedData };
  return database[taskIndex];
};

export const deleteTaskById = async (id) => {
  const taskIndex = database.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) return null;

  const deletedTask = database[taskIndex];
  database.splice(taskIndex, 1);
  return deletedTask;
};
