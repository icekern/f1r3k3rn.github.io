function m = secant(f, x0, x1 , tol, cap)

i = 1;


dm = - f(x1)* (x1 - x0) / (f(x1) - f(x0));


disp('Iter x0 x1');
while abs(dm) > tol 

    if i > cap
        disp("iteration limit reached")
        m = "Error";
        return 
    end 
    
    m  = x1;
    x0 = x1;
    x1 = x1 + dm;
    fprintf("%i \t %f \t %f \n", i, x0 , x1)
    

    dm = - f(x1)* (x1 - x0) / (f(x1) - f(x0));
    i = i + 1;
end 

fprintf('\n x = %f produces f(x) = %f \n %i iterations\n', m, feval(f,m), i-1);
fprintf(' Approximation with tolerance = %f \n', tol); 

