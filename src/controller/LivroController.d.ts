import type { Request, Response } from "express";
import Livro from "../model/Livro.js";
declare class LivroController extends Livro {
    static todos(req: Request, res: Response): Promise<Response>;
    static novo(req: Request, res: Response): Promise<Response>;
}
export default LivroController;
//# sourceMappingURL=LivroController.d.ts.map