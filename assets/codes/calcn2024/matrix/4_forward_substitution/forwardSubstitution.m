function x = forwardSubstitution(L, b)
    n = length(b);
    
    x = zeros(n, 1);

    for i = 1:n
        if L(i, i) == 0
            error('Matrix is singular!');
        end
        x(i) = (b(i) - L(i, 1:i-1) * x(1:i-1)) / L(i, i);
    end
end