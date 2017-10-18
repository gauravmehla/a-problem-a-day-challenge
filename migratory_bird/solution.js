function migratoryBirds(n, ar) {
	let counters = [
		{
			type 	: 1,
			count 	: 0
		},
		{
			type 	: 2,
			count 	: 0
		},
		{
			type 	: 3,
			count 	: 0
		},
		{
			type 	: 4,
			count 	: 0
		},
		{
			type 	: 5,
			count 	: 0
		}
	];

    for( i of ar ) {
    	counters[i-1].count++
    }

    let max = counters.shift();

    for( i of counters ) {
    	if ( max.count < i.count ) {
    		max = i;
    	} else if ( max.count === i.count ) {
    		if( max.type > i.type ) {
    			max = i;
    		}
    	}
    }

    return max.type;
}

migratoryBirds( 6, [ 1, 4, 4, 4, 5, 3 ] );