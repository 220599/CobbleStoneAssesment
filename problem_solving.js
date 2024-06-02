function removeDuplicates(fruits) {
    let uniqueFruits = [];
    for (let fruit of fruits) {
        if (!uniqueFruits.includes(fruit)) {
            uniqueFruits.push(fruit);
        }
    }
    return uniqueFruits;
}

// Example usage
let fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
let uniqueFruits = removeDuplicates(fruits);
console.log(uniqueFruits); // Output: ['apple', 'banana', 'orange']
