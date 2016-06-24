'use strict';

var Types = require('joi');

module.exports = function (server) {
    const 
        harvesterPlugin = server.plugins['hapi-harvester'],
        schema = {
            type: 'products',
            attributes: {
                name: Types.string().forbidden(),
                price: Types.number().forbidden().min(0),
                brand: Types.string().forbidden(),
                model: Types.string().forbidden(),
                created_on: Types.date().forbidden(),
                updated_on: Types.date().forbidden()
            }
        }

    harvesterPlugin.routes.all(schema).forEach(function (route) {
        server.route(route)
    })
}
