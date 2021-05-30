import { parseUnit } from "./parseUnit";

describe("parseUnit", () => {
  test.each`
    input        | output
    ${"20px"}    | ${[20, "px"]}
    ${"20 px"}   | ${[20, "px"]}
    ${"11gold"}  | ${[11, "gold"]}
    ${"11 gold"} | ${[11, "gold"]}
    ${"2.5%"}    | ${[2.5, "%"]}
    ${"2.5 %"}   | ${[2.5, "%"]}
    ${"-2.5"}    | ${[-2.5, "px"]}
  `("parses $input into $output", ({ input, output }) => {
    expect(parseUnit(input)).toEqual(output);
  });

  it("falls back to 0 (instead of NaN) for invalid values", () => {
    expect(parseUnit("")).toEqual([0, "px"]);
  });
});
