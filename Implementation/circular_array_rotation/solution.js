function main( n, k, q, a ) {
    while( k > n ) {
        k = k - n
    }
    
    a = a.splice(n-k, n).concat(a.splice(0, n - k));
    for(var a0 = 0; a0 < q; a0++){
        // var m = parseInt(readLine()); // uncomment this line while code on hackerrank editor
        console.log(a[m]);
    }

}

main( 3, 2, 3, [ 1, 2, 3 ] );