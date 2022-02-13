export const getTaxRate = async () => {
  const res = await fetch(`https://bombay-lcd.terra.dev/treasury/tax_rate`);
  const data = await res.json();
  return data.result;
};
