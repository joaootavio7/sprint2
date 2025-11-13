
import type { AlunoDTO } from "../interface/AlunoDTO.js";
import { DatabaseModel } from "./DatabaseModel.js";

const database = new DatabaseModel().pool;

class Aluno {

    private id_aluno: number = 0;
    private ra: string;
    private nome: string;
    private sobrenome: string;
    private data_nascimento: number;
    private endereco: string;
    private email: string;
    private celular: number;


    constructor(
        _ra: string,
        _nome: string,
        _sobrenome: string,
        _data_nascimento: number,
        _endereco: string,
        _email: string,
        _celular: number,
    ) {
        this.ra = _ra;
        this.nome = _nome;
        this.sobrenome = _sobrenome;
        this.data_nascimento = _data_nascimento;
        this.endereco = _endereco
        this.email = _email;
        this.celular = _celular;

    }


    public getIdAluno(): number {
        return this.id_aluno;
    }

    public setIdAluno(id_aluno: number): void {
        this.id_aluno = id_aluno;
    }


    public getRa(): string {
        return this.ra;
    }


    public setRa(ra: string): void {
        this.ra = ra;
    }


    public getNome(): string {
        return this.nome;
    }


    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getSobrenome(): string {
        return this.sobrenome;
    }


    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    public getData_nascimento(): number {
        return this.data_nascimento;
    }

    public setData_nascimento(data_nascimento: number): void {
        this.data_nascimento = data_nascimento;
    }

    public getEmail(): string {
        return this.email;
    }


    public setEmail(email: string): void {
        this.email = email;
    }

    public getCelular(): number {
        return this.celular;
    }


    public setCelular(celular: number): void {
        this.celular = celular;
    }

    static async listarAlunos(): Promise<Array<Aluno> | null> {
        try {

            let listaDeAlunos: Array<Aluno> = [];


            const querySelectAlunos = `SELECT * FROM Aluno;`;


            const respostaBD = await database.query(querySelectAlunos);


            respostaBD.rows.forEach((alunoBD) => {

                const novoAluno: Aluno = new Aluno(
                    alunoBD.ra,
                    alunoBD.nome,
                    alunoBD.sobrenome,
                    alunoBD.data_nascimento,
                    alunoBD.endereco,
                    alunoBD.email,
                    alunoBD.celular,
                );


                novoAluno.setIdAluno(alunoBD.id_aluno);

                listaDeAlunos.push(novoAluno);
            });

            return listaDeAlunos;
        } catch (error) {

            console.error(`Erro na consulta ao banco de dados. ${error}`);

            return null;
        }
    }

    static async cadastrarAluno(Aluno: AlunoDTO): Promise<boolean> {
        try {

            const queryInsertAluno = `INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular)
                                VALUES
                                ($1, $2, $3, $4, $5, $6)
                                RETURNING id_Aluno;`;


            const respostaBD = await database.query(queryInsertAluno, [
                Aluno.nome.toUpperCase(),
                Aluno.sobrenome.toUpperCase(),
                Aluno.data_nascimento,
                Aluno.endereco.toUpperCase(),
                Aluno.email.toUpperCase(),
                Aluno.celular
            ]);


            if (respostaBD.rowCount != 0) {

                console.info(`Aluno cadastrado com sucesso.`);


                return true;
            }


            return false;
        } catch (error) {

            console.error(`Erro na consulta ao banco de dados. ${error}`);


            return false;
        }
    }

    static async listarAluno(id_aluno: number): Promise<Aluno | null> {
        try {
            const querySelectAlunos = `SELECT * FROM Aluno WHERE id_aluno=$1;`;

            const respostaBD = await database.query(querySelectAlunos, [id_aluno]);

            if (respostaBD.rowCount != 0) {
                const aluno: Aluno = new Aluno(
                    respostaBD.rows[0].ra,
                    respostaBD.rows[0].nome,
                    respostaBD.rows[0].sobrenome,
                    respostaBD.rows[0].data_de_nascimento,
                    respostaBD.rows[0].endereco,
                    respostaBD.rows[0].email,
                    respostaBD.rows[0].celular,
                );
                aluno.setIdAluno(respostaBD.rows[0].id_Aluno);

                return aluno;
            }

            return null;
        } catch (error) {
            console.error(`Erro ao buscar Aluno no banco de dados. ${error}`);
            return null;
        }
    }

}

export default Aluno;