declare class Emprestimo {
    private id_emprestimo;
    private id_aluno;
    private id_livro;
    private data_emprestimo;
    private data_devolucao;
    private status_emprestimo;
    constructor(_id_emprestimo: number, _id_aluno: number, _id_livro: number, _data_emprestimo: number, _data_devolucao: number, _status_emprestimo: number);
    getId_emprestimo(): number;
    getId_aluno(): number;
    getId_livro(): number;
    getData_emprestimo(): number;
    getData_devolucao(): number;
    getStatus_emprestimo(): number;
    setId_emprestimo(_id_emprestimo: number): void;
    setId_aluno(_id_aluno: number): void;
    setId_livro(_id_livro: number): void;
    setData_emprestimo(_data_emprestimo: number): void;
    setData_devolucao(_data_devolucao: number): void;
    setStatus_emprestimo(_status_emprestimo: number): void;
}
export default Emprestimo;
//# sourceMappingURL=Emprestimo.d.ts.map