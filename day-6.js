//task 1

class ShoppingCart{
    #items=[]

    add(item){
        this.#items.push(item)
    }
    remove(itemName){
        this.#items=this.#items.filter(item=>item.name!==itemName)
    }
    getTotal(){
        return this.#items.reduce((total,item)=> total=total+item.price,0)
    }
    getItem(){
        return this.#items
    }
}

const cart =new ShoppingCart()

cart.add({name:"chair",price:2000})
cart.add({name:"table",price:5000})
cart.add({name:"laptop",price:20000})

cart.remove("chair")
console.log(cart.getItem())
console.log(cart.getTotal())



//task 2


class Cache {
  constructor() {
    this.store = new Map();
  }

  set(key, value, ttlMs) {
    const expiry = Date.now() + ttlMs;
    this.store.set(key, { value, expiry });
  }

  get(key) {
    const data = this.store.get(key);

    if (!data) return null;

    if (Date.now() > data.expiry) {
      this.store.delete(key);
      return null;
    }

    return data.value;
  }
}

const cache = new Cache();
cache.set("user", { name: "Anish" }, 2000);
console.log(cache.get("user")); // works

setTimeout(() => {
  console.log(cache.get("user")); // null after expiry
}, 3000);



//task 3

function* fibonacci() {
  let a = 0, b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();

for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

