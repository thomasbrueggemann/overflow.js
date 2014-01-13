require('../overflow');

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');