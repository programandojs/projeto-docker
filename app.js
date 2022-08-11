const conectar = async() => {
    if (global.conectando && global.conectando.state != 'disconected')
        return global.conectando;
    const mysql = require('mysql2/promise');
    const conexao = mysql.createConnection('mysql://root:$kali@127.45.12.145:3306/meuBanco')
    console.log('Conectou ao banco')
    global.conectando = conexao;
    return conexao;
}
conectar();
