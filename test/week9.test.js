const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("returns sum of multiples of numbers divisible by 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([4, 22, 6, 12, 65, 23, 40, 1])).toBe(123);
  });
});

describe("isValidDNA", () => {
  test("function throws error when no string is passed", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });
  test("function throws an error when a non string is passed", () => {
    expect(() => {
      isValidDNA(3);
    }).toThrow("str is required");
  })
  test("function returns false when string is empty", () => {
    expect(isValidDNA("")).toBe(false);
  });
  test("function returns true when string only contains C G T A", () => {
    expect(isValidDNA("CGA")).toBe(true);
    expect(isValidDNA("CCGGAATTCCAAGGTT")).toBe(true);
  });
  test("function returns false when string doesn't contain just C G A T", () => {
    expect(isValidDNA("BYH")).toBe(false);
  });
  test("function ignores case", () => {
    expect(isValidDNA("cgattagc")).toBe(true);
    expect(isValidDNA("hnq")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("function throws an error when no str is passed ", () => {
    expect(() => {
      getComplementaryDNA()
    }).toThrow("str is required");
    expect(() => {
      getComplementaryDNA(4)
    }).toThrow("str is required");
  });
  test("function throws an error when invalid DNA sequence passsed", () => {
    expect(() => {
      getComplementaryDNA('JN')
    }).toThrow("valid sequence is required");

  });
  test("function returns correct result", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("AAAACCCCGGGGTTTT")).toBe("TTTTGGGGCCCCAAAA");
    expect(getComplementaryDNA("ACTGACTG")).toBe("TGACTGAC");
  });
});

describe("isItPrime", () => {
  test("reverses the digits of a number", () => {
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(104)).toBe(false);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(100)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ]);
  });
});

describe("areWeCovered", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    expect(
      areWeCovered(
        [{
            name: "Sally",
            rota: ["Monday", "Tuesday", "Friday"]
          },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
          },
          {
            name: "Tom",
            rota: ["Tuesday", "Saturday"]
          }
        ],
        "Tuesday"
      )
    ).toEqual(true);
    expect(
      areWeCovered(
        [{
            name: "Sally",
            rota: ["Monday", "Friday"]
          },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
          },
          {
            name: "Tom",
            rota: ["Tuesday", "Saturday"]
          }
        ],
        "Tuesday"
      )
    ).toEqual(false);
  });

  test("ignores case", () => {
    expect(
      areWeCovered(
        [{
            name: "Jeremy",
            rota: ["Monday", "Tuesday", "Friday", "Sunday"]
          },
          {
            name: "Boris",
            rota: ["Saturday", "Sunday", "Wednesday"]
          },
          {
            name: "Nicola",
            rota: ["Tuesday", "Saturday", "Sunday"]
          }
        ],
        "sunday"
      )
    ).toEqual(false);
  });
});