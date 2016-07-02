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
    
    this.Given(/^an invalid product that (.*)$/, function (condition) {
      
        if(condition === 'is missing the name')
            payload.data.attributes.name = null;
            
        // if(condition === 'has a negative price')
        //     payload.data.attributes.price = -1;
      
        this.payload = payload;
      
        return payload;
    });
    
    // this.Then(/^I receive an error response$/, function () {
      
    //     expect(this.errorResponse).to.equal(404);
    // });
    
    // this.Then(/^a message saying that (.*)$/, function (notification) {
    //     expect(this.errorResponse).to.equal(notification);
    // });    
}
