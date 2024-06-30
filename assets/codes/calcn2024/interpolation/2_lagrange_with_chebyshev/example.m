% Example: Interpolate f(x) = sin(x) with 5 Chebyshev nodes over [-1, 1]
f = @(x)(1./(1+25*x.^2));
n = 9;
a = -5;
b = 5;

% Perform Lagrange interpolation with Chebyshev nodes
P = lagrangeChebyshevInterpolation(f, n, a, b);

% Display the coefficients of the interpolating polynomial
disp('Coefficients of the interpolating polynomial:');
disp(P);

% Plot the interpolating polynomial and original function
xi = linspace(a, b, 100);
yi = polyval(P, xi); % Evaluate the interpolating polynomial
y_exact = f(xi);     % Evaluate the exact function

figure;
plot(xi, y_exact, 'b-', xi, yi, 'r--', x, f(x), 'ko');
title('Lagrange Interpolation with Chebyshev Nodes');
xlabel('x');
ylabel('f(x)');
legend('Exact Function', 'Interpolating Polynomial', 'Chebyshev Nodes');
grid on;