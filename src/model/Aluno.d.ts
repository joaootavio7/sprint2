import type { AlunoDTO } from "../interface/AlunoDTO.js";
declare class Aluno {
    private id_aluno;
    private ra;
    private nome;
    private sobrenome;
    private data_nascimento;
    private endereco;
    private email;
    private celular;
    constructor(_ra: string, _nome: string, _sobrenome: string, _data_nascimento: number, _endereco: string, _email: string, _celular: number);
    getIdAluno(): number;
    setIdAluno(id_aluno: number): void;
    getRa(): string;
    setRa(ra: string): void;
    getNome(): string;
    setNome(nome: string): void;
    getSobrenome(): string;
    setSobrenome(sobrenome: string): void;
    getData_nascimento(): number;
    setData_nascimento(data_nascimento: number): void;
    getEmail(): string;
    setEmail(email: string): void;
    getCelular(): number;
    setCelular(celular: number): void;
    static listarAlunos(): Promise<Array<Aluno> | null>;
    static cadastrarAluno(Aluno: AlunoDTO): Promise<boolean>;
    static listarAluno(id_aluno: number): Promise<Aluno | null>;
}
export default Aluno;
//# sourceMappingURL=Aluno.d.ts.map