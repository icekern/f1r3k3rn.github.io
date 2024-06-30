A = [1 , 2 , 3 , 4 ;
     5 , 6 , 7 , 8 ;
     9 , 10, 11, 13;]

[L, U, P] = LUfactorization_partial_pivoting(A);

disp('Matrix A:');
disp(A);
disp('Permutation matrix P:');
disp(P);
disp('Lower triangular matrix L:');
disp(L);
disp('Upper triangular matrix U:');
disp(U);

disp('Verification: P * A should be equal to L * U');
disp(P * A);
disp(L * U);