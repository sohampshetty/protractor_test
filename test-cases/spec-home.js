/**
 * Created by 7000012370 on 11/14/2016.
 */
/** test case for partial-home.html....*/

describe('Simple cases for app', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('The Home Page');
    });
});