const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    data_inicial: { type: Date, required: true },
    data_final: { type: Date, required: true},
    dias_semana: [{ // Colocando as chaves em colchete eu transformo em um atributo multivalorado
        type: String,
        required: true,
        enum: ['dom', 'seg', 'ter', 'qua','qui','sex', 'sáb']
    }],
    horario_inicial: {type: String, required: true},
    horario_final: {type: String, required: true},
    curso:{type: mongoose.ObjectId, ref: 'Curso', required: true}, // Referencia a outra entidade (Chave Estrangeira)
    professor:{type: mongoose.ObjectId, ref: 'Professor', required: true},// Referencia a outra entidade (Chave Estrangeira)
    sala_aula:{type: mongoose.ObjectId, ref: 'SalaAula', required: true} // Referencia a outra entidade (Chave Estrangeira)
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Turma', esquema, 'turmas')