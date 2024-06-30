function m = newton(f, g, x0, tol, cap)

i = 1;
m = x0;

dm = - f(m) / g(m);


disp('Iter x0');
while abs(dm) > tol 

    if i > cap
        disp("iteration limit reached")
        m = "Error";
        return 
    end 

    if abs(g(m)) < 10^-10 
        disp("the value of g(x) is too small")
        m = "Error";
        return 
    end 

    m  = m + dm;
    fprintf("%i \t %f \n", i, m)
    

    dm = - f(m) / g(m);
    i = i + 1;
end 

fprintf('\n x = %f produces f(x) = %f \n %i iterations\n', m, feval(f,m), i-1);
fprintf(' Approximation with tolerance = %f \n', tol); 
