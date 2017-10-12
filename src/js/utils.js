const utils = {
    account2format: function(account, separator) {
        // 40817 840 9 0023 1234567
        var range = [5,3,1,4,7];
        var acc = Array.prototype.slice.call((String(account)).replace(/ /g, ''));
    
        // if (acc.length === 5) throw 'incorrect account';
        var result = [];
        range.each(function (val) {
            result.push(acc.splice(0, val).join(''));
        });
        return result.join(separator || '&thinsp;&thinsp;');
    }
}

export default utils