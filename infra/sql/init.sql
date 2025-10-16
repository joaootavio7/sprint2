
CREATE SEQUENCE seq_ra START 1;

CREATE TABLE Aluno (
    id_aluno INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ra VARCHAR (7) UNIQUE NOT NULL,
    nome VARCHAR (80) NOT NULL,
    sobrenome VARCHAR (80) NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR (200),
    email VARCHAR (80),
    celular VARCHAR (20) NOT NULL
);

CREATE OR REPLACE FUNCTION gerar_ra() RETURNS TRIGGER AS $$
BEGIN
    NEW.ra := 'AAA' || TO_CHAR(nextval('seq_ra'), 'FM0000');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_gerar_ra
BEFORE INSERT ON Aluno
FOR EACH ROW EXECUTE FUNCTION gerar_ra();

CREATE TABLE Emprestimo (
    id_emprestimo INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    id_livro INT REFERENCES Livro(id_livro),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    status_emprestimo VARCHAR (20)
);


INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Conor', 'McGregor', '2005-01-15', 'Rua UFC, 123', 'mcgregor@ufc.com', '16998959876'),
('Amanda', 'Nunes', '2004-03-22', 'Rua UFC, 456', 'amanda.nunes@ufc.com', '16995992305'),
('Angelina', 'Jolie', '2003-07-10', 'Rua Hollywood, 789', 'jolie@cinema.com', '16991915502'),
('Natalie', 'Portman', '2002-11-05', 'Rua Hollywood, 101', 'natalie.portman@cinema.com', '16993930703'),
('Shaquille', 'ONeal', '2004-09-18', 'Rua NBA, 202', 'shaquille@gmail.com', '16993937030'),
('Harry', 'Kane', '2000-05-18', 'Rua Futebol, 2024', 'kane@futi.com', '16998951983'),
('Jaqueline', 'Carvalho', '2001-12-10', 'Rua Volei, 456', 'jack@volei.com', '16991993575'),
('Sheilla', 'Castro', '2003-04-25', 'Rua Volei, 2028', 'sheilla.castro@volei.com', '16981974547'),
('Gabriela', 'Guimarães', '2007-08-19', 'Rua Volei, 2028', 'gaby@volei.com', '16983932215'),
('Magic', 'Johnson', '2003-07-08', 'Rua NBA, 1999', 'magic@gmail.com', '16993932020');


INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Joel', 'Miller', '1981-09-26', 'Rua TLOU, 123', 'joelmiller@gmail.com', '1737684219'),
('Peter', 'Parker', '2001-08-10', 'Rua Queens, 20', 'homemaranha@gmail.com', '1125676125'),
('João', 'Otávio', '2009-03-06', 'Rua Senai, 15', 'jzinn@gmail.com', '1425703152'),
('Cristiano', 'Ronaldo', '1985-02-05', 'Rua Portugal, 7', 'cristianoronaldogoat@gmail.com', '1128900821'),
('Neymar', 'Junior', '1992-02-05', 'Rua Barcelona, 11', 'neymarjr@gmail.com', '1937779238'),
('Rogerio', 'Ceni', '1973-01-22', 'Rua SPFC, 01', 'mitoceni@gmail.com', '1627406200'),
('Ayrton', 'Senna', '1960-03-21', 'Rua FormulaOne, 12', 'ayrtonsenna@gmail.com', '1139193584'),
('Felipe', 'Massa', '1981-04-25', 'Rua FormulaOne, 19', 'felipemassa@gmail.com', '1137077919'),
('Michael', 'Schumacher', '1969-01-03', 'Rua FormulaOne, 01', 'michaelschumacher@gmail.com', '1227447777'),
('Nathan', 'Drake', '1975-07-08', 'Rua Uncharted, 123', 'nathandrake@gmail.com', '1925290629');


INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', '1954', '978-0007525546', 10, 10, 150.00, 'Disponível'),
('1984', 'George Orwell', 'Companhia das Letras', '1949', '978-8535906770', 8, 8, 90.00, 'Disponível'),
('Dom Quixote', 'Miguel de Cervantes', 'Penguin Classics', '1605', '978-0142437230', 6, 6, 120.00, 'Disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Agir', '1943', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Penguin', '1945', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'HarperCollins', '1937', '978-0007458424', 9, 9, 140.00, 'Disponível'),
('O Conde de Monte Cristo', 'Alexandre Dumas', 'Penguin Classics', '1844', '978-0140449266', 5, 5, 110.00, 'Disponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin Classics', '1813', '978-0141439518', 7, 7, 90.00, 'Disponível'),
('Moby Dick', 'Herman Melville', 'Penguin Classics', '1851', '978-0142437247', 4, 4, 100.00, 'Disponível'),
('Guerra e Paz', 'Liev Tolstói', 'Companhia das Letras', '1869', '978-8535922343', 3, 3, 130.00, 'Disponível');

INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('Harry Poter', 'J. K. Rowling', 'Bloomsbury Publishing', '1997', '978-8532511010', 10, 10, 32.20, 'Disponível'),
('Homem Aranha:Historia de Vida', 'Chip Zdarsky', 'Panini', '2019', '978-8542629545', 8, 8, 400.00, 'Disponível'),
('Ayrton Senna-Uma Lenda A Toda Velocidade', 'Christopher Hilton', 'Global Editora', '2009', '978-8526013711', 6, 6, 239.00, 'Disponível'),
('Sobrevivendo no inferno', 'Racionais', 'Companhia das Letras', '2018', '978-8535931730', 12, 12, 50.00, 'Disponível'),
('1993:O Ano de Ouro do São Paulo Futebol Clube', 'Michael Serra', 'Onze Cultural', '2023', ' 978-6586818239', 7, 7, 90.00, 'Disponível'),
('O Diário de Anne Frank', 'Anne Frank', 'Edipro', '1947', '978-8501044457', 9, 9, 140.00, 'Disponível'),
('Percy Jackson e o Ladrão de Raios', 'Rick Riordan', 'Intrínseca', '2005', '978-8580575392', 5, 5, 110.00, 'Disponível'),
('Jogos Vorazes', 'Suzanne Collins', 'Rocco Ltda', '2008', '978-8579800245', 7, 7, 90.00, 'Disponível'),
('It:A Coisa', 'Stephen King', 'Suma', '1986', ' 978-8560280940', 4, 4, 100.00, 'Disponível'),
('A Culpa é das Estrelas', 'John Green', 'Intrínseca', '2014', ' 978-8580572261', 3, 3, 130.00, 'Disponível');


INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 1, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 5, '2024-09-03', '2024-09-17', 'Em andamento'),
(5, 3, '2024-09-04', '2024-09-18', 'Em andamento'),
(4, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 4, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 7, '2024-09-08', '2024-09-22', 'Em andamento'),
(10, 9, '2024-09-09', '2024-09-23', 'Em andamento'),
(9, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-11', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento');


INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(11, 12, '2024-09-01', '2024-09-15', 'Em andamento'),
(12, 11, '2024-09-02', '2024-09-16', 'Em andamento'),
(13, 15, '2024-09-03', '2024-09-17', 'Em andamento'),
(15, 13, '2024-09-04', '2024-09-18', 'Em andamento'),
(14, 16, '2024-09-05', '2024-09-19', 'Em andamento'),
(16, 14, '2024-09-06', '2024-09-20', 'Em andamento'),
(17, 18, '2024-09-07', '2024-09-21', 'Em andamento'),
(18, 17, '2024-09-08', '2024-09-22', 'Em andamento'),
(11, 19, '2024-09-09', '2024-09-23', 'Em andamento'),
(19, 20, '2024-09-10', '2024-09-24', 'Em andamento'),
(12, 20, '2024-09-11', '2024-09-25', 'Em andamento'),
(20, 13, '2024-09-11', '2024-09-25', 'Em andamento'),
(14, 15, '2024-09-11', '2024-09-25', 'Em andamento'),
(16, 20, '2024-09-11', '2024-09-25', 'Em andamento');