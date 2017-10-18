function divisibleSumPairs(n, k, ar) {
	let arr = ar.sort(),
		len = ar.length,
		counter = 0;

	for( let x = 0 ; x < len ; x++ ) {
		for( let y = x + 1 ; y < len ; y++ ) {
			if( ( arr[x] + arr[y] ) % k === 0 ) {
				counter++;
			}
		}
	}

	return counter;
}


console.log( divisibleSumPairs( 6, 3, [ 1, 3, 2, 6, 1, 2 ] ) );