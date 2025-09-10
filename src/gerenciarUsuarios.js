const usuarios = [
    {
        nome: 'Matheus',
        email:'matheus@teste.com'
    },
    {
        nome: 'Marcos',
        email:'marcos@teste.com'
    },
    {
        nome: 'Lucas',
        email:'lucas@teste.com'
    },
    {
        nome: 'João',
        email:'joao@teste.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}