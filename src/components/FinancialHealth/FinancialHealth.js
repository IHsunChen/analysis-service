import React from 'react'
import Header from '../Header/Header'
import financialHealth from '../../images/financialHealth.png'

function FinancialHealth() {
  return (
    <div className='w-3/5 bg-white mx-auto mt-5 p-5'>
      <Header
        text="7 | Financial Health"
        starCount={3}
      />
      <div className='p-3'>
        <h1 className='font-black'>What is the current state of the company's financial situation?</h1>
        <p className='mt-3 tracking-wide leading-7'>
          We measure the health of a company based on how profitable they are and their ability to cover both their short-term and
          long-term debts. The key indicators that we use are the Operating Margin, Quick Ratio, and Debt-to-Equity ratio relative
          to the companies peers.
        </p>

        <p className='mt-7 tracking-wide leading-7'>
          The operating margin measures how much profit a company makes after it spends money on wages, materials or other
          administrative expenses but before interest and taxes. It is a good representation of how efficiently a company is able to
          generate profit from its core operations.
        </p>

        <p className='mt-7 tracking-wide leading-7'>
          The quick ratio measures how much of a company's debt, that is due in less than 1 year, can be covered using its cash
          equivalents, marketable securities, and money that is currently owed to them (accounts receivables).
        </p>
 
        <p className='mt-7 tracking-wide leading-7'>
          A company with a quick ratio of less than 1.00 does not, in many cases, have the capital on hand to meet its short-term
          obligations if they were all due at once, while a quick ratio greater than one indicates the company has the financial
          resources to remain solvent in the short term.
        </p>

        <img className="mx-auto mt-5" src={financialHealth} alt="" />

        <p className='mt-7 tracking-wide leading-7'>
          Debt-to-equity is calculated by dividing a company's total liabilities by its shareholders equity. It is a measure of the
          degree to which a company is financing its operations through debt versus wholly owned funds. Generally speaking, a
          D/E ratio below 1.0 would be seen as relatively safe, whereas ratios of 2.0 or higher would be considered risky.
          7 | Financial Health
          The chart above shows Tesla's operating margin, quick ratio, and debt-to-equity ratio compared to its peers. The black
          markers represent the peer averages for each ratio and the blue bars represent the Tesla's ratio values.
        </p>
      </div>

    </div>
  )
}

export default FinancialHealth
