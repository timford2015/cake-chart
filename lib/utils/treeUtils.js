"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dft;

var _marked = [dft].map(regeneratorRuntime.mark);

require("babel-polyfill");

function dft(root, children) {
  var nodes, node;
  return regeneratorRuntime.wrap(function dft$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          nodes = [root];

        case 1:
          if (!(nodes.length > 0)) {
            _context.next = 8;
            break;
          }

          node = nodes.pop();

          children(node).forEach(function (x) {
            return nodes.push(x);
          });
          _context.next = 6;
          return node;

        case 6:
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}