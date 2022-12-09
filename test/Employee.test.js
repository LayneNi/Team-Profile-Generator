const Employee = require("../lib/Employee");
test("Can create a new employee", () => {
    const createdEmployee = new Employee();
    expect(typeof(createdEmployee)).toBe("object")
})
test("Generates name", () => {
    const name = "Bob";
    const generatedName = new Employee(name);
    expect(generatedName.name).toBe(name)
})