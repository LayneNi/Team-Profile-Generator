const Employee = require("../lib/Employee");
test("Can create a new employee", () => {
    const createdEmployee = new Employee();
    expect(typeof(createdEmployee)).toBe("object")
})
test("Generates name", () => {
    const name = "bob";
    const generatedName = new Employee(name);
    console.log(name);
    expect(generatedName.name).toBe(name)
})