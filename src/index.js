module.exports = function check(str, bracketsConfig) {
  var stack = [],
      brackets = {};

  for (var j = 0; j < bracketsConfig.length; j++) {
    brackets[bracketsConfig[j][0]] = bracketsConfig[j][1];
  }

  for (var i = 0; i < str.length; i++) {
    if (i == 0) {
      stack.push(str[i]);
    }
    else if (str[i] === brackets[stack[stack.length - 1]]) {
      stack.pop();
    }
    else {
      stack.push(str[i]);
    }
  }

  return !stack.length;
}
