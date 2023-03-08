import { Request, Response } from "express"

import { Pet } from "../models/Pet";
import { createObjectmenu } from "../helpers/createObjectmenu"

export const search = (req: Request, res: Response) => {
    let query: string = req.query.p as string;
    let list = Pet.getFromName(query);
    res.render("pages/home", {
        menu: createObjectmenu(""),
        list
    })
};