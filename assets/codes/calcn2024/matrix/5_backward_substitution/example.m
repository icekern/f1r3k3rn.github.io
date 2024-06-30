U = [2, -1,  0;
     0,  3,  1;
     0,  0,  4];

b = [1; 8; 4];

x = backwardSubstitution(U, b);

disp('Solution vector x:');
disp(x);

disp('Verification: U * x should be equal to b');
disp(U * x);
disp(b);