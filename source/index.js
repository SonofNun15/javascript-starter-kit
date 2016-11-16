import './index.css'
import numeral from 'numeral'

const currency = numeral(1000).format('$0,0.00')
console.log(`Currency: ${currency}`) // eslint-disable-line no-console
