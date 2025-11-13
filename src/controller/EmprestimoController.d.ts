import type { Request, Response } from "express";
import Emprestimo from "../model/Emprestimo.js";
declare class EmprestimoController extends Emprestimo {
    static todos(req: Request, res: Response): Promise<Response>;
    static cadastrar(req: Request, res: Response): Promise<Response>;
    static atualizar(req: Request, res: Response): Promise<Response>;
}
export default EmprestimoController;
//# sourceMappingURL=EmprestimoController.d.ts.map