/* Saving instance in static property */

function Universe() {
  // Check for an active instance
  if (Universe._INSTANCE instanceof Universe) {
    return Universe._INSTANCE;
  }

  /* Class body start */
  this.startTime = 0;
  this.bang = "Big";
  /* Class body end */

  // Allocation
  Universe._INSTANCE = this;

  return this;
}

const uni = new Universe();
const uni2 = new Universe();

console.log(uni === uni2); // true
// Single instance (singleton) for all class initializations
