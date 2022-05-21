const Manager = require('../lib/Manager.js');

const manager = new Manager(999-999-9999);



test('creates a manager object', () => {
    expect(manager.officeNumber).toEqual(999-999-9999);
    
})

test("get employee role", () => {
    expect(manager.getRole()).toBe('Manager')
})