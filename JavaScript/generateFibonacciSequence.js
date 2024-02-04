/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    var output = [0,1];

    yield output [0];
    yield output [1];
    for (var i=2; i<=50 ; i++ ) {
      output.push(output[i-1]+output[i-2])
      yield output[i]
      }
      return output;

};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */