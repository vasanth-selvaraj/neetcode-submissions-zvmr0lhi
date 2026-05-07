class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let res = []
        for(let i=0;i<arr.length;i++){
            let max = -1;
            for(let j=i+1;j<arr.length;j++){
                if(arr[j]>max){
                    max = arr[j]
                }
            }
            res[i] = max
        }
        console.log(res)
        res[arr.length-1] = -1
        return res
    }
}
