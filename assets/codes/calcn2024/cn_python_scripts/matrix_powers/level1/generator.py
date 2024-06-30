from sage.all_cmdline import *
from Crypto.Util.number import long_to_bytes,bytes_to_long

A = matrix(QQ, 2, [3, 1, 0, 2])

print(A)
print(A.eigenvectors_right())


P = matrix(QQ, 2, [1, 1, 0, -1])
D = matrix(QQ, 2, [3, 0, 0, 2])

print(D)

print(D ** 50)

D = D**50
print(P * D * P ** -1)

print(A ** 50)

assert (P * D * P ** -1 == A ** 50)



