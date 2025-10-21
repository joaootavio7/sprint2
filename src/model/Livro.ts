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
        _titulo: string,
        _autor: string,
        _editora: string,
        _ano_publicacao: number,
        _isbn: number,
        _quant_total: number,
        _quant_disponivel: number,
        _valor_aquisicao: number,
        _status_livro_emprestado: number,
    ){
        this.titulo = _titulo;
        this.autor = _autor;
        this.editora = _editora;
        this.ano_publicacao = _ano_publicacao;
        this.isbn = _isbn;
        this.quant_total = _quant_total;
        this.quant_disponivel = _quant_disponivel;
        this.valor_aquisicao = _valor_aquisicao;
        this.status_livro_emprestado= _status_livro_emprestado;
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

      public getStatus_livro_emprestado(): number {
        return this.status_livro_emprestado;
    }

      public setTitulo(_titulo: string): void {
         this.titulo = _titulo;
    }

      public setAutor(_autor: string): void {
         this.autor = _autor;
    }

      public setEditora(_editora: string): void {
         this.editora = _editora;
    }

      public setAno_publicacao(_ano_publicacao: number): void {
         this.ano_publicacao = _ano_publicacao;
    }

       public setIsbn(_isbn: number): void {
         this.isbn = _isbn;
    }

       public setQuant_total(_quant_total: number): void {
         this.quant_total = _quant_total;
    }

       public setQuant_disponovel(_quant_disponivel: number): void {
         this.quant_disponivel = _quant_disponivel;
    }

        public setValor_equisacao(_valor_aquisicao: number): void {
         this.valor_aquisicao = _valor_aquisicao;
    }

        public setStatus_livro_emprestado(_status_livro_emprestado: number): void {
         this.status_livro_emprestado = _status_livro_emprestado;
    }
}

export default Livro;