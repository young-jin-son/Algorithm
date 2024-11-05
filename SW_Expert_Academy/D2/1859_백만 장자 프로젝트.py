T = int(input())

inputs = []
for i in range(T):
    N = int(input())
    nums = list(map(int, input().split()))
    inputs.append([N, nums])

for i in range(T):
    nums = inputs[i][1]
    maxNum = max(nums)
    maxIdx = nums.index(maxNum)
    answer = 0

    while maxIdx != 0:
        for j in range(maxIdx + 1):
            if nums[j] > 0:
                answer += maxNum - nums[j]
                nums[j] = 0
        maxNum = max(nums)
        maxIdx = nums.index(maxNum)

    print(f"#{i + 1} {answer}")
