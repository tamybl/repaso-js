function salaryWeek(hours, paymentPerHour) {
	return hours * paymentPerHour;
}

/* Calcular la cantidad de digitos de un numero.
Por ejemplo 1985, debera retornar 4 */
function numberOfDigits(number) {
	var count = 0;
	var digits = number.toString();
	for (var i = 0; i < digits.length(); i++) {
		count++;
	}
	return count;
}

function palindrome(word) {
	var count = word.length-1;
	var wordReverse = "";
	for (var i = 0; i < word.length; i++) {
		wordReverse += word.charAt(count--);
	}
	if (word == wordReverse) {
		return true;
	}
	else 
		return false;
}

function palindromeVersionClass(word) {
	var long = word.length;
	for (var i = 0; i < long; i++) {
		if (word[i] !== word[long-1-i]) {
			return false;
		}
	}
	return true;
}