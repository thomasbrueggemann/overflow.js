require('../overflow');

// Intentionally cause an exception, but don't catch it.
throw new Error("connect ECONNREFUSED");
console.log('This will not run.');