import { sum, multiplication } from './task1';

let consoleLogMock;
beforeEach(() => {
  consoleLogMock = jest.spyOn(console, 'log');
});

describe('Testing sum function', () => {
  it('2+2 = 4', () => {
    sum(2, 2);
    expect(consoleLogMock).toHaveBeenCalledTimes(1);
    expect(consoleLogMock).toHaveBeenCalledWith(4);
  });
  it('Works only with numbers', () => {
    expect(sum('2', 2)).toBe('There are not numbers');
    expect(sum('', 2)).toBe('There are not numbers');
  });
});
describe('Testing multiplication function', () => {
  it('2*3 = 6', () => {
    multiplication(2, 3);
    expect(consoleLogMock).toHaveBeenCalledTimes(1);
    expect(consoleLogMock).toHaveBeenCalledWith(6);
    // expect(multiplication(2, 3)).toBe(6);
  });
  it('Works only with numbers', () => {
    expect(sum('2', 2)).toBe('There are not numbers');
    expect(sum('', 2)).toBe('There are not numbers');
  });
});
