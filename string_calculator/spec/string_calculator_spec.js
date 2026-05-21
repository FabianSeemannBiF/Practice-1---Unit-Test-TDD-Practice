describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return 1 when input is "1"', function() {
		expect(calculator.add('1')).toEqual(1);
	})

	it('should return 3 when input is "1, 2"', function() {
		expect(calculator.add('1, 2')).toEqual(3);
	})

	it('should return 28 when input is "1, 27"', function() {
		expect(calculator.add('1, 27')).toEqual(28);
	})
});
