function isPalindrome(str) {

    str = str.toString();

    for (let i = 0, len = str.length; i < len; i++) {
        console.log(str.charAt(i));
        console.log(str.charAt(str.length - 1 - i));
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)){
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;