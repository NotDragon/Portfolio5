import math
from PIL import Image
import numpy as np
from numba import jit


direction = [0,1]
position = [4999,4999]

c = 0

countdown_size = 1
countdown = 1
count = -1

@jit("int64(int64)",nopython=True)
def is_prime(num):
    for i in range(2, math.floor(math.sqrt(num)+1)):
        if(num%i == 0):
            return 0
    return 1

new_im = Image.new("RGB", (10000,10000))
new_im_array = np.array(new_im)

@jit("int8[:,:,:](int64)",nopython=True)
def make_primearray(size):
    positionx = math.floor(size/2)
    positiony = math.floor(size/2)
    direction = [0,1]
    countd = 1
    cnt = -1
    cc = 0
    countdowns = 1
    imarray = np.zeros((size,size,3), np.int8)
    for i in range(size*2-1):
        while(countd > 0):
            positionx += direction[0]
            positiony += direction[1]
            if(is_prime(cc)==1):
                col = [255,255,255]
                imarray[positionx][positiony] = col
            cc+=1
            countd -= 1
        cnt += 1
        if(direction==[0,1]):
            direction = [1,0]
        elif(direction==[1,0]):
            direction = [0,-1]
        elif(direction==[0,-1]):
            direction = [-1,0]
        elif(direction==[-1,0]):
            direction = [0,1]
        if(cnt == 2):
            cnt = 0
            countdowns += 1
        countd = countdowns
    return imarray


SIZE = 30000

new_im_array = make_primearray(SIZE)
print(c)

im = Image.fromarray(new_im_array, "RGB")
im.save("primes.png")
