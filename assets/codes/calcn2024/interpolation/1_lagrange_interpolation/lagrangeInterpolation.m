function P = lagrangeInterpolation(x, y)

    n = length(x);


    P = zeros(1, n);

    for i = 1:n
        Li = 1;
        for j = 1:n
            if j ~= i
                Li = conv(Li, [1, -x(j)]) / (x(i) - x(j));
            end
        end

        P = P + y(i) * Li;
    end
end