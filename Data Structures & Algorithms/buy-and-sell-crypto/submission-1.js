class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let MinPrice = 999
        let MaxProfit = 0
        prices.forEach((price)=>{
            if(price<MinPrice) 
                MinPrice = price;
            let profit = price - MinPrice;
            if(profit>MaxProfit) 
                MaxProfit = profit
        })
        return MaxProfit
    }
}
