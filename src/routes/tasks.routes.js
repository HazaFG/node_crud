import {Router} from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {getTask, getTasks, deleteTask, updateTask, createTask } from "../controllers/tasks.controller.js"

const router = Router()

router.get("/tasks", authRequired, getTasks) //Para obtener todas las tareas

router.get("/tasks/:id", authRequired, getTask) // Para obtener una tarea especifica

router.post("/tasks", authRequired, createTask) // para crear una tarea

router.delete("/tasks/:id", authRequired, deleteTask) // Para borrar una especificamente

router.put("/tasks/:id", authRequired, updateTask) // Para actualizar

export default router;