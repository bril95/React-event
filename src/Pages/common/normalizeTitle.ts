export default (str: string) => {
  return str.replace(/\[\d+\]\s*/, '');
};