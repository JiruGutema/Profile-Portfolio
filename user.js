const userUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchUser(){
    const res = await fetch(userUrl);
    const data = await res.json();
    console.log(data)
}

const result = fetchUser();
console.log(result);

