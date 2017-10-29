console.log('\n-----');


function encryption( s ) {
	let sq = Math.sqrt( s.length );
	let row = Math.floor( sq );
	let col = Math.ceil( sq );
	let regex = new RegExp(".{1," + col + "}","g");
	let arr = s.match( regex );
	let output = [];

	for( let x = 0; x < col ; x++ ) {
		let res = [];
		for( i of arr ) {
			res.push( i[x] );
		}
		output.push( res.join('') );
	}

	return output.join(' ');
}

console.log( encryption( 'haveaniceday' ) );