const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {

    sequelize.authenticate()
    console.log('Sequelize conectado com sucesso!')

}catch(err) {
    console.log('Não foi possivel conectar:', error)
}

module.exports = sequelize