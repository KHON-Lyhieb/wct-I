let buttons = document.getElementsByClassName('btn');
let screen = document.getElementById('screen');
let str = '';

Array.from(buttons).forEach((element) => {
  element.addEventListener('click', (e) => {
    //console.log(e.target.innerHTML);

    let value = e.target.innerHTML;

    // calculate
    if (value === '=') {
      if (str !== '') {
        str = str.replace(/–/g, '-');
        str = str.replace(/÷/g, '/');
        str = str.replace(/×/g, '*');
        str = eval(str);
      }

      screen.value = str;
    } else if (value === 'C') {
      str = '';
      screen.value = str;
    } else {
      if (value === '0' && 0 == str) return;
      if (str === '' && value === '.') value = '0.';
      if (value === '.' && str.includes('.')) value = '';
      if (str === '' && (value === '+' || value === '÷' || value === '×'))
        value = '';

      if (value === '+' || value === '–' || value === '÷' || value === '×') {
        let lastIndex = str.length - 1;
        let lastChar = str[lastIndex];
        console.log(lastChar);
        if (
          lastChar === '+' ||
          lastChar === '–' ||
          lastChar === '÷' ||
          lastChar === '×'
        )
          str.slice(0, -1);
      }
      //=======
      str += value;
      screen.value = str;
    }
  });
});
