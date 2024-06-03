//          0  1  2  3  4
let list = [1, 3, 4, 6, 7, 8, 9, 10, 12, 14, 17]
// let list = ['edvard', 'sergey', 'vitaly']



function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;
    let mid = Math.round((low + high) / 2);
    let guess = list[mid]

    let count = 0

    while (low <= high) {
        count++
        if (guess === item) {
            return count;
        }
        if (guess > item) {
            high = mid - 1
            mid = Math.round((low + high) / 2)
            guess = list[mid]
        } else {
            low = mid + 1
            mid = Math.round((low + high) / 2)
            guess = list[mid]
        }
    }
    return 'none'
}
        

