import {add,wait} from './utils.js'
import {getAllUsers,addUser,findUser,deleteUser} from './userStore.js'

async function main(){
    await wait(2000);// 2 second
    console.log(add(2,3));
    try{
        
        await addUser('Vikas');
        await addUser('Rahul');

        let users = await getAllUsers();
        console.log(users);
        const user = await findUser(2);
        console.log(user);
        const currentUsers = await deleteUser(2);
        console.log('Current Users:', currentUsers);
        await addUser('Vikas');
        await addUser('Rahul');
        users = await getAllUsers();
        console.log(users);
        const nonexistentUser = await findUser(99);
        console.log(nonexistentUser);


    }catch(err){
        console.log('Error',err.message);
    }
}

main();