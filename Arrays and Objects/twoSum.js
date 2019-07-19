/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice. */

/* Example
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// Solution-1

let twoSum = function(nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9)); // returns [0;1]

var arr = Array.from({ length: 3000 }, () => Math.floor(Math.random() * 3000));

console.time("Solution-1");
twoSum(arr, arr[668] + arr[1669]);
console.timeEnd("Solution-1");

// Solution-2

let twoSumSecond = function(nums, target) {
  const result = [];
  nums.forEach(function(num, i) {
    let diff = target - num;
    let x = nums.indexOf(diff);
    if (x > -1 && x !== i) {
      result.push(i);
      result.push(x);
    }
  });
  return result;
};

console.log(twoSumSecond([2, 7, 11, 15], 9)); // returns [0;1;1;0]

var arr = Array.from({ length: 3000 }, () => Math.floor(Math.random() * 3000));

console.time("Solution-2");
twoSum(arr, arr[668] + arr[1669]);
console.timeEnd("Solution-2");

// Solution-3

function twoSumThird(nums, target) {
  let resultObj = {};

  for (let i = 0; i < nums.length; i++) {
    let thisNum = nums[i];
    resultObj[thisNum] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (resultObj.hasOwnProperty(diff) && resultObj[diff] !== i) {
      return [i, resultObj[diff]];
    }
  }
}

console.log(twoSumThird([2, 7, 11, 15], 9)); // returns [0;1]

var arr = Array.from({ length: 3000 }, () => Math.floor(Math.random() * 3000));

console.time("Solution-3");
twoSum(arr, arr[668] + arr[1669]);
console.timeEnd("Solution-3");

// Solution-4

function twoSumFourth(nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(target - nums[i])) {
      return [numsMap.get(target - nums[i]), i];
      // get() returns a specified element associated with the specified key from the Map object.
    } else {
      numsMap.set(nums[i], i);
      //  set() adds or updates an element with a specified key and value to a Map object.
    }
  }
}

console.log(twoSumFourth([2, 7, 11, 15], 9)); // returns [0;1]

var arr = Array.from({ length: 3000 }, () => Math.floor(Math.random() * 3000));

console.time("Solution-4");
twoSum(arr, arr[668] + arr[1669]);
console.timeEnd("Solution-4");
