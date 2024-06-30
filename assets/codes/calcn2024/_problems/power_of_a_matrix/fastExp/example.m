% prendo una matrice in jordan form perchè è facile da visionare l
% esponenziazione

A = eye(3);
A(1,2) = 1;

A = A*2;

disp(fast_exp(A,3));
