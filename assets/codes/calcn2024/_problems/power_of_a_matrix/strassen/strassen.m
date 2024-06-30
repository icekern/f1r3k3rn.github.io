function C = strassen(A, B, nmin)

    if nargin < 3, nmin = 4; end

    n = length(A);
    if n ~= 2^( log2(n) )
       A(n+1,:)=zeros(1,n);
       A(:,n+1)=zeros(1,n+1);
       B(n+1,:)=zeros(1,n);
       B(:,n+1)=zeros(1,n+1);
    end
    
    if n <= nmin
       C = A*B;
    else
       fprintf('%d',n)
       m = n/2; i = 1:m; j = m+1:n;
       P1 = strassen( A(i,i)+A(j,j), B(i,i)+B(j,j), nmin);
       P2 = strassen( A(j,i)+A(j,j), B(i,i), nmin);
       P3 = strassen( A(i,i), B(i,j)-B(j,j), nmin);
       P4 = strassen( A(j,j), B(j,i)-B(i,i), nmin);
       P5 = strassen( A(i,i)+A(i,j), B(j,j), nmin);
       P6 = strassen( A(j,i)-A(i,i), B(i,i)+B(i,j), nmin);
       P7 = strassen( A(i,j)-A(j,j), B(j,i)+B(j,j), nmin);
       C = [ P1+P4-P5+P7  P3+P5;  P2+P4  P1+P3-P2+P6  ];
       
       fprintf('%d',length(A))
    end
    C=C(1:n,1:n);