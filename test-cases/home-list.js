/**
 * Created by 7000012370 on 11/14/2016.
 */


describe('Protractor Simple test cases', function() {
    var history = element.all(by.repeater('scotch in scotches'));

    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(history.count()).toEqual(3);
    });
});