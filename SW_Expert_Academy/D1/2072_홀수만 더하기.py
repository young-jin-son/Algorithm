T = int(input())
arr = []

for i in range(T):
    arr.append(list(map(int, input().split())))

for i, nums in enumerate(arr, start=1):
    odd_nums = list(filter(lambda x: x % 2 == 1, nums))
    print(f"#{i} {sum(odd_nums)}")
