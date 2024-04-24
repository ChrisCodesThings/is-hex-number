
const { default: testFunc } = await import("../");

describe("invalid input", () => {
    test("not a hex string", async () => {
        expect(testFunc("foobar")).toEqual(false);
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
    test("valid numbers", async () => {
        expect(testFunc("abcd.1234", true)).toEqual(true);
        expect(testFunc("ace.cafe", true)).toEqual(true);
    });

    test("invalid decimal points", async () => {
        expect(testFunc(".abcd", true)).toEqual(false);
        expect(testFunc("abcd.", true)).toEqual(false);
        expect(testFunc("a.b.c.d", true)).toEqual(false);
    });
});
