function [L, U, P] = LUfactorization_partial_pivoting(A)

    [m, n] = size(A);

    L = eye(m);
    U = A; 
    P = eye(m);


    for k = 1:min(m, n)

        [~, pivot] = max(abs(U(k:m, k)));
        pivot = pivot + k - 1;

        if pivot ~= k
            U([k, pivot], :) = U([pivot, k], :);
            P([k, pivot], :) = P([pivot, k], :);
            if k > 1
                L([k, pivot], 1:k-1) = L([pivot, k], 1:k-1);
            end
        end

        for i = k+1:m
            L(i, k) = U(i, k) / U(k, k);
            U(i, k:n) = U(i, k:n) - L(i, k) * U(k, k:n);
        end
    end

    if m > n
        U = U(1:n, :);
        L = L(:, 1:n);
    end
end