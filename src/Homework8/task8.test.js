import { userDate, countDayMinutes, youngestUser } from "./task8";

describe("Testing fuction userDate", () => {
  let consoleLogMock;
  let windowPromptMock;
  let windowAlertMock;
  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log");
    windowPromptMock = window.prompt;
    windowAlertMock = window.alert;
  });
  afterEach(() => {
    jest.clearAllMocks();
    window.prompt = windowPromptMock;
    window.alert = windowAlertMock;
  });
  it("The input string is empty", () => {
    jest.spyOn(window, "prompt").mockReturnValue("");
    jest.spyOn(window, "alert").mockReturnValue("You haven't input the date!");
    userDate();
    expect(window.prompt).toHaveLastReturnedWith("");
    expect(window.alert).toHaveBeenCalledWith("You haven't input the date!");
  });
  it("08/05/2023 is incorrect date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("08/05/2023");
    jest.spyOn(window, "alert").mockReturnValue("Incorrect type of a date");
    userDate();
    expect(window.alert).toHaveLastReturnedWith("Incorrect type of a date");
  });
  it("08.05.2023 is Monday", () => {
    jest.spyOn(window, "prompt").mockReturnValue("08.05.2023");
    userDate();
    expect(consoleLogMock).toHaveBeenCalledWith("Today is Monday");
  });
  it("09.05.2023 is Tuesday", () => {
    jest.spyOn(window, "prompt").mockReturnValue("09.05.2023");
    userDate();
    expect(consoleLogMock).toHaveBeenCalledWith("Today is Tuesday");
  });
  it("10.05.2023 is Wednesday", () => {
    jest.spyOn(window, "prompt").mockReturnValue("10.05.2023");
    userDate();
    expect(consoleLogMock).toHaveBeenCalledWith("Today is Wednesday");
  });
  it("11.05.2023 is Thursday", () => {
    jest.spyOn(window, "prompt").mockReturnValue("11.05.2023");
    userDate();
    expect(consoleLogMock).toHaveBeenCalledWith("Today is Thursday");
  });
  it("12.05.2023 is Friday", () => {
    jest.spyOn(window, "prompt").mockReturnValue("12.05.2023");
    userDate();
    expect(consoleLogMock).toHaveBeenCalledWith("Today is Friday");
  });
  it("13.05.2023 is Saturday", () => {
    jest.spyOn(window, "prompt").mockReturnValue("13.05.2023");
    userDate();
    expect(consoleLogMock).toHaveBeenCalledWith("Today is Saturday");
  });
  it("14.05.2023 is Sunday", () => {
    jest.spyOn(window, "prompt").mockReturnValue("14.05.2023");
    userDate();
    expect(consoleLogMock).toHaveBeenCalledWith("Today is Sunday");
  });
});

describe("Testing fuction countDayMinutes", () => {
  let consoleLogMock;
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2020, 3, 1, 23, 55, 13));
    consoleLogMock = jest.spyOn(console, "log");
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  it("Has left 1435 minutes", () => {
    countDayMinutes();
    expect(consoleLogMock).toHaveBeenCalledWith(1435);
  });
});

describe("Testing fuction youngestUser", () => {
  it("First user is younger", () => {
    expect(youngestUser("03.05.1986", "03.05.1977")).toBe("03.05.1986");
  });
  it("Second user is younger", () => {
    expect(youngestUser("03.01.1996", "01.05.2007")).toBe("01.05.2007");
  });
});
