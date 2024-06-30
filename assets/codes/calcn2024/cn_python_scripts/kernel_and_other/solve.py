from sage.all_cmdline import *
from scheduu import schedule
from pwn import xor


def set_bit(b, n, v):
    byte = b[n // 8]
    byte &= ~(v << (7 - (n % 8)))
    byte |= v << (7 - (n % 8))
    b[n // 8] = byte
    return b

system = [[0 for i in range(128)] for i in range(128)]
pt = b'yellow submarine'
ct = b'\x83h\xdbWi\'\xc4\xf5\x02,_Z\x95p\xab\xc3'

keystream = xor(pt,ct)

for i in range(0,128):
    for k in schedule[i]:
        system[i][k]+=1
        system[i][k]%=2

b = []
for i in keystream:
    for j in range(8):
        b.append((i>>(7-j))&1)

A = matrix(GF(2),system)
b = vector(GF(2),b)
sol= A.solve_right(b)
key = bytearray(b"\x00" * 16)
ker = A.right_kernel()

for i in range(128):
    set_bit(key, i, int(sol[i]))
print(key)

_sol=sol+ker.basis()[0]
key_ = bytearray(b"\x00" * 16)
for i in range(128):
    set_bit(key_, i, int(_sol[i]))
print(key_)

    
    

