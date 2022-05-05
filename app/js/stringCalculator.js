export default class StringCalculator {
    constructor() {}

    add(numbers) {
        if (typeof numbers === 'undefined' || numbers.length == 0)
            return 0;

        let sum = 0;
        let negativeNumbers = [];

        if (typeof numbers === 'string') {
            // process the values
            let splitedNumbers = numbers.split(",");
            splitedNumbers.forEach((item, index) => {
                if (item.includes(" ")) throw new Error;
                item = this.removeDelimiters(item);

                let number = parseInt(item);

                if (number < 0) {
                    if (splitedNumbers.length > 1) {
                        negativeNumbers.push(number);
                    } else {
                        throw new Error(`Negatives not allowed. ${item}`);
                    }
                }
                
                sum += parseInt(item);
            })
        }

        // NEGATIVE NUMBERS
        let negativeNumbersStr = negativeNumbers.join(',');
        
        if (negativeNumbers.length > 0)
            throw new Error(`Negatives not allowed. ${negativeNumbersStr}`);

        return sum;
    }

    removeDelimiters(item) {
        let delimiters = "\n,\r,\b";

        let delimiterItems = delimiters.split(",");

        delimiterItems.forEach((delimiter) => {
            if (item.includes(delimiter))
                item = item.replace(delimiter, '');
        });

        return item;
    }
}