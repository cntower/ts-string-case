export function camelCase(...words: any[]): string {
  return words.filter(w => !!w).reduce((p, c: string, i) => p + (!i ? c.charAt(0).toLowerCase() + c.slice(1) : c.charAt(0).toUpperCase() + c.slice(1)), '');
}