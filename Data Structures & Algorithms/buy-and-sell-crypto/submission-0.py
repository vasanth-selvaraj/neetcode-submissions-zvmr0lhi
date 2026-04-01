class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = 999
        maxProfit = 0
        for price in prices:
            if(price<minPrice):
                minPrice=price
            profit = price-minPrice

            if(profit>maxProfit):
                maxProfit = profit
        return maxProfit