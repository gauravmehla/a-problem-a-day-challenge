console.log('\n------');

function twoStrings(s1, s2){
    for( i of s1 ) {
        if( s2.includes( i ) ) {
            return 'YES'
        }
    }
    return 'NO'
}

console.log( twoStrings('hello', 'world') );