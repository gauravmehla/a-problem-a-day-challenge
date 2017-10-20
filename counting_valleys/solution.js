function processData(input) {
    let steps 	= input.split('\n')[1],
    	counter = 0 ,
    	num_of_valleys = 0;

    for( step of steps ) {
    	if ( counter === -1 && step === 'U') {
    		num_of_valleys++;
    	}
    	( step === 'U' ) ? counter++ : counter--;
    }

    console.log( num_of_valleys );
}

processData('8\nUDDDUDUU');