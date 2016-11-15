exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec-calc.js','spec-home.js', 'spec-about.js','spec-home-btn.js']
  //specs: ['spec-calc.js']
}