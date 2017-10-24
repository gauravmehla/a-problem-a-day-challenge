function oddNumbers(l, r) {
	function loop_over_odd( start, end) {
		let arr = [];
		for( let x = start; x <= end; x += 2 ) {
            arr.push( x );
        }
        return arr;
	}
    return ( l % 2 === 0 ) ? loop_over_odd( l + 1, r ) : loop_over_odd( l, r);
}

console.log( oddNumbers( 1, 7) );