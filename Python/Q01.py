#//usr/bin/env python3

# ########################################
# Coding Interview Question #01
# Cool function feature in Python:
# Function as a return value
# ########################################

def animal(name: str):
    print(name)
    return animal

animal('Dog')('Cat')('Horse')('Cow') #Output: Dog Cat Horse Cow
