function m = rope(f, g, x0, tol, cap)

i = 1;
m = x0;

ca = g(m);
dm = - f(m) / ca;

disp('Iter x0');
while abs(dm) > tol 

    if i > cap
        disp("iteration limit reached")
        m = "Error";
        return 
    end 

    m  = m + dm;
    fprintf("%i \t %f \n", i, m)
    
    dm = - f(m) / ca;
    i = i + 1;
end 

fprintf('\n x = %f produces f(x) = %f \n %i iterations\n', m, feval(f,m), i-1);
fprintf(' Approximation with tolerance = %f \n', tol); 

