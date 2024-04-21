import { formatCurrency } from '../scripts/utils/money.js';

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('works with Zero');
if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('Rounds up to nearest cent-1');
if (formatCurrency(2000.5) === '20.1') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('Rounds up to nearest cent-2');
if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
} else {
    console.log('failed');
}