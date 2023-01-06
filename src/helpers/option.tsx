export interface Option {
  label: string;
  value: string;
}
/**
 * Return the label of a value in an option array
 * @param value Option array and value to read
 * @param options Array of { label, value }
 * @return The matched label
 */
export function readOption(
  value: string,
  options: Option[]): string {
  const matchedOption = options.find(option => option.value === value);

  return matchedOption?.label || '';
}
/**
 * Check if an option contains a string
 * @param option The option to check
 * @param filterString The filter string, often user input
 * @returns Whether the option contains the filter string
 */
export function filterOption(
  option: { label: string; },
  filterString: string): boolean {
  return option.label.toLowerCase().indexOf(filterString) > -1;
}
