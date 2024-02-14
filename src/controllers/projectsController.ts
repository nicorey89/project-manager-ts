import { Request, Response } from "express";
import createError from "http-errors";
import Project from "../models/Project";
import { errorResponse } from "../helpers";
import { Types } from "mongoose";

export const projectsList = async (req: Request, res: Response) => {
    try {


        console.log(req.user)
        const projects = await Project.find().where("createdBy").equals(req.user);

        return res.status(200).json({
            ok: true,
            msg: 'Lista de Proyectos',
            data: projects
        })
    } catch (error) {
        errorResponse(res, error, "PROJECT-LIST")
    }

}

export const projectStore = async (req: Request, res: Response) => {
    try {

        const { name, description, client } = req.body;
        if (
            [name, description, client].includes("") ||
            !name ||
            !description ||
            !client
        ) throw createError(400, "El nombre, la descripción y el cliente son datos obligatorios");

        if (!req.user) throw createError(401, "Error de autenticación!!");

        const project = new Project(req.body);

        project.createdBy = req.user._id;

        const projectStore = await project.save();

        return res.status(201).json({
            ok: true,
            msg: 'Proyecto guardado',
            data: projectStore
        })

    } catch (error) {
        errorResponse(res, error, "PROJECT-CREATE")

    }

}

export const proejectDetail = async (req: Request, res: Response) => {
    try {

        const { id } = req.params;

        if (!Types.ObjectId.isValid(id)) throw createError(400, "No es un ID válido");

        const project = await Project.findById(id);

        if (!project) {
            throw createError(404, "Proyecto no encontrado");
        };

        if (req?.user?._id && req?.user?._id.toString() !== project?.createdBy?.toString()) throw createError(401, 'No tenés la autorización para ver este proyecto')


        return res.status(200).json({
            ok: true,
            msg: 'Detalle del Proyecto',
            data: project
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-DETAIL'
        })
    }

}

export const projectUpdate = async (req: Request, res: Response) => {
    try {

        const { id } = req.params;
        if (!Types.ObjectId.isValid(id)) throw createError(400, "No es un ID válido");

        const project = await Project.findById(id);

        if (!project) throw createError(404, "Proyecto no encontrado");

        if (req?.user?._id && req?.user?._id.toString() !== project?.createdBy?.toString()) throw createError(401, 'No tenés la autorización para ver este proyecto')

        const { name, description, client, dateExpire } = req.body;

        project.name = name || project.name;
        project.description = description || project.description;
        project.dateExpire = dateExpire || project.dateExpire;
        project.client = client || project.client;

        const projectUpdate = await project.save();


        return res.status(201).json({
            ok: true,
            msg: 'Proyecto actualizado',
            data : projectUpdate
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-UPDATE'
        })
    }
}

export const projectRemove = async (req: Request, res: Response) => {
    try {

        const { id } = req.params;
        if (!Types.ObjectId.isValid(id)) throw createError(400, "No es un ID válido");

        const project = await Project.findById(id);
        
        if (!project) throw createError(404, "Proyecto no encontrado");

        if (req?.user?._id && req?.user?._id.toString() !== project?.createdBy?.toString()) throw createError(401, 'No tenés la autorización para ver este proyecto')

        await project.deleteOne();

        return res.status(200).json({
            ok: true,
            msg: 'Proyecto eliminado con éxito'
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-REMOVE'
        })
    }
}

export const collaboratorAdd = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Colaborador agregado'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en ADD-COLLABORATOR'
        })
    }
}

export const collaboratorRemove = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Colaborador eliminado'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en REMOVE-COLLABORATOR'
        })
    }
}

