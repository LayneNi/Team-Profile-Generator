const Manager = require("../lib/Manager");
test("should generate a manager object", () => {
    const generateManager = new Manager();
    expect(typeof (generateManager)).toBe("object")
})
test("Should generate office", () => {
    const generatedOffice = new Manager()
    expect(generatedOffice.getOffice()).toBe(this.office)
})
test("Should generate Id", () => {
    const id = "200"
    const generatedId = new Manager("Layne", id)
    expect(generatedId.id).toBe(id)
})
