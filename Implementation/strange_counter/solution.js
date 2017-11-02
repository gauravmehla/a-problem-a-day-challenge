console.log('\n-----');

function strange_counter( t ) {
	let counter 	= 3;
	let start_point = 1;

	while( t >= counter + start_point ) {
		start_point += counter;
		counter *= 2;
	}

	console.log( counter - ( t - start_point ) );
}

strange_counter( 7 );