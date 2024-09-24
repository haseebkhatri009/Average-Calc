const numbers = [10,20,30,40];
function average(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i];
    }
    const average = sum/numbers.length;
    return average
}
const result = average(numbers);
console.log(result);
