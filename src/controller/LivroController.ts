import type { Request, Response } from "express";
import Livro from "../model/Livro.js";
import type { LivroDTO } from "../interface/LivroDTO.js";

class LivroController extends Livro {


    static async todos(req: Request, res: Response): Promise<Response> {
        try {
        
            const listaLivro: Array<Livro> | null = await Livro.listaLivro();

            return res.status(200).json(listaLivro);
        } catch (error) {
           
            console.error(`Erro ao consultar livro. ${error}`);

            return res.status(500).json({ mensagem: "Não foi possivel acessar a lista de livro." });
        }
    }


    static async novo(req: Request, res: Response): Promise<Response> {
        try {
        
            const dadosRecebidosLivro: LivroDTO = req.body;

            const respostaLivro = await Livro.cadastroLivro(dadosRecebidosLivro);

            if (respostaLivro) {
               
                return res.status(201).json({ mensagem: "Livro cadastrado com sucesso." });
            } else {
               
                return res.status(400).json({ mensagem: "Erro ao cadastrar livro." });
            }
        } catch (error) {
           
            console.error(`Erro no livro. ${error}`);

            return res.status(500).json({ mensagem: "Não foi possível inserir o livro" });
        }
    }
}

export default LivroController;