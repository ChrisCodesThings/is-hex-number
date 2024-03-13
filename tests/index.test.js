
const { default: testFunc } = await import("../");

describe("check for bad input", () => {
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

    test("an invalid string", async () => {
        expect(testFunc("foo")).toEqual(false);
    });
});

describe("whole numbers", () => {
    test("hex charset", async () => {
        expect(testFunc("0123456789abcdef")).toEqual(true);
    });

    test("hex string", async () => {
        expect(testFunc("c0ffee")).toEqual(true);
    });

    test("not a whole number", async () => {
        expect(testFunc("dead.d0d0")).toEqual(false);
    });
});

describe("floating point numbers", () => {
    test("hex charset", async () => {
        expect(testFunc("abcd.1234", true)).toEqual(true);
    });

    test("hex string", async () => {
        expect(testFunc("ace.cafe", true)).toEqual(true);
    });
});
