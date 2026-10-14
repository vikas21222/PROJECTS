
function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getOrders(userId){
    await wait(1000);
    if (userId !== 1) throw new Error('Orders not found');
    return [{ item: 'phone' }, { item: 'laptop' }];
}

function getUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) resolve({ id: 1, name: 'Vikas' });
        else reject(new Error('User not found'));
      }, 1000);
    });
}


async function main() {
    try {
      await wait(2000);
      console.log('2 sec baad');
      const ghost = await getUser(99);
      const result = await getOrders(ghost.id);
      console.log(result);
    } catch (err) {
      console.log('Error:', err.message);
    }
}

main();