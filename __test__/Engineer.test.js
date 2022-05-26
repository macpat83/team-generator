const Engineer = require('../lib/Engineer.js');

const engineer = new Engineer("default@github.com");



test('creates a engineer object', () => {
    expect(engineer.github).toEqual("default@github.com");
    
})

test("get employee role", () => {
    expect(engineer.getRole()).toBe('Engineer')
})