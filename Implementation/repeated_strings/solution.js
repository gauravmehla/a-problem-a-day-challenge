function number_of_a( s, n ) {
	let div = Math.floor( n / s.length )
    let rem = Math.floor( n % s.length )
    
    let total_no_of_a = s.split('a').length - 1
    let no_of_a_in_substr = s.slice(0, rem).split('a').length - 1
    return div * total_no_of_a + no_of_a_in_substr ;
}


console.log( number_of_a( 'abcd', 15 ) );