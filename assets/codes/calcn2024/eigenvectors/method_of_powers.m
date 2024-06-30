function [lambda, v] = method_of_powers(A, tol, max_iter)
    
    n = size(A, 1);
    v = ones(n, 1); 
    v = v / norm(v);

    lambda = 0;
    for k = 1:max_iter
 
        v_new = A * v; 
        lambda_new = max(abs(v_new)); 
        v_new = v_new / norm(v_new);

        if norm(v_new - v) < tol
            break;
        end

        v = v_new;
        lambda = lambda_new;
    end

    v = v_new;
end
