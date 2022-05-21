const Employee = require('../lib/Employee.js');

const employee = new Employee('Mac', '100', 'macpat@gmail.com');

test('creates a employee object', () => {
    

    expect(employee.name).toBe('Mac');
    expect(employee.id).toEqual('100');
    expect(employee.email).toBe('macpat@gmail.com')
})

test("get employee name", () => {
    expect(employee.getName()).toBe('Mac');
   
})

test("get employee id", () => {
    expect(employee.getId()).toEqual('100')
})

test("get employee email address", () => {
    expect(employee.getEmail()).toBe('macpat@gmail.com')
})

test("get employee role", () => {
    expect(employee.getRole()).toBe('Employee')
})