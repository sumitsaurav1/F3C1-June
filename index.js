let yourname = document.getElementById("yourname");
let profession = document.getElementById("profession")
let age = document.getElementById("age")
let addUser = document.getElementById("addUser")
let message1 = document.getElementById("message1")
let message2 = document.getElementById("message2")

let cardContainer = document.getElementById("card-container");

let employees =[]

function generateId(){
    let string = "0123456789";
    let result =""
    for(let i=0;i<4;i++){
        let index = Math.floor(Math.random()*string.length)
        result +=string[index];
    }
    return result;
}
addUser.addEventListener('click',(e)=>{
    e.preventDefault();
    if(yourname.value && profession.value && age.value){
        message1.innerText="Success : Employee Added!";
        message1.style.color="green"
        message2.style.display="none"

        let obj={
            "id":generateId(),
            "name":yourname.value,
            "profession":profession.value,
            'age':age.value
        }
        employees.push(obj);
        renderData()
        console.log(obj)
        console.log(employees)
            yourname.value=""
            profession.value=""
            age.value=""
        
            
    }else{
        message1.innerText="Error : Please Make sure All the fields are filled before adding in an employee !";
        message1.style.color="red"
    }
    if( message1.innerText=="Success : Employee Added!"){
        setTimeout(()=>{
            message1.innerText="";
        },3000)
    }
})

function deleteCard(){
    let deleteButtons = document.querySelectorAll(".delete");
    let cards = document.querySelectorAll(".card");

    for(let i=0;i<deleteButtons.length;i++){
        deleteButtons[i].addEventListener('click',(e)=>{
            e.preventDefault();
           
            employees.splice(i,1);
            cardContainer.removeChild(cards[i])
            renderData()
            if(employees.length==0){
                message2.style.display="block"
            }
           
        })
    }
}



function renderData(){
    cardContainer.innerHTML=""
    let cardContainerString=""
    let k=0;
    employees.forEach((obj)=>{
        k++;
        cardContainerString += `<div class="card">
                <div class="card-details">
                    <div class="kth" >${k}</div>
                    <div>Id: ${obj.id}</div>
                    <div class="name">Name: ${obj.name}</div>
                    <div>Profession: ${obj.profession}</div>
                    <div>Age: ${obj.age}</div>
                </div>
                <button class="delete" data-id=${obj.id}>Delete User</button>
            </div>`
        })
    cardContainer.innerHTML=cardContainerString
    deleteCard()
}

