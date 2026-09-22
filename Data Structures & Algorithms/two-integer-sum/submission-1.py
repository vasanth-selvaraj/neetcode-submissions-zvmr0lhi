class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for idx,num in enumerate(nums):
            n = target - num
            if n in map:
                return [map[n],idx]
            map[num] = idx
        return []