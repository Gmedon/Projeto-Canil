import { Router } from "express"

import * as pagControllers from "../controllers/pagController"
import * as searchControllers from "../controllers/searchController"

const router = Router();

router.get("/", pagControllers.home)
router.get("/dogs", pagControllers.dogs)
router.get("/cats", pagControllers.cats)
router.get("/fishers", pagControllers.fishers)


router.get("/search", searchControllers.search)

router.get("*", pagControllers.pagNaoEncontrada)

export default router;