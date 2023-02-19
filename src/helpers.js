

const items = ['cat','dog','fox','tiger']

const rand = (list) => {
   return list[Math.floor((Math.random() * list.length))]
}

const removeItem = (list ,item) => {
    let idx = list.indexOf(item);
    if(idx !== -1){
        return list.splice(idx,1)
    }else{
        return undefined
    }


}
export {removeItem, rand}