import { debounce, getCocktailUrl } from "./helpers";

describe("Helper fns", () => {
  it("constructs cocktail db url", () => {
    const id = "777";
    expect(getCocktailUrl(id)).toContain(id);
  });
  it("debounces fns", async () => {
    const timeout = 200;
    const fn = jest.fn();
    const debounedFn = debounce(fn, timeout);

    for (let i = 0; i < 4; i++) {
      debounedFn();
    }

    expect(fn).toBeCalledTimes(0);

    return new Promise((res) => {
      setTimeout(() => {
        res("");
      }, timeout);
    }).then(() => {
      expect(fn).toBeCalledTimes(1);
      expect.assertions(2);
    });
  });
});
