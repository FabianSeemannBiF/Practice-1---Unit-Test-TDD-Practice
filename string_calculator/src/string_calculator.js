// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if(string_numbers === "") {
        return 0;
    }

    const parts = string_numbers.split(',');
    let sum = 0;

    for(let i = 0; i < parts.length; i++) {
        sum += parseInt(parts[i]);
    }
    return sum;
};
