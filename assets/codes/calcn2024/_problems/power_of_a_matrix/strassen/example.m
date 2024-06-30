% Esempio di utilizzo dell'algoritmo di Strassen
A = [1, 3; 7, 5];
B = [6, 8; 4, 2];

% Calcolo della moltiplicazione di Strassen
C = strassen(A, B);

% Visualizzazione del risultato
disp('Risultato della moltiplicazione di Strassen:');
disp(C);

disp(A*B);