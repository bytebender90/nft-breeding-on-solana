import useWallet from './useWallet';
export const getMaxTax = async () => {
  const res = await fetch(`https://bombay-lcd.terra.dev/treasury/tax_cap/uusd`);
  const data = await res.json();
  return data.result;
};
