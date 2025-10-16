class Livro{

private titulo: string;
private autor: string;
private editora: string;
private ano_publicacao: number;
private isbn: number;
private quant_total: number;
private quant_disponivel: number;
private valor_aquisicao: number;
private status_livro_emprestado: number;

    constructor(
        _titulo: number,
        _autor: number,
        _editora: string,
        _ano_publicacao: string,
        _isbn: number,
        _quant_total: string,
        _quant_disponivel: string,
        _valor_aquisicao: number,
        _status_livro_emprestado: number;
    ){
        this.titulo = _titulo;
        this.autor = _autor;
        this.editora = _editora;
        this.ano_publicacao = _ano_publicacao;
        this.isbn = _isbn;
        this.quant_total = _quant_total;
        this.quant_disponivel = _quant_disponivel;
        this.valor_aquisicao = _valor_aquisicao;
        this.status_livro_emprestado: _status_livro_emprestado
    }

     public getTitulo(): string {
        return this.titulo;
    }

     public getAutor(): string {
        return this.autor;
    }

     public getEditora(): string {
        return this.editora;
    }

     public getAno_publicacao(): number {
        return this.ano_publicacao;
    }

     public getIsbn(): number {
        return this.isbn;
    }

      public getQuant_total(): number {
        return this.quant_total;
    }

      public getQuant_disponivel(): number {
        return this.quant_disponivel;
    }

      public getValor_aquisicao(): number {
        return this.valor_aquisicao;
    }

      public setStatus_livro_emprestado(): number {
         this.status_livro_emprestado= _id_aluno;
    }

      public setRa(_ra: number): void {
         this.ra = _ra;
    }

      public setNome(_nome: string): void {
         this.nome = _nome;
    }

      public setSobrenome(_sobrenome: string): void {
         this.sobrenome = _sobrenome;
    }

      public setData_nascimento(_data_nascimento: number): void {
         this.data_nascimento = _data_nascimento;
    }

       public setEndereco(_endereco: string): void {
         this.endereco = _endereco;
    }

       public setEmail(_email: string): void {
         this.email = _email;
    }

       public setCelular(_celular: number): void {
         this.celular = _celular;
    }
}

export default Livro;