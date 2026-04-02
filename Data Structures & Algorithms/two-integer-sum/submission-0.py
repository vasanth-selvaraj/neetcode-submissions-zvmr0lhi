class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        elements = {}
        for index, num in enumerate(nums):
            diff = target-num
            if diff in elements:
                return [elements[diff],index]
            elements[num] = index