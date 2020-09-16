import { assert } from "chai";
import { Foo } from "../src/index";

describe("foo", () => {
  it("bar", () => {
    assert.equal(new Foo().bar, 1);
  });
});
