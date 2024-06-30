A = [4, 7; 2, 3];
tol = 1e-6;
max_iter = 1000;

[lambda, v] = method_of_powers(A, tol, max_iter);

disp('dominant eigenvalue:');
disp(lambda);

disp('dominant eigenvector:');
disp(v);
