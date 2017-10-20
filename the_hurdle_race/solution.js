function magic_portion_sips( k, heights ) {
	let max = heights.reduce(function(a, b) {
	    return Math.max(a, b);
	});
	console.log( ( max - k > 0 ) ? max - k : 0);
}

magic_portion_sips( 4, [ 1, 2, 6, 5, 3]);