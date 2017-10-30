console.log('\n-----');

function pangrams( input ) {
	let alphabets = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t" ,"u", "v", "w", "x", "y", "z" ];
	for( letter of input ) {
		letter = letter.toLowerCase();
		if( alphabets.indexOf( letter ) !== -1 ) {
			alphabets.splice( alphabets.indexOf( letter ), 1 );
		}
		if( alphabets.length < 1 ) {
			return 'pangram';
		}
	}
	return 'not pangram'
}

console.log( pangrams( 'We promptly judged antique ivory buckles for the next prize' ) );