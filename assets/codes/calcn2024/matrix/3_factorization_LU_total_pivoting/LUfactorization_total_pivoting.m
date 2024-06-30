function [L, U, P, Q] = LUfactorization_total_pivoting(A)

    [m, n] = size(A);


    L = eye(m);
    U = A;
    P = eye(m);
    Q = eye(n);


    for k = 1:min(m, n)
        [pivot_row, pivot_col] = find(abs(U(k:m, k:n)) == max(max(abs(U(k:m, k:n)))), 1);
        pivot_row = pivot_row + k - 1;
        pivot_col = pivot_col + k - 1;

        if pivot_row ~= k
            U([k, pivot_row], :) = U([pivot_row, k], :);
            P([k, pivot_row], :) = P([pivot_row, k], :);
            if k > 1
                L([k, pivot_row], 1:k-1) = L([pivot_row, k], 1:k-1);
            end
        end

        if pivot_col ~= k
            U(:, [k, pivot_col]) = U(:, [pivot_col, k]);
            Q(:, [k, pivot_col]) = Q(:, [pivot_col, k]);
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