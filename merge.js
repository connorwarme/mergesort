// for input array of n elements
// if length < 2, return array
// else
// sort right half
// sort left half
// merge both
let array = [4, 8, 6, 2, 1, 7, 5, 3];
const merge = (a, b, c) => {
    // let parent = [];
    let apointer = 0;
    let bpointer = 0;
    let ppointer = 0;
    console.log(a);
    console.log(b);
    while (apointer < a.length && bpointer < b.length) {
        if (a[apointer] < b[bpointer]) {
            c[ppointer] = a[apointer];
            apointer++;
        } else {
            c[ppointer] = b[bpointer];
            bpointer++;
        }
        ppointer++;
    }
    if (apointer >= a.length) {
        for (let i = bpointer; i < b.length; i++) {
            c[ppointer] = b[bpointer];
            ppointer++;
            bpointer++;
        }
    } else {
        for (let i = apointer; i < a.length; i++) {
            c[ppointer] = a[apointer];
            ppointer++;
            apointer++;
        }
    }
    return c;
}
const sort = (a, b) => {

}
const ms = (input) => {
    console.log(input);
    if (input.length < 2) {
        return input;
    } else {
        let half = Math.ceil(input.length/2);
        let left = ms(input.slice(0, half));
        let right = ms(input.slice(half, input.length));
        return merge(left, right, input);
    }
}
console.log(ms(array));