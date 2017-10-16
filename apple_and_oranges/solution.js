let s 	= 7,
	t 	= 11,
	a 	= 5,
	b 	= 15,
	m 	= 3,
	n 	= 2,
	apple 	= [-2, 2, 1],
	orange 	= [5, -6];

let apple_towards_house 	= filter( apple , 'pos');
let oranges_towards_house   = filter( orange, 'neg');

function in_range( start, end, num ) {
    return start <= num && num <= end;
}

function filter( array, type ) {
    return array.filter( function( el ) {
        return type === 'pos' ? el >= 0 ? el : false : el < 0 ? el : false; 
    } );
}

function count_fruits( base, array, start, end ) {
    let counter = 0;
    for( distance of array ) {
        if ( in_range( start, end, distance + base ) ) {
            counter++;
        }
    }
    return counter;
}

console.log( count_fruits( a, apple_towards_house, s, t)    );
console.log( count_fruits( b, oranges_towards_house, s, t)  );


