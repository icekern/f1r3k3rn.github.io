L = [1, 0, 0;
     2, 3, 0;
     4, 5, 6];

b = [3; 6; 24];

x = forwardSubstitution(L, b);

disp('Solution vector x:');
disp(x);

disp('Verification: L * x should be equal to b');
disp(L * x);
disp(b);