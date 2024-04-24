// const xhr = new XMLHttpRequest();
// xhr.responseType = 'json';
// xhr.open('GET', '../data/employees.json');
// xhr.send();
// xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let employees = xhr.response;
//         for (let employee of employees) {
//             document.body.innerHTML += `${employee.empid}<br>${employee.name}<br>${employee.ext}<br>${employee.email}<br>${employee.department}<br><br>`;
//         }
//     }
// });
// xhr.onerror = (e) => {console.error(e.message)};


async function fetchUsers() {
   try {
        const response = await fetch('../data/employees.json'); 
        const employees = await response.json();
         for (let employee of employees) {
            document.body.innerHTML += `<p>${employee.empid}<br>${employee.name}<br>${employee.ext}<br>${employee.email}<br>${employee.department}</p>`;
            }
   } catch (error) {
       console.error(error);
   }

}
fetchUsers();

const myFetch = () => { 
    return new Promise((resolve, reject) => { 
        const xhr = new XMLHttpRequest(); 
        xhr.responseType = 'json'; 
        xhr.onreadystatechange = () => { 
            if (xhr.readyState == 4) {
                (xhr.status == 200) ? 
                resolve(xhr.response) : 
                reject(new Error(`Error code: ${xhr.status}`));
            }
        };
        xhr.open('GET','../data/employees.json');
        xhr.send();
    }); 
};

myFetch('../data/employees.json')
    .then((employees) => console.log(employees)) 
    .catch((e) => console.log(e));