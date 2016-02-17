var common = {};

common.config = {
  bar: 45,
  plates: [45,25,10,5,2.5],
  weekMap: {
    '3x5': [0.65,0.75,0.85],
    '3x3': [0.7,0.8,0.9],
    '531': [0.75,0.85,0.95],
    'DL': [0.4,0.5,0.6],
    '1:1': [1]
  }
};

common.max = function(weight, reps) {
  var max = (weight*reps*0.0333 + weight);
  return max;
};

common.roundTo = function(value, step) {
  return Math.round(value / step) * step;
};

common.repgoal = function(max, weight) {
  weight = parseInt(weight);
  max = parseInt(max);
  //increment = parseInt(increment);

  var goal = Math.round(37-36*weight/(max+5));

  return goal;
};

common.repsToMax = function(max, weight) {
  var reps = (max - weight)/(weight*0.0333);
  return Math.ceil(reps);
};

common.plates = function(weight) {
  var data = {};

  var bar = common.config.bar;

  data.list = [0,0,0,0,0];

  var plates = common.config.plates;

  weight = weight - bar;

  for(var i=0;i<plates.length;i++) {

    data.list[i] = Math.floor((weight / (plates[i])) / 2);

    if(data.list[i] > 0) {

      weight = (weight - (data.list[i]*plates[i]*2));

    }
  }

  data.map = {};

  common.config.plates.forEach(function(weight, ii) {
    data.map[weight] = data.list[ii];
  });


  return data;
};

module.exports = common;
