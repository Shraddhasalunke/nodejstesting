const { add, err, promiseTest } = require("../index");

test("toBe", () => {
  expect(add(12, 13)).toBe(25); //passed
});

test("toEqual", () => {
  //failed
  expect(add(12, 14)).not.toEqual(26); //not means reverse
});

test("toNull", () => {
  expect(add(1, 0)).not.toBeNull(); //passed
});

test("toBeGreaterThan", () => {
  expect(add(1, 4)).toBeGreaterThan(3); //passed
});

test("toBeLesserThan", () => {
  expect(add(1, 4)).toBeLessThan(1); // 5<3  failed
});

test("toMatch", () => {
  expect(add("hello", "world")).toMatch(/hello/); // passed
});

test("toThrow", () => {
  expect(() => err()).toThrow("this is a new error"); // passed
});

describe("this is a block", () => {
  test("this is executing in a block", () => {
    expect(() => err()).toThrow("this is a new error");
  });
});

test("promiseTest", () => {
  promiseTest(1, 2)
    .then((data) => {
      expect(data).toBe("+ve");
    })
    .catch((e) => {
      expect(e).toBe("-ve");
    });
});

test("promiseTest2", async () => {
  await expect(promiseTest(0, 2).resolves.toBe("+ve")); //1-2=-1 failed
});

test("promiseTest3 reject", async () => {
  await expect(promiseTest(0, 2).rejects.toBe("-ve")); //1-2=-1 failed
});