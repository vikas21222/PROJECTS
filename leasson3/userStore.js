import fs from 'fs/promises'
const File = 'users.json'

export async function getAllUsers(){
    try{
    const data = await fs.readFile(File,'utf-8');
    return JSON.parse(data);
    }
    catch (err) {
      if (err.code === 'ENOENT') return [];   // file nahi hai → khali list
      throw err; 
    }
}

export async function addUser(name){
    const users =  await getAllUsers();
     const lastId = users.length ? users[users.length - 1].id : 0;
    const user = { id: lastId + 1, name };

    users.push(user);
    await fs.writeFile(File, JSON.stringify(users, null, 2));
    return user;

}

export async function findUser(id){

    const users =  await getAllUsers();

    const user = users.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    return user;
      
}

export async function  deleteUser(id)
{
    const users =  await getAllUsers();
    const remainingUsers = users.filter(u=> u.id  !== id);
    await fs.writeFile(File, JSON.stringify(remainingUsers, null, 2));
    return remainingUsers;
}