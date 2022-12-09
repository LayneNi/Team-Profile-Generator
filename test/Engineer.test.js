const Engineer = require("../lib/Engineer")
test("Creates a new Engineer object", () => {
    const createdEngineer = new Engineer();
    expect(typeof(createdEngineer)).toBe("object")
})
test("Should generate github username", () => {
    const generatedGithub = new Engineer()
    expect(generatedGithub.getGithub()).toBe(this.github)
    })