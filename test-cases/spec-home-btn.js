describe('Simple cases for app', function() {
	
	beforeEach(function() {
    	browser.get('http://127.0.0.1:8080/#/home');
  	});

    it('Dog list should not be empty', function() {
    	element(by.id('list-id')).click();
		var dogCount = element.all(by.repeater('dog in dogs'));
    	expect(dogCount.count()).toEqual(3);	
    });

    it('Column one should not be empty', function() {
    	element(by.id('para-id')).click();
    	element(by.css('.p-class')).getText().then(function(text){
    		expect(text).toEqual('I could sure use a drink right now.');
		});	
    });

});