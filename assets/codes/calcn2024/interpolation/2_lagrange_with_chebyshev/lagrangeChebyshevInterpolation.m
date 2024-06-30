function P = lagrangeChebyshevInterpolation(f, n, a, b)

    x = cos((2*(1:n) - 1) * pi / (2*n));
    x = 0.5 * (b - a) * (x + 1) + a; 

    y = f(x);

    P = zeros(1, n);
    for k = 1:n

        Lk = 1;
        for j = 1:n
            if j ~= k
                Lk = conv(Lk, [1, -x(j)]) / (x(k) - x(j));
            end
        end

        P = P + y(k) * Lk;
    end
end
