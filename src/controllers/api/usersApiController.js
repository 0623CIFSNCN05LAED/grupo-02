const userService = require('../../services/userServices')
const {Users} = require('../../database/models')

const usersApiController = {
    'list': async (req, res) => {
        const users = await Users.findAll();
        const usersWithUrls = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                description: user.email,
                detailUrl: `${req.protocol}://${req.get('host')}/api/users/detail/${user.id}`,
            }
        })
        res.json({
            meta: {
                status: 200,
                total: users.length,
                url: req.originalUrl, 
            }, 
            data: usersWithUrls,
        })
    },
    'detail': async (req, res) => {
        const id = req.params.id;
        const user = await Users.findByPk(id)
        const result = {
            id: user.id,
            name: user.id,
            user: user.user,
            email: user.email,
            country: user.country,
            city: user.city,
            imageUrl: `${req.protocol}://${req.get('host')}/images/users/${user.image}`
        }
        res.json({
            meta: {
                status: 200,
                url: req.originalUrl, 
            }, 
            data: result
        })
    }
}

module.exports = usersApiController