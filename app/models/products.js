'use strict';

var Types = require('joi');

module.exports = function (server) {
    const 
        harvesterPlugin = server.plugins['hapi-harvester'],
        schema = {
            type: 'products',
            attributes: {
                name: Types.string().required(),
                price: Types.number().min(0),
                brand: Types.string(),
                model: Types.string(),
                created_on: Types.date().forbidden(),
                updated_on: Types.date().forbidden()
            }
        }

    harvesterPlugin.routes.all(schema).forEach(function (route) {
        server.route(route)
    })
}
