import { Request, Response } from "express"

import { Pet } from "../models/Pet"
import { createObjectmenu } from "../helpers/createObjectmenu"

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    res.render("pages/home", {
        menu: createObjectmenu("all"),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        list
    })
};

export const pagNaoEncontrada = (req: Request, res: Response) => {
    res.send("PAGINA NÂO ENCONTRADA")
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFronType("dog");
    res.render("pages/home", {
        menu: createObjectmenu("dog"),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        list
    })
};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFronType("cat");
    res.render("pages/home", {
        menu: createObjectmenu("cat"),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        list
    })
};

export const fishers = (req: Request, res: Response) => {
    let list = Pet.getFronType("fish");
    res.render("pages/home", {
        menu: createObjectmenu("fish"),
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        list
    })
};
