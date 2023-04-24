import { sum, multiplication, countStringSymbols } from "./task1";

let consoleLogMock;
beforeEach(() => {
  consoleLogMock = jest.spyOn(console, "log");
});
afterEach(() => {
  jest.clearAllMocks();
});

describe("Testing sum function", () => {
  it("2+2 = 4", () => {
    sum(2, 2);
    expect(consoleLogMock).toHaveBeenCalledTimes(1);
    expect(consoleLogMock).toHaveBeenCalledWith(4);
  });
  it("Works only with numbers", () => {
    expect(sum("2", 2)).toBe("There are not numbers");
    expect(sum("", 2)).toBe("There are not numbers");
  });
});
describe("Testing multiplication function", () => {
  it("2*3 = 6", () => {
    multiplication(2, 3);
    expect(consoleLogMock).toHaveBeenCalledTimes(1);
    expect(consoleLogMock).toHaveBeenCalledWith(6);
  });
  it("Works only with numbers", () => {
    expect(sum("2", 2)).toBe("There are not numbers");
    expect(sum([1, 2], 2)).toBe("There are not numbers");
  });
});

describe("Counting symbols in the strings", () => {
  it("The length is 0 for empty strings", () => {
    countStringSymbols("", "");
    expect(consoleLogMock).toHaveBeenCalledTimes(1);
    expect(consoleLogMock).toHaveBeenCalledWith(0);
  });
  it("Second string is empty", () => {
    countStringSymbols("Test", "");
    expect(consoleLogMock).toHaveBeenCalledTimes(1);
    expect(consoleLogMock).toHaveBeenCalledWith(4);
  });
  it("First string is emty", () => {
    countStringSymbols("", "for testing");
    expect(consoleLogMock).toHaveBeenCalledTimes(1);
    expect(consoleLogMock).toHaveBeenCalledWith(11);
  });
  it("Dosen't work with numbers", () => {
    expect(countStringSymbols("test", 2)).toBe("There are not strings");
  });
  it("dosen't work with arrays", () => {
    expect(countStringSymbols([1, 2], "2")).toBe("There are not strings");
  });
});
