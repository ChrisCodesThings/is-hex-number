
const { default: testFunc } = await import("../");

describe("check if strings are hexadecimal numbers", () => {
    test("nothing", async () => {
        expect(testFunc()).toEqual(false);
    });

    test("boolean", async () => {
        expect(testFunc(true)).toEqual(false);
    });

    test("a number", async () => {
        expect(testFunc(123)).toEqual(false);
    });

    test("an empty string", async () => {
        expect(testFunc("")).toEqual(false);
    });

    test("hex charset", async () => {
        expect(testFunc("0123456789abcdef")).toEqual(true);
    });

    test("hex string", async () => {
        expect(testFunc("deadd0d0")).toEqual(true);
    });

    test("not a hex string", async () => {
        expect(testFunc("foo")).toEqual(false);
    });
});
