const Intern = require('../lib/Intern.js');

const intern = new Intern("UTA");



test('creates a intern object', () => {
    expect(intern.school).toEqual("UTA");
    
})

test("get employee role", () => {
    expect(intern.getRole()).toBe('Intern')
})