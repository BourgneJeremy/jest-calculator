export default class StringCalculator {
    constructor() {}

    add(numbers) {
        if (typeof numbers === 'undefined' || numbers.length == 0)
            return 0;

        if (typeof numbers === 'string') {
            // process the values
            let splitedNumbers = numbers.split(",");
            let sum = 0;

            splitedNumbers.forEach((item) => {
                if (item.includes(" ")) throw new Error;
                item = this.removeDelimiters(item);

                let number = parseInt(item);
                console.log(number);
                if (number < 0) 
                {
                    throw new Error(`Negatives not allowed. ${item}`);
                }

                sum += parseInt(item);
            })

            console.log(sum);
            return sum;
        }

        return numbers;
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