import random
list1 = [1, 2, 3, 4, 5, 6, 7]
list2 = [None] * 7
start = random.randint(0, len(list1)-1)
end = random.randint(start+1, len(list1))
print(start, end)
print(list1[start:end])
