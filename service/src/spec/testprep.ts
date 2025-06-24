// TestPrep preps a few things for any unit tests
// There are better ways to do this I'm sure, but this is quick and simple and does what I want without fiddling with lots
// of configuration

process.env.NODE_ENV = 'test';

import '../../config.ts';

(function() {

})();