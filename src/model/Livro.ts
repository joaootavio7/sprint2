

import type { LivroDTO } from "../interface/LivroDTO.js";
import { DatabaseModel } from "./DatabaseModel.js";

const database = new DatabaseModel().pool;

class Livro {

    private id_livro: number = 0;
    private titulo: string;
    private autor: string;
    private editora: string;
    private ano_publicacao: number;
    private isbn: number;
    private quant_total: number;
    private quant_disponivel: number;
    private valor_aquisicao: number;
    private status_livro_emprestado: string;

    constructor(
        _titulo: string,
        _autor: string,
        _editora: string,
        _ano_publicacao: number,
        _isbn: number,
        _quant_total: number,
        _quant_disponivel: number,
        _valor_aquisicao: number,
        _status_livro_emprestado: string,
    ) {
        this.titulo = _titulo;
        this.autor = _autor;
        this.editora = _editora;
        this.ano_publicacao = _ano_publicacao;
        this.isbn = _isbn;
        this.quant_total = _quant_total;
        this.quant_disponivel = _quant_disponivel;
        this.valor_aquisicao = _valor_aquisicao;
        this.status_livro_emprestado = _status_livro_emprestado;
    }


    public getIdlivro(): number {
        return this.id_livro;
    }


    public setIdlivro(id_livro: number): void {
        this.id_livro = id_livro;
    }


    public getTitulo(): string {
        return this.titulo;
    }


    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }


    public getAutor(): string {
        return this.autor;
    }


    public setAutor(autor: string): void {
        this.autor = autor;
    }


    public getEditora(): string {
        return this.editora;
    }


    public setEditora(editora: string): void {
        this.editora = editora;
    }

    public getAno_publicacao(): number {
        return this.ano_publicacao;
    }


    public setAno_publicacao(ano_publicacao: number): void {
        this.ano_publicacao = ano_publicacao;
    }

    public getIsbn(): number {
        return this.isbn;
    }


    public setIsbn(isbn: number): void {
        this.isbn = isbn;
    }

    public getQuant_total(): number {
        return this.quant_total;
    }


    public setQuant_total(isbn: number): void {
        this.quant_total = this.quant_total;
    }

    public getQuant_disponivel(): number {
        return this.quant_disponivel;
    }


    public setQuant_disponivel(quant_disponivel: number): void {
        this.isbn = quant_disponivel;
    }

    public getValor_aquisicao(): number {
        return this.valor_aquisicao;
    }


    public setValor_aquisicao(valor_aquisicao: number): void {
        this.valor_aquisicao = valor_aquisicao;
    }

    public getStatus_livro_emprestado(): string {
        return this.status_livro_emprestado;
    }


    public setStatus_livro_emprestado(status_livro_emprestado: string): void {
        this.status_livro_emprestado = status_livro_emprestado;
    }

    static async listaLivro(): Promise<Array<Livro> | null> {
        try {

            let listaDeLivro: Array<Livro> = [];


            const querySelectAlunos = `SELECT * FROM Livro;`;


            const respostaBD = await database.query(querySelectAlunos);


            respostaBD.rows.forEach((livroBD: any) => {

                const novoLivro: Livro = new Livro(
                    livroBD.titulo,
                    livroBD.autor,
                    livroBD.editora,
                    livroBD.ano_publicacao,
                    livroBD.isbn,
                    livroBD.quant_total,
                    livroBD.quant_disponivel,
                    livroBD.valor_aquisicao,
                    livroBD.status_livro_emprestado,
                );


                novoLivro.setIdlivro(livroBD.id_Livro);


                listaDeLivro.push(novoLivro);
            });


            return listaDeLivro;

        } catch (error) {
            console.error(`Erro ao acessar o banco de dados. ${error}`);
            return null;
        }
    }

    static async cadastroLivro(Livro: LivroDTO): Promise<boolean> {
        try {

            const queryInsertLivro = `INSERT INTO Livro (titulo, autor, editora, data_validade, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado)
                                    VALUES
                                    ($1, $2, $3, $4, $5, $6, $7 , $8, $9 );`;


            const respostaBD = await database.query(queryInsertLivro, [
                Livro.titulo.toUpperCase(),
                Livro.autor.toUpperCase(),
                Livro.editora.toUpperCase(),
                Livro.ano_publicacao,
                Livro.isbn,
                Livro.quant_total,
                Livro.quant_disponivel,
                Livro.valor_aquisicao,
                Livro.status_livro_emprestado,

                
            ]);

            if (respostaBD.rowCount != 0) {

                console.info(`Livro cadastrado com sucesso.`);

                return true;
            }


            return false;
        } catch (error) {

            console.error(`Erro na consulta ao banco de dados. ${error}`);

            return false;
        }
    }
}

export default Livro;