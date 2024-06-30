A = [1 , 2, 3; 4, 5 ,6 ;7, 8, 11];
[L,U] = LUfactorization(A);

disp(L)
disp(U)

disp(L*U)