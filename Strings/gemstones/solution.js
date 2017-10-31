console.log('\n------');

function gemstones(arr){
	let counter_arr = [];

    function check_gem( el ) {
    	for( x of arr ) {
    		if( x.indexOf( el ) === -1 ) {
    			return false;
    		}
    	}
    	// console.log( el );
    	return true;
    }

    for( i of arr[0] ) {
    	// console.log( i );
    	if( check_gem( i ) ) {
    		if( counter_arr.indexOf( i ) === -1 ){
    			counter_arr.push( i );
    		}
    	}
    }

    return counter_arr.length ;
}


console.log( gemstones( [ 'abcdde', 'baccd', 'eeabg']) );