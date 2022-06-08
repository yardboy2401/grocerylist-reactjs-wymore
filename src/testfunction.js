function isValid(stale, latest, otjson) {
    let staleArr = stale.split('')
    let staleArray = staleArr.filter(function(str) {
        return /\S/.test(str);
    })

    let latestArray = latest.split('')

    for(let i = 0; i < otjson.length; i++) {
        if(otjson[i].op === "skip") {
            let skippedNumber;
            skippedNumber = otjson[i].count
            if(skippedNumber < staleArray.length) {
                return staleArray[skippedNumber];
            } else {
                return false;
            }
        }
    }
}

let otjson = [{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]
let stale = 'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.';
let latest = 'Repl.it uses operational transformations.'

console.log(isValid(stale, latest, otjson))