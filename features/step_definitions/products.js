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
    
    this.Given(/^a valid product/, function () {
        this.payload = payload;
        
        return payload;
    });
    
    this.Given(/^an invalid product that is missing the name$/, function () {
      
        payload.data.attributes.name = null;      
        payload.data.attributes.price = 25;
      
        //TODO: clonar objeto para nao precisar resetar propriedade.
      
        this.payload = payload;
      
        return payload;
    });
    
    this.Given(/^an invalid product that has a negative price$/, function () {
      
        payload.data.attributes.name = 'Produto nome teste';
        payload.data.attributes.price = -1;
      
        //TODO: clonar objeto para nao precisar resetar propriedade.
      
        this.payload = payload;
      
        return payload;
    });    
    
    this.Then(/^I receive an error response$/, function () {
      
        expect(this.errorResponse).to.equal(400);
    });
    
    // this.Then(/^a message saying that (.*)$/, function (notification) {
    //     expect(this.errorResponse).to.equal(notification);
    // });    
}
