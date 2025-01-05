/*
    Leet Code
    Question Link - https://leetcode.com/problems/two-sum?envType=problem-list-v2&envId=array
*/

// Soln
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            let sum = nums[i]+nums[j];
            if(sum===target){
                return [i,j]
            }
        }
    }
};
