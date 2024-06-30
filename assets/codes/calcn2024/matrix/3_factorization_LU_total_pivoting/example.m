A = [1 , 2 , 3 , 4 ;
     5 , 6 , 7 , 8 ;
     9 , 10, 11, 13;]

[L, U, P, Q] = LUfactorization_total_pivoting(A);


disp('Matrix A:');
disp(A);
disp('Row permutation matrix P:');
disp(P);
disp('Column permutation matrix Q:');
disp(Q);
disp('Lower triangular matrix L:');
disp(L);
disp('Upper triangular matrix U:');
disp(U);


disp('Verification: P * A * Q should be equal to L * U');
disp(P * A * Q);
disp(L * U);