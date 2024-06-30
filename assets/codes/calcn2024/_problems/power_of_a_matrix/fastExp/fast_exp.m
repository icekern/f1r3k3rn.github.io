function B = fast_exp(A,k)
    B = eye(size(A));
    while k > 0
        if mod(k, 2) == 1
            B = B * A;
        end
        A = A * A;
        k = floor(k / 2);
    end
            

