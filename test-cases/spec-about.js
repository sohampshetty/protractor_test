// test case for partial-about.html
describe('Simple cases for app', function() {

	browser.get('http://127.0.0.1:8080/#/home');
	element(by.id('list-id')).click();
	var history = element.all(by.repeater('dog in dogs'));
    it('Dog list should not be empty', function() {
    	expect(history.count()).toEqual(3);	
    });
});