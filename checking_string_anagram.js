// Problem - 2  
// Checking string anagram 'hello' -> 'llhoe'

//Solution : 
// 1. To recognize whether it is anagram or not we need to check both string length is equal or not.
// 2. Both have the same Character but arrangement may be different.

/**
 * @param  {} string1
 * @param  {} string2
 */
function checkAnagram(string1, string2) {
    if(string1.length != string2.length) {
        return 'Not an anagram';
    }
    let counter = {};
    for(let s of string1) {
        counter[s] = (counter[s] || 0) + 1;
    }
    for(let s2 of string2) {
        if(!counter[s2]) {
            return 'Not exist';
        }
        counter[s2] -= 1;
    }
    return 'Yes it is anagram';
}

const show = checkAnagram('intelligent', 'geitllinten');
console.log(show);