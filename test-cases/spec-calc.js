describe('Test cases for calculator functionality', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  browser.get('http://127.0.0.1:8080/#/home');
  element(by.id('cal-btn')).click();

  function add(a, b, optionNum) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    browser.findElements(by.tagName('option'))   
      .then(function(options){
        options[optionNum].click();
      });
    goButton.click();
  }

  it('should have a history', function() {
    add(1, 2, 0);
    expect(latestResult.getText()).toEqual('3');

    add(20, 4, 1);
    expect(latestResult.getText()).toEqual('5');

    expect(history.count()).toEqual(2);

    add(15, 6, 2);
    expect(latestResult.getText()).toEqual('3');

    add(100, 3, 3);
    expect(latestResult.getText()).toEqual('300');

    add(100, 3, 4);
    expect(latestResult.getText()).toEqual('97');

    expect(history.count()).toEqual(5); // This is wrong!
  });
});