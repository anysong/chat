(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Core(){
    var that = {};
    that.show = function(){
        alert('core1');
    };
    return that;
};
module.exports = Core;

},{}],2:[function(require,module,exports){
(function(node){
    var core = require('./core/core.js');
    var left = require('./left/index.js');
    var right = require('./right/index.js');
    var textarea = require('./textarea/index.js');

    console.log(core);
    console.log(left);
    console.log(right);
    console.log(textarea);
})(document.body)

},{"./core/core.js":1,"./left/index.js":3,"./right/index.js":4,"./textarea/index.js":5}],3:[function(require,module,exports){
function Left(){
    var that = {};
    return that;
};

module.exports = Left;

},{}],4:[function(require,module,exports){
function Right(){
    var that = {};
    return that;
};

module.exports = Right;

},{}],5:[function(require,module,exports){
function Textarea(){
    var that = {};
    return that;
};

module.exports = Textarea;

},{}]},{},[2])