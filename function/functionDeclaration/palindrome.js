// Saber si un string es palindrome

function palindrome(string) {
  const re = /[\W_]/g;
  const lowRegStr = string.toLowerCase().replace(re, "");
  const reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}
console.log(palindrome("eye"));
console.log(palindrome("not palindrome"));
