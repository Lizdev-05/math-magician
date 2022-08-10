import operate from './operate';

it('should return 0 if no input', () => {
  expect(operate(1, 2, '+')).toBe('3');
  expect(operate(1, 2, '-')).toBe('-1');
  expect(operate(1, 2, 'x')).toBe('2');
  expect(operate(1, 2, '÷')).toBe('0.5');
  expect(operate(1, 2, '%')).toBe('1');
});
