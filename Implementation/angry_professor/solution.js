function angry_prof( a, k ) {
	var counter = 0;
	a.map( function ( x ) {
	    if( x <= 0 ) {
	        counter++;
	    }
	} );
	( counter >= k ) ? console.log( 'NO' ) : console.log( 'YES' );
}

angry_prof( [ -1, -3, 4, 2 ], 3 );

