function solve(grades){
    function round( grade ) {
        let roof_value = roof( grade );
        return roof_value - grade <= 2 ? roof_value : grade;
    }
    
    function roof( grade ) {
        let val = 5;
        while( val < grade ) {
            val += 5
        }
        return val
    }
    
    return grades.map(function( grade ){
        return grade < 38 ? grade : round( grade );
    });
}

console.log( solve( [73, 67, 38, 33] ) );