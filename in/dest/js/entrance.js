(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Core(){
    var that = {};
    that.show = function(){
        alert(21);
        alert(41);
    };
    return that;
};
module.exports = Core;

},{}],2:[function(require,module,exports){
(function(node){
    var core = require('./core/core.js');
    var leftSide = require('./leftSide/index.js');

    core().show();
    leftSide().on();
})(document.body)

},{"./core/core.js":1,"./leftSide/index.js":3}],3:[function(require,module,exports){
function LeftSide(){
    var that = {};
    that.on = function(){
        alert(999);
    };
    return that;
};

module.exports = LeftSide;

},{}]},{},[2])