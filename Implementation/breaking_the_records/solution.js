let scores = [ 10, 5, 20, 20, 4, 5, 2, 25, 1 ]

function getRecord( s ) {
	let initial_value 	= s.shift();

	let highest_score 	= initial_value,
		lowest_score 	= initial_value,
		break_high_score 	= 0,
		break_low_score 	= 0;

	for( score of s ) {
		if( score > highest_score ) {
			highest_score = score
			break_high_score++;
		} else if( score < lowest_score ) {
			lowest_score = score;
			break_low_score++;
		}
	}

	return [ break_high_score, break_low_score ];
}

getRecord(scores);