a = [2, 3, 0, 0, 1, 2, 0, 11]

# Two-pointer method
non_zero_pos = 0  # Points to where the next non-zero should go

for i in range(len(a)):
    if a[i] != 0:
        a[non_zero_pos], a[i] = a[i], a[non_zero_pos]
        print(f"i = {i} and nzp = {non_zero_pos}")
        non_zero_pos += 1
    else:
        print(f"i value when 0 is found = {i}")

print(a)
