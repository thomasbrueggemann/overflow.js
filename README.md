overflow.js
===========

###Installation

You won't be able to yet, due to its pre-release-development phase, but in the future, you can install overflow.js via:

```javascript
npm install overflow
```

###What this is

Let's make error handling a bit smarter. overflow.js displays the as-correct-marked answer of the first stackoverflow question it can find, concerning your unhandled ecxeption. Let's be honest, what would we be without stackoverflow.com

This can help you in a lot of cases to trackdown your bugs more easily.

###What this is not

Seriously, this is not going to change the way you debug applications in general, but it might give you a quick hint where to look at, in case you stumble upon a nifty exception.

###Throttles

overflow.js obviously underlays the following throttles http://api.stackexchange.com/docs/throttle
