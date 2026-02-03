// Simulando um banco de dados em memória (um array de objetos)
let bancoDeDados = [
    { id: 1, nome: "Admin", email: "admin@email.com" },
    { id: 2, nome: "Fulano", email: "fulano@teste.com" }
];

class UsuarioModel {
    // Retorna todos os usuários
    static lista() {
        return bancoDeDados;
    }

    // Busca um usuário específico pelo ID
    static consultarPorId(id) {
        return bancoDeDados.find(u => u.id === parseInt(id));
    }

    // Adiciona um novo usuário ao array
    static criar(dados) {
        const novoUsuario = { 
            id: bancoDeDados.length > 0 ? bancoDeDados[bancoDeDados.length - 1].id + 1 : 1, 
            ...dados 
        };
        bancoDeDados.push(novoUsuario);
        return novoUsuario;
    }

    // Atualiza um usuário existente
    static atualizar(id, dadosAtualizados) {
        const index = bancoDeDados.findIndex(u => u.id === parseInt(id));
        
        if (index !== -1) {
            // Mantemos o ID original e mesclamos com os novos dados
            bancoDeDados[index] = { ...bancoDeDados[index], ...dadosAtualizados };
            return bancoDeDados[index];
        }
        return null; // Retorna null se não encontrar o usuário
    }

    // Remove um usuário do array
    static deletar(id) {
        const index = bancoDeDados.findIndex(u => u.id === parseInt(id));
        
        if (index !== -1) {
            // Remove 1 item na posição 'index'
            const usuarioRemovido = bancoDeDados.splice(index, 1);
            return usuarioRemovido[0];
        }
        return null;
    }
}

module.exports = UsuarioModel;