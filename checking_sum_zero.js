// Problem - 1  
// Checking sum zero [-5, -4, -3, -2, 0 , 2, 4, 6, 8]

//Solution : It means it says, you have to find the pair when we sum those pairs then result must be the zero.

//Method 1
let value = [-5, -4, -3, -2, 0 , 2, 4, 6, 8];
/**
 * @param  {} array
 */
function findSumPairZero(array) {
    for(let i of array) {
        for(let j= 1; j < array.length; j++) {
            if(i + array[j] === 0) {
                return [i, array[j]];
            }
        }
    }
}

const final = findSumPairZero(value);
console.log(final);

// Method 2
/**
 * @param  {} array
 */
function secondMethod(array) {
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        if(array[left] + array[right] === 0) {
            return [array[left], array[right]];
        } else if (array[left] + array[right] > 0) {
            right--;
        } else {
            left++;
        }
    }
}

const second = secondMethod(value);
console.log(second);