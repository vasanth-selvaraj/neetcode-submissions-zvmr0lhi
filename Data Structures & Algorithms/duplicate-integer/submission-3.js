class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var h = new Set()
        for(let i=0;i<nums.length;i++){
            if(h.has(nums[i])){
                return true
            }
            h.add(nums[i])
        }
        return false
    }
}
