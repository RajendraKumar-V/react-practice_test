export const addToCart=(data)=>{
    console.log('Action is called',data);
    return {
        type:'Add_To_Cart',
        data
    }

}
