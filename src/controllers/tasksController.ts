import { Request, Response } from "express";


export const tasksList = async (req : Request,res : Response) => { 
        try { 
            return res.status(200).json({ 
                ok : true, 
                msg :'Lista de Tareas' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en TASK-LIST' 
            }) 
        } 
    }
export const taskStore = async (req : Request,res : Response) => { 
        try { 
            return res.status(201).json({ 
                ok : true, 
                msg :'Tarea guardado' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en TASK-STORE' 
            }) 
        } 
        
    }
export const taskDetail = async (req : Request,res : Response) => { 
        try { 
            return res.status(200).json({ 
                ok : true, 
                msg :'Detalle de la Tarea' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en TASK-DETAIL' 
            }) 
        } 
        
    }
export const taskUpdate = async (req : Request,res : Response) => { 
        try { 
            return res.status(201).json({ 
                ok : true, 
                msg :'Tarea actualizada' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en TASK-UPDATE' 
            }) 
        } 
    }
export const taskRemove = async (req : Request,res : Response) => { 
        try { 
            return res.status(200).json({ 
                ok : true, 
                msg :'Tarea eliminado' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en TASK-REMOVE' 
            }) 
        } 
    }
export const taskChangeState = async (req : Request,res : Response) => { 
        try { 
            return res.status(200).json({ 
                ok : true, 
                msg :'Tarea completada' 
            }) 
        } catch (error) { 
            console.log(error); 
           return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en TASK-CHANGE-STATE' 
            }) 
        } 
    }
