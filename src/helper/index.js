
const KEY = "key"

export function saveToLocal(state){
    let stringState = JSON.stringify(state);
    localStorage.setItem(KEY, stringState);
}

export function loadLocal(){
    let stringState = localStorage.getItem(KEY);
    let objectState = JSON.parse(stringState);

    if(objectState){
        return objectState;
    }
    else{
        return{
            loggedIn: {
                activeUser: "",
                users: [
                    {
                        username: "Mikey",
                        password: "Hello",
                    }
            
                ]
            },
            cart: [],
        }
    }

   
}
