(function(node){
    var core = require('./core/core.js');
    var leftSide = require('./leftSide/index.js');

    core().show();
    leftSide().on();
})(document.body)
