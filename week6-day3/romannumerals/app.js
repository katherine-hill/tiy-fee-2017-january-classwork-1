(function() {
    "use strict";

    function checkPalindrome(word) {
        if (typeof word === 'number') {
            word = word.toString();
        }
        return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
    }

    function stringReplace(string, target, replace) {
        return string.replace(target, replace);
    }

    module.exports = {
        checkPalindrome: checkPalindrome,
        stringReplace: stringReplace
    };
})();
