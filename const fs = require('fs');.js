const fs = require('fs');

// --- Dados Iniciais ---
const catalogoFilmes = [
    { id: 1, titulo: 'Matrix', ano: 1999, diretor: 'Lana Wachowski', genero: 'Ficção', nota: 4.8 },
    { id: 2, titulo: 'Titanic', ano: 1997, diretor: 'James Cameron', genero: 'Romance', nota: 4.5 },
    { id: 3, titulo: 'Toy Story', ano: 1995, diretor: 'John Lasseter', genero: 'Animação', nota: 4.7 },
    { id: 4, titulo: 'O Poderoso Chefão', ano: 1972, diretor: 'Francis Ford Coppola', genero: 'Drama', nota: 4.9 },
    { id: 5, titulo: 'Star Wars', ano: 1977, diretor: 'George Lucas', genero: 'Ficção', nota: 4.6 }
];

// --- 1. Converta o objeto catalogoFilmes para string JSON ---
const jsonString = JSON.stringify(catalogoFilmes, null, 2); // Indentação de 2 espaços

// --- 2. Exiba no console com formatação bonita (indentação de 2 espaços) ---
console.log("--- Catálogo JSON ---");
console.log(jsonString);

// --- 3. Mostre o tipo da variável resultante ---
console.log("\nTipo da variável (jsonString):", typeof jsonString); // "string"

// --- 4. Crie uma string JSON (simulando API) com 3 filmes novos ---
const apiResponse = `[
    {"id": 6, "titulo": "Interestelar", "ano": 2014, "diretor": "Christopher Nolan", "genero": "Ficção", "nota": 4.9},
    {"id": 7, "titulo": "Parasita", "ano": 2019, "diretor": "Bong Joon-ho", "genero": "Suspense", "nota": 4.8},
    {"id": 8, "titulo": "Duna", "ano": 2021, "diretor": "Denis Villeneuve", "genero": "Ficção", "nota": 4.5}
]`;

// --- 5. Converta essa string de volta para objeto JavaScript ---
const novosFilmes = JSON.parse(apiResponse); //

// --- 6. Adicione os novos filmes ao catálogo original ---
// Usando spread operator para criar uma nova lista atualizada
const catalogoAtualizado = [...catalogoFilmes, ...novosFilmes];
console.log("\nCatálogo Atualizado com sucesso.");

// --- 7. Crie uma função buscarFilmePorId(id) ---
function buscarFilmePorId(id) {
    const filme = catalogoAtualizado.find(f => f.id === id);
    return filme || null; // Retorna null se não encontrar
}

// --- 8. Teste com IDs existentes e não existentes ---
console.log("\n--- Teste Buscar por ID ---");
console.log("ID 4:", buscarFilmePorId(4));
console.log("ID 99 (Inexistente):", buscarFilmePorId(99));

// --- 9. Função buscarPorGenero(genero) ---
function buscarPorGenero(genero) {
    return catalogoAtualizado.filter(f => f.genero === genero);
}

console.log("\n--- Teste Buscar por Gênero (Ficção) ---");
console.log(buscarPorGenero("Ficção"));

// --- 10. Utilize o módulo fs para salvar o catálogo em um arquivo filmes.json ---
const filePath = './filmes.json';
fs.writeFileSync(filePath, JSON.stringify(catalogoAtualizado, null, 2), 'utf8'); //
console.log(`\nDados salvos em ${filePath}`);

// --- 11. Leia o arquivo novamente e confirme que os dados estão corretos ---
const dadosLidos = fs.readFileSync(filePath, 'utf8'); //
const catalogoFinal = JSON.parse(dadosLidos);
console.log(`\nVerificação: ${catalogoFinal.length} filmes lidos do arquivo.`);

// --- 12. Crie um array com strings formatadas para cada filme ---
// Formato: Matrix (1999) - Dirigido por Lana Wachowski Gênero: Ficção | Nota: 4.8/5.0
const fichasFilmes = catalogoFinal.map(f => {
    return `${f.titulo} (${f.ano}) - Dirigido por ${f.diretor} Gênero: ${f.genero} | Nota: ${f.nota.toFixed(1)}/5.0`;
});

// --- 13. Exiba todas as fichas no console ---
console.log("\n--- Fichas de Filmes ---");
fichasFilmes.forEach(ficha => console.log(ficha));

