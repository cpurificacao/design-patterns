/* Saving instance in private property via closure */

function Universe() {
  // Allocation
  const _INSTANCE = this;

  /* Class body start */
  this.startTime = 0;
  this.bang = "Big";
  /* Class body end */

  // Closure
  Universe = function () {
    return _INSTANCE;
  };
}

const uni = new Universe();
const uni2 = new Universe();

console.log(uni === uni2); // true
// Single instance (singleton) for all class initializations
