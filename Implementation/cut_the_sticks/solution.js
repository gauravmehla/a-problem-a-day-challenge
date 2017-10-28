console.log('\n-----');

function cut_the_sticks( arr ) {
	let sorted_arr = arr.sort(function(a,b){ return a-b; });
	while ( sorted_arr.length > 0 ) {
		console.log( sorted_arr.length );
		let smallest = sorted_arr[0];
		sorted_arr.map( function( el, index ) {
			sorted_arr[index] = el - smallest;
		});
		sorted_arr = sorted_arr.filter( function( el, index ) {
			if( el !== 0 ) {
				return el;
			}
		});
	}
}

cut_the_sticks( [ 5, 4, 4, 2, 2, 8 ] );