module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join("").replace(/,/g, "");
  let newArr = [];
  for (let bracket of str) {
    let index = brackets.indexOf(bracket);

    if (index % 2 === 0) {
      if (
        bracket === brackets[index + 1] &&
        newArr[newArr.length - 1] === index
      ) {
        newArr.pop();
      } else if (
        bracket === brackets[index + 1] &&
        newArr[newArr.length - 1] !== index
      ) {
        newArr.push(index);
      } else {
        newArr.push(index);
      }
    } else {
      if (newArr.pop() !== index - 1) {
        return false;
      }
    }
  }
  return newArr.length === 0;
};
