class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        map = {}
        map2 = {}
        for c in s:
            if c in map:
                map[c]+=1
            else:
                map[c] = 1
            
        for c in t:
            if c in map2:
                map2[c]+=1
            else:
                map2[c] = 1
        if map == map2:
            return True
        else:
            return False