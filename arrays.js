//task 1
const numbers = [1000, 45, 3, 99, 23];

const max = numbers.reduce((acc, curr) => {
  if (curr > acc) {
    return curr;
  } 
  else {
    return acc;
  }
}, numbers[0]);

console.log(max); 


//task 2


function getElectronicsSorted(products) {
  return products
    .filter(product => product.category === "electronics")
    .sort((a, b) => a.price - b.price);
}

const products = [
  { name: "Phone", price: 80000, category: "electronics" },
  { name: "Shirt", price: 1000, category: "clothing" },
  { name: "Laptop", price: 90000, category: "electronics" },
  { name: "Headphones", price: 2000, category: "electronics" }
];

console.log(getElectronicsSorted(products));

//task 3

