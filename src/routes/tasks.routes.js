import {Router} from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {getTask, getTasks, deleteTask, updateTask, createTask } 
from "../controllers/tasks.controller.js"

//ESTAS SON LAS VALIDACIONES
import { createTaskSchema } from "../schemas/task.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";


const router = Router()

router.get("/tasks", authRequired, getTasks) //Para obtener todas las tareas

router.get("/tasks/:id", authRequired, getTask) // Para obtener una tarea especifica

router.post("/tasks", authRequired, validateSchema(createTaskSchema), createTask) // para crear una tarea

router.delete("/tasks/:id", authRequired, deleteTask) // Para borrar una especificamente

router.put("/tasks/:id", authRequired, updateTask) // Para actualizar

export default router;