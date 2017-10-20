function sockMerchant(n, ar) {
    // Complete this function
    let sock_stack = [],
    	sock_bundle = 0;
    for( sock in ar ) {
    	if( sock_stack.indexOf( ar[sock] ) === -1 ) {
    		sock_stack.push( ar[sock] );
    	} else {
    		sock_stack.splice( sock_stack.indexOf( ar[sock] ), 1);
    		sock_bundle++;
    	}
    }
    return sock_bundle ;
}

console.log( sockMerchant( 20, '4 5 5 5 6 6 4 1 4 4 3 6 6 3 6 1 4 5 5 5'.split(' ') ) );