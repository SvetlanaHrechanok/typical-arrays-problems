
exports.min = function min (array) {
  if(array === undefined || array.length ==0 ) return 0;
  else {
      array.sort((preview, next) => {
          if(preview == next) return 0;
          if(preview > next) return 1;
          if(preview < next) return -1;
      });
      return array[0];
  };
}

exports.max = function max (array) {
    if(array === undefined || array.length ==0 ) return 0;
    else {
        array.sort((preview, next) => {
            if(preview == next) return 0;
            if(preview > next) return -1;
            if(preview < next) return 1;
        });
        return array[0];
    };
}

exports.avg = function avg (array) {
    if(array === undefined || array.length ==0 ) return 0;
    else return array.reduce((summ, item) => summ + item, 0) / array.length;
}
