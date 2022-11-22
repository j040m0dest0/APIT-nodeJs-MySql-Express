const connection = require('../database/connection')

const responseModel = {
    sucesse: false,
    data : [],
    error : []
}


module.exports = {

    async createLink(req, res){
        
        const response = {...responseModel}

        const { link, user_id } = req.body;

        const [, affectRows] = await connection.query(`
        INSERT INTO urls  VALUES (DEFAULT, '${link}', '${user_id}', NOW(), NOW())
        `)

        response.success = affectRows > 0

        return res.json(response)

    },

    async getLink(req, res){
        const response = {...responseModel}

        const{ user_id} = req.body;

        const [, data] = await connection.query(`
            SELECT * FROM urls WHERE user_id= '${user_id}'
        `)

        console.log(data)

        return res.json(data)
    },
    async updateLink(req, res){
        const response = {...responseModel}

        const{ user_id} = req.body;

        const [, data] = await connection.query(`
            UPDATE url set link = '${link}' WHERE user_id = '${user_id}' 
        `)

        console.log(data)

        return res.json(data)
    }
}
