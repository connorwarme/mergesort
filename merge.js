// for input array of n elements
// if length < 2, return array
// else
// sort right half
// sort left half
// merge both
let array = [1, 3, 7, 4, 5, 9, 2];
let a = [2, 5];
let b = [3, 4];
const sort = (a, b) => {
    let parent = [];
    let apointer = 0;
    let bpointer = 0;
    let ppointer = 0;
    while (apointer <= a.length && bpointer <=b.length) {
        if (a[apointer] < b[bpointer]) {
            parent[ppointer] = a[apointer];
            apointer++;
        } else {
            parent[ppointer] = b[bpointer];
            bpointer++;
        }
        ppointer++;

    }
    return parent;
}
const ms = (input) => {
    if (input.length < 2) {
        return input;
    } else {
        let half = Math.ceil(input.length/2);
        let left = input.slice(0, half);
        let right = input.slice(half, input.length);
    }
}
console.log(sort(a, b));