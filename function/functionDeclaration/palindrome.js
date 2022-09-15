function palindrome(str) {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, "");
  const reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}
console.log(palindrome("eye"));
console.log(palindrome("not palindrome"));
