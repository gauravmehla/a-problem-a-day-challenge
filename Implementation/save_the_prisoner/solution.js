console.log('\n----');

function saveThePrisoner(n, m, s){
    while( m > n) {
            m = m % n;
            if( m === 0 ) {
                m = n
            }
    }
    return ( s + ( m - 1 ) > n ) ? ( m - ( n - s + 1 ) ) > n ? ( m - ( n - s + 1 ) ) - n : ( m - ( n - s + 1 ) ) : s + m - 1;
}

console.log( saveThePrisoner( 464237185, 937820284, 255816794 ) );