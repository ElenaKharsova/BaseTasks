import { monthsPresented } from "./task2_3";

describe("Testing function months presented", () => {
  let consoleLogMock;
  let windowPromptMock;

  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log");
    windowPromptMock = window.prompt;
  });
  afterEach(() => {
    jest.clearAllMocks();
    window.prompt = windowPromptMock;
  });
  it("User has input number 1", () => {
    jest.spyOn(window, "prompt").mockReturnValue("1");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("1");
    expect(consoleLogMock).toHaveBeenCalledWith("январь");
  });
  it("User has input number from 2", () => {
    jest.spyOn(window, "prompt").mockReturnValue("2");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("2");
    expect(consoleLogMock).toHaveBeenCalledWith("февраль");
  });
  it("User has input number 3", () => {
    jest.spyOn(window, "prompt").mockReturnValue("3");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("3");
    expect(consoleLogMock).toHaveBeenCalledWith("март");
  });
  it("User has input number 4", () => {
    jest.spyOn(window, "prompt").mockReturnValue("4");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("4");
    expect(consoleLogMock).toHaveBeenCalledWith("апрель");
  });
  it("User has input number 5", () => {
    jest.spyOn(window, "prompt").mockReturnValue("5");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("5");
    expect(consoleLogMock).toHaveBeenCalledWith("май");
  });
  it("User has input number 6", () => {
    jest.spyOn(window, "prompt").mockReturnValue("6");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("6");
    expect(consoleLogMock).toHaveBeenCalledWith("июнь");
  });
  it("User has input number 7", () => {
    jest.spyOn(window, "prompt").mockReturnValue("7");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("7");
    expect(consoleLogMock).toHaveBeenCalledWith("июль");
  });
  it("User has input number 8", () => {
    jest.spyOn(window, "prompt").mockReturnValue("8");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("8");
    expect(consoleLogMock).toHaveBeenCalledWith("август");
  });
  it("User has input number 9", () => {
    jest.spyOn(window, "prompt").mockReturnValue("9");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("9");
    expect(consoleLogMock).toHaveBeenCalledWith("сентябрь");
  });
  it("User has input number 10", () => {
    jest.spyOn(window, "prompt").mockReturnValue("10");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("10");
    expect(consoleLogMock).toHaveBeenCalledWith("октябрь");
  });
  it("User has input number 11", () => {
    jest.spyOn(window, "prompt").mockReturnValue("11");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("11");
    expect(consoleLogMock).toHaveBeenCalledWith("ноябрь");
  });
  it("User has input number 12", () => {
    jest.spyOn(window, "prompt").mockReturnValue("12");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("12");
    expect(consoleLogMock).toHaveBeenCalledWith("декабрь");
  });
  it("User has input number not from 1 to 12", () => {
    jest.spyOn(window, "prompt").mockReturnValue("0");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("0");
    expect(consoleLogMock).toHaveBeenCalledWith(
      "The number is not included in the boundaries",
    );
  });
});
