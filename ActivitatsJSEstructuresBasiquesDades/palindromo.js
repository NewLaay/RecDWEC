function palindrome(str) {
	//// Paso 1. Pon en minuscula la cadena y usa el RexEXP para remover los caracteres no deseados en el
  var re = /[\W_]/g;  // or var re = /[^A-Za-z0-9]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
   // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
  // var lowRegStr = "amanaplanacanalpanama";
  
  
  var reverseStr = lowRegStr.split('').reverse().join(''); 
   // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
  // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
  // And, var reverseStr = "amanaplanacanalpanama";
  
  
    //  Paso 3. Revisa si reverseStr es estrictamente igual a lorRegStr y regresa un BooLean
if (reverseStr === lowRegStr){
	return true;
}else{
	return false;
}
}
console.log(palindrome("A man, a plan, a canal. Panama"));