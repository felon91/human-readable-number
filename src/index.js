module.exports = function toReadable (number) {
    const obj = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    };

    let restObj = {
        2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety', 1: 'hundred'
    };

    let result = '';
    let arrNumbers = String(number).split('');
    if (number < 20) {
        return result += obj[number];
    }

    arrNumbers.forEach((item, idx, arr) => {
        if (arr.length === 2 && idx == 0 && arr[1] == 0) {
            return result += restObj[item];
        } else if (arr.length === 2 && idx == 0 && arr[1] != 0) {
            return result += restObj[item] + ' ';
        } else if (arr.length === 2 && idx == 1 && arr[1] != 0) {
            return result += obj[item];
        } else if (arr.length === 3 && idx == 0) {
            return result += `${obj[item]} ${restObj[1]}`;
        } else if (arr.length === 3 && idx == 1 && arr[1] > 1) {
            return result += ` ${restObj[item]}`;
        } else if (arr.length === 3 && idx == 1 && arr[1] == 1) {
            return result += ` ${obj[arr[idx] + arr[idx + 1]]}`;
        } else if (arr.length === 3 && idx == 2 && arr[1] == 0 && arr[2] >= 1) {
            return result += ` ${obj[item]}`;
        } else if (arr.length === 3 && idx == 2 && arr[1] > 1 && arr[2] >= 1) {
            return result += ` ${obj[item]}`;
        }
        return false;
    });

    return result;
}
