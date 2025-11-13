import type { Request, Response } from "express";
import Emprestimo from "../model/Emprestimo.js";
import type { EmprestimoDTO } from "../interface/EmprestimoDTO.js";


interface EmprestimoDTO {
    idAluno: number;
    idLivro: number;
    dataEmprestimo: string;
    dataDevolucao: string;
    statusEmprestimo: string;
}

class EmprestimoController extends Emprestimo{

    static async todos(req: Request, res: Response): Promise<Response> {
        try {
  
            const listaDeEmprestimos = await Emprestimo.listarEmprestimos();
            
        
            if (!listaDeEmprestimos || listaDeEmprestimos.length === 0) {
                return res.status(404).json({ message: 'Nenhum empréstimo encontrado.' });
            }

       
            return res.status(200).json(listaDeEmprestimos);
        } catch (error) {
     
            console.error('Erro ao listar empréstimos:', error);
            return res.status(500).json({ message: 'Erro ao listar os empréstimos.' });
        }
    }

    // criar método para listar empréstimo por ID
    
}

export default EmprestimoController;