const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    num_dormitorio: { type: Number, required: true, default: 2 },
    num_vaga_garagem: { type: Number, required : true, default: 1 },
    num_sala: { type: Number, required : true, default: 1 },
    num_banheiro: { type: Number, required : true, default: 1 },
    num_cozinha: { type: Number, required : true, default: 1  },
    dimensao_area: { type: Number, required : true, },
    complemento:{type: mongoose.ObjectId, ref: 'Complemento', required: true}, // Referencia a outra entidade (Chave Estrangeira)
    identificacao:{type: mongoose.ObjectId, ref: 'Identificacao', required: true},// Referencia a outra entidade (Chave Estrangeira)
    //detalhe:{type: mongoose.ObjectId, ref: 'Detalhe', required: true}, // Referencia a outra entidade (Chave Estrangeira)
    corretor:{type: mongoose.ObjectId, ref: 'Corretor', required: true}
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Imovel', esquema, 'imoveis')