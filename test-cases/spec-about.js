// Stash after
// test case for partial-about.html
describe('Simple cases for app', function() {

	beforeEach(function() {
    	browser.get('http://127.0.0.1:8080/#/home');
  	});

  	it('Column one and column two should not be empty', function() {
    	element(by.id('about-btn')).click();

    	element(by.id('column-one')).getText().then(function(text){
    		expect(text).toEqual('Look I am a column1!');
		});

		var scotchCount = element.all(by.repeater('scotch in scotches'));
    	expect(scotchCount.count()).toEqual(3);	
    });

});