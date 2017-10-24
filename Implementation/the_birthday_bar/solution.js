function solve(n, s, d, m){

	function find_consecutive_series( arr, start_index, number_of_el, sum ) {
		let total 	= 0,
			counter = 1;
		while( counter <= number_of_el ) {
			if( total <= sum ) {
				total = arr[ start_index ] + total;
				start_index++;
			} else {
				break;
			}
			counter++;
		}
		return total;
	}

	let total_slices = 0;

	for( let i = 0 ; i <= n - m ; i++ ) {
		let result = find_consecutive_series( s, i, m, d );
		if( result === d ) {
			total_slices++;
		}
	}

	return total_slices ;
}

solve( 1, [ 4 ], 4, 1 );