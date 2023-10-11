

import {useState, useEffect} from 'react'





const User = () => {
    const MOCK_API_URL = 'https://6521b298a4199548356d7e8c.mockapi.io/users';
    

const [users, setUsers] = useState()
// const [newUserName, setNewUserName] = useState('')

    function getUsers(){
        fetch(MOCK_API_URL)
        .then(data => data.json())
        .then(data => console.log(data))
        .then(data => setUsers(data))
        
    }
    
    useEffect(() => {
        getUsers()
    },[])


    // function addNewUser() {

    // }

//     function deleteUser(id) {
//         fetch(`${MOCK_API_URL}/${id}`, {
//             method: 'DELETE'
//     }).then(() => getUsers())
// }

//     function updateUser() {

//     }



return (

    <div className="User"></div>
)
}


export default User;
