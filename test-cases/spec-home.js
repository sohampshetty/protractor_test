/**
 * Created by 7000012370 on 11/14/2016.
 */
/** test case for partial-home.html....*/

describe('Simple cases for app', function() {
    it('should have a title', function() {
        browser.get('http://127.0.0.1:8080/#/home');

        element(by.id('header-id')).getText().then(function(text){
    		expect(text).toEqual('The Home Page');
		});

        
    });
});