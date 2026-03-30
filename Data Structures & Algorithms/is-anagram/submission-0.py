class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if not s or not t:
            return False
        first = list(s)
        first.sort()
        second = list(t)
        second.sort()
        return  "".join(first) == "".join(second)