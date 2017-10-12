
const account2format = function(account, separator) {
    // 40817 840 9 0023 1234567
    var range = [5,3,1,4,7];
    var acc = Array.prototype.slice.call((String(account)).replace(/ /g, ''));

    // if (acc.length === 5) throw 'incorrect account';
    var result = [];
    range.forEach(function (val) {
        result.push(acc.splice(0, val).join(''));
    });
    return result.join(separator || '&thinsp;&thinsp;');
};

const handleClickGetRate = function(name, obj = {}) {
    // var testClientId = "2041232";
    var arr = [];
    // var obj = {
    //     client: testClientId,
    //     sym: 'USD/RUB',
    //     s: 10000,
    //     cur: 'RUB'
    // };
    arr[0] = name;
    arr[1] = obj;
    return arr;
}

const currencyHTML = function (amount, currency, sign) {
    var result;
    amount = num2format(amount);
    var currencyObj = findCurrency(currency);

    switch (sign) {
        case 1: result = '+';
            break;
        case 2: result = '-';
            break;
        default: result = '';
    }
    result += amount.intPart;
    if (currencyObj === false) {
        result += ' <small>';
        result += amount.fractPart;
        result += '</small>';
        result += currency;
    } else {
        result += ' <small class="' + currencyObj.alpha + '">';
        result += amount.fractPart;
        result += '</small>';
    }
    return result;
};

const num2format = function(num, separator) {
    var intPart;
    var fractPart;
    var sing;
    if (num !== '' && !isNaN(num)) {
        intPart = parseInt(num, 10);
        fractPart = Math.round((num - intPart) * 100);
        intPart = (toDigits(intPart)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, separator ? '$1' + separator : '$1&thinsp;&#8202;');
        if ((String(fractPart)).length < 2) {
            fractPart = '0' + fractPart;
        }
        if (num === 0)
            sing = '';
        else
            sing = num > 0 ? '+' : '';
    } else {
        intPart = '';
        fractPart = '';
        sing = '';
    }
    return {
        intPart: intPart,
        fractPart: fractPart,
        sing: sing
    };
};

const toDigits = function(num){
    var tem='', z, d, s= num.toString(),
    x= s.match(/^(\d+)\.(\d+)[eE]([-+]?)(\d+)$/);
    if(x){
        d= x[2];
        z= (x[3] === '-')? x[4]-1: x[4]-d.length;
        while(z--)tem+='0';
        if(x[3] === '-'){
            return '0.'+tem+x[1]+d;
        }
        return x[1]+d+tem;
    }
    return s;
};

const currencyTable = [];

currencyTable.push({
    name: 'Рубли',
    declension: 'рублях',
    number: 643,
    alpha: 'RUB',
    alt_alphas: ['RUR', 'РУБ'],
    symbol: '₽',
    unicode: 0x20BD
});

currencyTable.push({
    name: 'Доллары США',
    declension: 'долларах США',
    number: 840,
    alpha: 'USD',
    symbol: '$',
    unicode: 0x24
});

currencyTable.push({
    name: 'Евро',
    declension: 'евро',
    number: 978,
    alpha: 'EUR',
    symbol: '€',
    unicode: 0x20AC
});

currencyTable.push({
    name: 'Фунты стерлингов',
    declension: 'фунтах',
    number: 826,
    alpha: 'GBP',
    symbol: '£',
    unicode: 0x00A3
});

currencyTable.push({
    name: 'Китайские юани',
    declension: 'юанях',
    number: 156,
    alpha: 'CNY',
    symbol: '¥',
    unicode: 0x00A5
});

currencyTable.push({
    name: 'Швейцарские франки',
    declension: 'франках',
    number: 756,
    alpha: 'CHF',
    symbol: '₣',
    unicode: 0x20A3
});

const findCurrency = function(currency) {
    var index = currencyTable.each(function (value) {
        return value.number === currency || value.alpha === currency || (value.alt_alphas && value.alt_alphas.indexOf(currency) >= 0);
    });

    return index > -1 && currencyTable[index];
};

var utils = {
    account2format: account2format,
    handleClickGetRate: handleClickGetRate,
    currencyHTML: currencyHTML,
    num2format: num2format,
    toDigits: toDigits
}

export default utils