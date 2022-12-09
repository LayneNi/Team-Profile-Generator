const Intern = require("../lib/Intern")
test("should generate a Intern object", () => {
    const generateIntern = new Intern();
    expect(typeof(generateIntern)).toBe("object")
})
test("Should generate school", () => {
    const generatedSchool = new Intern()
    expect(generatedSchool.getSchool()).toBe(this.School)
    })


