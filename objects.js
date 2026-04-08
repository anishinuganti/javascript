//task 1

const p1 = { name: "Anish", age: 20 };
const p2 = { age: 22, city: "Hyderabad" };


function mergeProfiles(profile1, profile2) {
    return { ...profile1, ...profile2 };
}
const result = mergeProfiles(p1, p2);
console.log(result);


//task 2

const user = {
  name: "Anish",
  address: {
    city: "Hyderabad",
    state: "Telangana"
  }
};


function extractAddress({ name, address: { city, state } }) {
    return `${name} lives in ${city}, ${state}`;
}

console.log(extractAddress(user));


//task 3


let products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10 },
  { id: 2, name: "Phone", price: 20000, stock: 15 },
  { id: 3, name: "Tablet", price: 15000, stock: 8 },
  { id: 4, name: "Headphones", price: 2000, stock: 25 },
  { id: 5, name: "Keyboard", price: 1000, stock: 30 }
];

function addProduct(product) {
  products.push(product);
}

function removeProduct(id) {
  products = products.filter(product => product.id !== id);
}
function updateProduct(id, updatedData) {
  products = products.map(product =>
    product.id === id ? { ...product, ...updatedData } : product
  );
}


addProduct({ id: 6, name: "mmouse", price: 800, stock: 20 });

removeProduct(3); 
updateProduct(2, { price: 18000, stock: 12 });
