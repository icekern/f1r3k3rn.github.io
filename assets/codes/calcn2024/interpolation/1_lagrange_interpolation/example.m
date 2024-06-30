x = [0, 1, -1];
y = [0, 1, 1];

P = lagrangeInterpolation(x, y);

disp('Coefficients of the interpolating polynomial:');
disp(P);

xi = linspace(-2, 2, 100);
yi = polyval(P, xi);  

figure;
plot(x, y, 'o', xi, yi, '-');
title('Lagrange Interpolation');
xlabel('x');
ylabel('P(x)');
legend('Data Points', 'Interpolating Polynomial');
grid on;