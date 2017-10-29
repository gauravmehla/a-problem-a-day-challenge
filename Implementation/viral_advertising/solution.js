function processData(input) {
    let m = 5;
    let total = 0;
    while( input > 0 ) {
        m = Math.floor( m / 2 );
        total += m;
        m *= 3
        input--;
    }
    console.log( total );
} 

processData( 6 );