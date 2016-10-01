var common = require('../main/calculator.js');
var should = require('chai').should();

describe('common', function() {
  it('should calculate the max given a weight, rep tuple', function() {
    var weight = 300;
    var reps = 5;

    var max = common.max(weight, reps);

    max.should.equal(349.95);
  });

  it('shoudl round a max to the nearest 5', function() {
    common.roundTo(399.9, 5).should.equal(400);
    common.roundTo(403, 5).should.equal(405);
    common.roundTo(405, 5).should.equal(405);
    common.roundTo(405, 10).should.equal(410);
  });

  it('should calculate how many plates should be on the bar', function() {
    var plates = common.plates(300);

    plates.list.should.eql([2,1,1,0,1]);

    common.plates(315).list.should.eql([3,0,0,0,0]);

  });
});
