from Crypto.Util.number import bytes_to_long as b2l
def set_bit(b, n, v):
    byte = b[n // 8]
    byte &= ~(v << (7 - (n % 8)))
    byte |= v << (7 - (n % 8))
    b[n // 8] = byte
    return b

b=bytearray([0,0,0])
b=set_bit(b,1,0)
print(bin(b2l(set_bit(b,0,1)))[2:][:8])
