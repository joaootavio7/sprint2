export interface EmprestimoDTO {
     id_emprestimo? : number,
     id_aluno: number,
     id_livro: number,
     data_emprestimo: number,
     data_devolucao: number,
     status_emprestimo: number,
    situacao?: boolean
}
