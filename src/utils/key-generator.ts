export const keyGenerator = () =>
  btoa(Math.random().toString()).substring(0, 12);
