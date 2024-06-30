function m = falsePosition(f, low , high , tol , cap)
disp('falsePosition');

y1 = feval(f, low);
y2 = feval(f, high);
i = 0; 

if y1 * y2 > 0
   disp('Bolzano theorem not verified ...');
   m = 'Error';
   return
end

disp('Iter    low        high          x0');
while (abs(high - low) >= tol)
    i = i + 1;
    
    m = low - y1 * (high - low) / (y2 - y1);

    y3 = feval(f,m);

    if y3 == 0
        fprintf('Root at x = %f \n\n', m);
        return
    end
    fprintf('%2i \t %f \t %f \t %f \n', i-1, low, high, m);   

    if y1 * y3 > 0
        low = m;
        y1 = y3;
    else
        high = m;
    end

    if i > cap
        break
    end 
end 

fprintf('\n x = %f produces f(x) = %f \n %i iterations\n', m, y3, i-1);
fprintf(' Approximation with tolerance = %f \n', tol); 