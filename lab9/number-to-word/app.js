const convertNumber = document.forms['convertNumberToWord'].addEventListener(
  'submit',
  convert
);

const output = document.getElementById('output');

function convert(e) {
  // prevent reload each time we sumbit the form
  e.preventDefault();

  let inputNumber = document.getElementById('input-number').value;
  if (inputNumber === '')
    return (output.innerHTML = 'Please input any number :) &#9195;');

  if (isNaN(inputNumber) === true)
    return (output.innerHTML =
      '&#9940;Please input numeric characters only! (Allowed input: 0-9)&#9940;');

  let pattern = inputNumber[0] === '-' ? '(Minus) ' : '';
  output.innerHTML = capitalizeFirstLetter(pattern + numToWords(inputNumber));
}

//======================================================================
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

//=======================================================================
const arr = (x) => Array.from(x);
const num = (x) => Number(x) || 0;
const str = (x) => String(x);
const isEmpty = (xs) => xs.length === 0;
const take = (n) => (xs) => xs.slice(0, n);
const drop = (n) => (xs) => xs.slice(n);
const reverse = (xs) => xs.slice(0).reverse();
const comp = (f) => (g) => (x) => f(g(x));
const not = (x) => !x;
const chunk = (n) => (xs) =>
  isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];

let test = '6455453';

console.log(test);

// numToWords :: (Number a, String a) => a -> String
let numToWords = (n) => {
  let a = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  let b = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let g = [
    '',
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
  ];

  // this part is really nasty still
  // it might edit this again later to show how Monoids could fix this up
  let makeGroup = ([ones, tens, huns]) => {
    return [
      num(huns) === 0 ? '' : a[huns] + ' hundred ',
      num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + '-') || '',
      a[tens + ones] || a[ones],
    ].join('');
  };

  let thousand = (group, i) => (group === '' ? group : `${group} ${g[i]}`);

  if (typeof n === 'number') return numToWords(String(n));
  else if (0 == n || n === '0') return 'zero';
  else
    return comp(chunk(3))(reverse)(arr(n))
      .map(makeGroup)
      .map(thousand)
      .filter(comp(not)(isEmpty))
      .reverse()
      .join(' ');
};
