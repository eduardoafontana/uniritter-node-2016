module.exports = function () {
    const 
        _ = require('lodash'),
        chai = require('chai'),
        expect = chai.expect;

    const payload = 
    
    this.Given(/^a valid product/, function () {
        this.payload = {
            data: {
                type: 'products',
                attributes: {
                    name: 'Produto nome teste',
                    price: 25,
                    brand: 'Produto marca teste',
                    model: 'Produto modelo teste'
                    }
                }
        };
        
        return payload;
    });
}
