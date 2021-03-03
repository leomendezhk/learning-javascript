// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//CHALLENGE #1
const data1 = [17, 21, 24];
const data2 = [12, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}c in ${i + 1} days... `;
  }

  console.log('...' + str);
};

printForecast(data1);
