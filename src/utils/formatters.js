// Currency symbols and formatting
export const currencySymbols = {
  GHS: 'GH₵',
  USD: '$',
  EUR: '€',
  GBP: '£',
};

export const formatCurrency = (amount, currency = 'GHS') => {
  const symbol = currencySymbols[currency] || 'GH₵';
  const formattedNumber = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return `${symbol}${formattedNumber}`;
};

// Calculate Days until upcoming intakes
export const getIntakeCountdowns = () => {
  const septemberDate = new Date('2026-09-01T00:00:00');
  const januaryDate = new Date('2027-01-04T00:00:00');
  const now = new Date();

  const diffSept = Math.max(0, Math.ceil((septemberDate - now) / (1000 * 60 * 60 * 24)));
  const diffJan = Math.max(0, Math.ceil((januaryDate - now) / (1000 * 60 * 60 * 24)));

  return {
    septemberDays: diffSept,
    januaryDays: diffJan,
    nextTerm: diffSept > 0 ? 'September 2026' : 'January 2027',
    nextTermDeadline: diffSept > 0 ? 'Sept 1, 2026' : 'Jan 4, 2027',
    nextTermClasses: diffSept > 0 ? 'Sept 7, 2026' : 'Jan 11, 2027'
  };
};
