let h 		= [ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ],
	letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	word 	= 'abc',
	obj 	= {},
	max_height = 0;

	h.map( function( val, index ) {
		obj[letters[index]] = val;
	});

	for( i of word ) {
		if( obj[i] > max_height ) {
			max_height = obj[i]
		}
	}

	console.log( max_height * word.length );