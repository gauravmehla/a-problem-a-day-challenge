function find_hackerrank(s){
    var str = "hackerrank".split('');
    for( i of s ) {
        i === str[0] ? str.shift() : "";
    }
    return str.length === 0 ? 'YES' : 'NO' ;
}

console.log( find_hackerrank('iamhackerrank') );