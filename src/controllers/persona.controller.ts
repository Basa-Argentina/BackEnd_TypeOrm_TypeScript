import { Request, Response } from "express";
import { getRepository } from "typeorm";
import {getManager} from "typeorm";
import {getConnection} from "typeorm";
import { Persona } from "../entity/Persona";

// export const getPersonas = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const personas = 
//    await getRepository(persona).find();
//   return res.json(Personas);
// };

export const getPersonas = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const personas = 
    // await getRepository(Persona).find();
    await getConnection()
    .createQueryBuilder()
    .select("persona")
    .from(Persona, "persona")
    .where("persona.id = :id", { id: 1 })
    .getOne();
  
  return res.json(personas);
};


  // const user = await getConnection()
  //     .createQueryBuilder()
  //     .select("user")
  //     .from(User, "user")
  //     .where("user.id = :id", { id: 1 })
  //     .getOne();
