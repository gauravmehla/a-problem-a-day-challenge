console.log('\n-----');


function jump_clouds( arr ) {
	let i = 0
		count = 0;
	while( i < arr.length - 1 ) {
		if( arr[i+2] === 0 ) {
			i += 2;
			count++;
		} else if ( arr[i+1] === 0 ) {
			i += 1;
			count++;
		} else {
			return false
		}
	}
	return count;
}


console.log( jump_clouds( [ 0, 0, 1, 0, 0, 1, 0 ] ) );