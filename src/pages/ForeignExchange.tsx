import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

const currencies = [
  { code: 'USD', nameKey: 'foreignExchange.usd', buy: '1,285.50', sell: '1,295.00' },
  { code: 'EUR', nameKey: 'foreignExchange.eur', buy: '1,395.75', sell: '1,405.25' },
  { code: 'GBP', nameKey: 'foreignExchange.gbp', buy: '1,625.30', sell: '1,635.80' },
  { code: 'KES', nameKey: 'foreignExchange.kes', buy: '9.85', sell: '10.15' },
  { code: 'UGX', nameKey: 'foreignExchange.ugx', buy: '0.34', sell: '0.36' },
  { code: 'TZS', nameKey: 'foreignExchange.tzs', buy: '0.51', sell: '0.53' },
];

const currencyCodes = currencies.map(c => c.code);

export default function ForeignExchange() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState<string | null>(null);

  const handleConvert = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) return;
    const fromRate = currencies.find(c => c.code === fromCurrency)?.buy;
    const toRate = currencies.find(c => c.code === toCurrency)?.sell;
    if (!fromRate || !toRate) return;
    const fromVal = parseFloat(fromRate.replace(',', ''));
    const toVal = parseFloat(toRate.replace(',', ''));
    if (isNaN(fromVal) || isNaN(toVal)) return;
    const converted = (numAmount * fromVal) / toVal;
    setResult(converted.toFixed(2));

  };

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1600&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('foreignExchange.title')}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t('foreignExchange.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">{t('foreignExchange.converterTitle')}</h2>
            <div className="bg-light-gray rounded-lg p-6 lg:p-8">
              <div className="grid md:grid-cols-5 gap-4 items-end">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-navy mb-1">{t('foreignExchange.amount')}</label>
                  <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">{t('foreignExchange.from')}</label>
                  <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg bg-white">
                    {currencyCodes.map(code => <option key={code} value={code}>{code}</option>)}
                  </select>
                </div>
                <div className="flex justify-center">
                  <button onClick={() => { const temp = fromCurrency; setFromCurrency(toCurrency); setToCurrency(temp); }} className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors cursor-pointer">
                    <ArrowsRightLeftIcon className="h-5 w-5" />
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">{t('foreignExchange.to')}</label>
                  <select value={toCurrency} onChange={e => setToCurrency(e.target.value)} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg bg-white">
                    {currencyCodes.map(code => <option key={code} value={code}>{code}</option>)}
                  </select>
                </div>
              </div>
              <button onClick={handleConvert} className="mt-6 w-full px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors cursor-pointer">
                {t('foreignExchange.convert')}
              </button>
              {result && (
                <div className="mt-6 bg-white rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">{amount} {fromCurrency} =</p>
                  <p className="text-2xl font-bold text-navy">{result} {toCurrency}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <GlobeAltIcon className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-navy">{t('foreignExchange.ratesTitle')}</h2>
          </div>
          <div className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold">{t('foreignExchange.currency')}</th>
                  <th className="px-6 py-4 text-sm font-semibold text-right">{t('foreignExchange.buyRate')}</th>
                  <th className="px-6 py-4 text-sm font-semibold text-right">{t('foreignExchange.sellRate')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currencies.map((currency) => (
                  <tr key={currency.code} className="hover:bg-light-gray/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-navy">{currency.code}</span>
                        <span className="text-sm text-gray-500">{t(currency.nameKey)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-primary">{currency.buy}</td>
                    <td className="px-6 py-4 text-right font-medium text-red-500">{currency.sell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">{t('foreignExchange.note')}</p>
        </div>
      </section>

      <section className="py-16 bg-accent text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">{t('foreignExchange.ctaTitle')}</h2>
          <p className="text-white/80 mb-6">{t('foreignExchange.ctaDesc')}</p>
          <button className="px-8 py-3 bg-white text-accent font-medium text-lg rounded-lg hover:bg-white/90 transition-colors cursor-pointer">
            {t('foreignExchange.ctaButton')}
          </button>
        </div>
      </section>
    </div>
  );
}
