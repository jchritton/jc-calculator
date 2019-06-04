export function add(nums: Array<number>, initValue: number) {
    return nums.reduce((acc, val, index, arr) => {
        return acc + val
    }, initValue);
}

export function subtract(nums: Array<number>, initValue: number) {
    return nums.reduce((acc, val, index, arr) => {
        return acc - val
    }, initValue);
}

export function multiply(nums: Array<number>, initValue: number) {
    return nums.reduce((acc, val, index, arr) => {
        return acc * val
    }, initValue);
}

export function divide(nums: Array<number>, initValue: number) {
    return nums.reduce((acc, val, index, arr) => {
        return acc / val
    }, initValue);
}

const testNums: Array<number> = [3, 2]

console.log(testNums, divide(testNums, 10));