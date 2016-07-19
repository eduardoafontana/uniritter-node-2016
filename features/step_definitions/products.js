module.exports = function () {
    const 
        _ = require('lodash'),
        chai = require('chai'),
        expect = chai.expect;

    const payloadBase = {
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
        this.payload = payloadBase;
        
        return payloadBase;
    });
    
    this.Given(/^an invalid product that is missing the name$/, function () {
      
        //const payload = _.clone(payloadBase, true);
        //payload.data.attributes.name = null;  
        //TODO: _.clone nao clona
        
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
        
        payload.data.attributes.name = null;
        
        this.payload = payload;
      
        return payload;
    });
    
    this.Given(/^an invalid product that has a negative price$/, function () {
      
        //const payload = _.clone(payloadBase, true);
        //payload.data.attributes.price = -1;
        //TODO: _.clone nao clona
      
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
        
        payload.data.attributes.price = -1;
      
        this.payload = payload;
      
        return payload;
    });    
    
    this.Then(/^I receive an error response$/, function () {
      
        expect(this.errorResponse).to.equal(400);
    });
    
    this.Then(/^a message saying that (.*)$/, function (notification) {
        expect(this.errorMessage).to.equal(notification);
    });    
}
