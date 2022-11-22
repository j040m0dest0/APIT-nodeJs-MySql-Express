const connection = require('../database/connection')

const responseModel = {
    sucesse: false,
    data : [],
    error : []
}

module.exports = {

    async createCategoria(req, res){
        
        const response = {...responseModel}

        const { nomecategoria, id_usuario, nomeurl } = req.body;

        const [, affectRows] = await connection.query(`
        INSERT INTO categoria  VALUES (DEFAULT, '${nomecategoria}', '${id_usuario}', '${nomeurl}', NOW(), NOW())
        `)

        response.success = affectRows > 0

        return res.json(response)

    },

    async getCategoria(req, res){
        const response = {...responseModel}

        const{id_usuario} = req.body;

        const [, data] = await connection.query(`
            SELECT * FROM categoria WHERE id_usuario= '${id_usuario}'
        `)

        console.log(data)

        return res.json(data)
    }
    // async updateCategoria(req, res){
    //     const response = {...responseModel}

    //     const{ user_id} = req.body;

    //     const [, data] = await connection.query(`
    //         UPDATE url set link = '${link}' WHERE user_id = '${user_id}' 
    //     `)

    //     console.log(data)

    //     return res.json(data)
    // }
}