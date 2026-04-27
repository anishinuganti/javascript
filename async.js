//task 1
function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 0) {
        reject("Invalid ID: ID cannot be negative");
      } else {
        resolve({ id: id, name: `User${id}` });
      }
    }, 1000);
  });
}

//task 2

async function fetchMultipleUsers() {
  try {
    const users = await Promise.all([
      fetchUserData(1),
      fetchUserData(2),
      fetchUserData(3)
    ]);

    users.forEach(user => console.log(user.name));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchMultipleUsers();

//task 3

async function testFetchUser(id) {
  try {
    const user = await fetchUserData(id);
    console.log("User fetched:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

testFetchUser(5);

testFetchUser(-1);