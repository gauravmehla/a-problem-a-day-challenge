function processData(input) {
    let input_arr   = input.split(' '),
        start       = parseInt( input_arr[0] ) ,
        end         = parseInt( input_arr[1] ),
        num         = parseInt( input_arr[2] ),
        count       = 0 ;

    for( let x = start; x <= end ; x++ ) {
        if( Math.abs( x - parseInt(x.toString().split('').reverse().join('')) ) % num === 0 ){
            count++
        }
    }
    
    return( count );
} 


processData('912 205494 155635764');