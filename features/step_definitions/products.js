module.exports = function () {
    const 
        _ = require('lodash'),
        chai = require('chai'),
        expect = chai.expect;

    const payload = {
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
    
    this.payload = payload;
    
    this.Given(/^a valid product/, function () {
        return payload;
    });
    
    this.Then(/^the new product id$/, function () {
        expect(this.newId).not.to.be.undefined;
    });
}
