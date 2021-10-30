export type ParsedUnit = [value: number, unit: string];

export const parseUnit = (input: string | number): ParsedUnit => {
  const str = `${input}`;
  const value = parseFloat(str);
  const unit = str.match(/[\d.\-+]*\s*(.*)/)?.[1];

  return [isNaN(value) ? 0 : value, unit ? unit : "px"];
};
