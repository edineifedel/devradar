const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {
    async save (request, response) {
        const { github_username, techs } = request.body
    
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
        const { name = login, avatar_url, bio } = apiResponse.data
        
        const techsArray = techs.split(',').map(tech => tech.trim());
        
        console.log(name, github_username, avatar_url, bio, techsArray);
    
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray
        })
    
        return response.json(dev);
    }
};