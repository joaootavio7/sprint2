import { Router  } from "express";
import type { Request, Response} from "express";
import AlunoController from "./controller/AlunoController.js";
import Livro from "./model/Livro.js";
import LivroController from "./controller/LivroController.js";

const router = Router(); 

router.get("/api", (req: Request, res: Response) => {
    res.status(200).json({ mensagem: "Olá, seja bem-vindo!" });
});


router.get("/api/aluno", AlunoController.todos);
router.post("/api/aluno", AlunoController.novo);


router.get("/api/livro", LivroController.todos);
router.post("/api/livro", LivroController.novo);

router.get("/api/aluno/:ra", AlunoController.aluno);
export { router }; 