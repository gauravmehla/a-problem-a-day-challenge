function solve(n, p){
	function floor( val ) {
		return Math.floor( val );
	}
    let total_no_of_pages = floor( n / 2 ),
    	dest_page = floor( p / 2 );
    return ( dest_page < total_no_of_pages / 2 ) ? dest_page : total_no_of_pages - dest_page ;
}

console.log( solve( 83246, 78132 ) );