const actionIncrease = () => ({type:"counter/increase"});
const actionDecrease = () => ({type:"counter/decrease"});
const asyncincrease = () => {
    return ((dispatch) => {
        setTimeout( () => {
            dispatch({type:"counter/asyncincrease"});
        },3000);
    })
}
export {actionIncrease,actionDecrease, asyncincrease};