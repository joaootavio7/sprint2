import type { LivroDTO } from "../interface/LivroDTO.js";
declare class Livro {
    private id_livro;
    private titulo;
    private autor;
    private editora;
    private ano_publicacao;
    private isbn;
    private quant_total;
    private quant_disponivel;
    private valor_aquisicao;
    private status_livro_emprestado;
    constructor(_titulo: string, _autor: string, _editora: string, _ano_publicacao: number, _isbn: number, _quant_total: number, _quant_disponivel: number, _valor_aquisicao: number, _status_livro_emprestado: string);
    getIdlivro(): number;
    setIdlivro(id_livro: number): void;
    getTitulo(): string;
    setTitulo(titulo: string): void;
    getAutor(): string;
    setAutor(autor: string): void;
    getEditora(): string;
    setEditora(editora: string): void;
    getAno_publicacao(): number;
    setAno_publicacao(ano_publicacao: number): void;
    getIsbn(): number;
    setIsbn(isbn: number): void;
    getQuant_total(): number;
    setQuant_total(isbn: number): void;
    getQuant_disponivel(): number;
    setQuant_disponivel(quant_disponivel: number): void;
    getValor_aquisicao(): number;
    setValor_aquisicao(valor_aquisicao: number): void;
    getStatus_livro_emprestado(): string;
    setStatus_livro_emprestado(status_livro_emprestado: string): void;
    static listaLivro(): Promise<Array<Livro> | null>;
    static cadastroLivro(Livro: LivroDTO): Promise<boolean>;
}
export default Livro;
//# sourceMappingURL=Livro.d.ts.map