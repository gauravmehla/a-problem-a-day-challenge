function processData(input) {
    var arr = input.split('\n')[1].split(' ');
    let el_to_shift = arr[ arr.length - 1 ];
    for( let x = arr.length - 1 ; x >= 0 ; x-- ) {
    	if( arr[ x - 1 ] > el_to_shift ){
    		arr[ x ] = arr[ x - 1 ];
    	} else if( arr[x - 1] <= el_to_shift ){
    		arr[ x ] = el_to_shift;
    		break;
    	} else {
    		arr[x] = el_to_shift
    		break;
    	}
    	console.log( arr.join(' ') );
    }
    console.log( arr.join(' ') );
} 

processData('5\n2 3 4 5 6 7 8 9 10 1');