function count_changes( S ) {
    var arr = S.match(/.{1,3}/g);
    var counter = 0;
    for( x of arr ) {
        if( x[0] !== 'S'  ) {
            counter ++
        }
        if( x[1] !== 'O'  ) {
            counter ++
        }
        if( x[2] !== 'S'  ) {
            counter ++
        }
    }
    return counter;
}


console.log( count_changes('SOSSAA') );