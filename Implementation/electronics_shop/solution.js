function getMoneySpent(keyboards, drives, s){
	let max_price = -1;

	keyboards.sort(function(a,b) { return a - b; });
	drives.sort(function(a,b) { return a - b; });
	
	for ( keyboard of keyboards ) {
		for ( drive of drives ) {
			let current_price = keyboard + drive ;
			if( current_price > s ) {
				break;
			}
			if( current_price > max_price ) {
				max_price = current_price;
			}
		}
	}

	return max_price;}

console.log( getMoneySpent(  [ 3, 1 ], [ 5, 2, 8 ], 10 ) );