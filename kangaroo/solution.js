function kangaroo(x1, v1, x2, v2) {
	// If one is ahead and moving with greater speed, they will never met
	if ( ( v1 > v2 && x1 > x2 ) || ( v2 > v1 && x2 > x1 ) ) {
		return 'NO';
	}
	let number_of_steps = ( x1 - x2 ) / ( v2 - v1 );
	return Number.isInteger( number_of_steps ) ? number_of_steps >= 0 ? 'YES' : 'NO' : 'NO';
}


console.log( kangaroo( 28, 8, 96, 2 ) );