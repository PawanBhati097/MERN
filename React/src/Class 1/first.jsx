function First(){
    //JS
    let name="Ritik";
    let skills=["c++","python","java","node"]
    return(
        <>
        {/* HTML */}
        <h1>My first Component</h1>
        <h1>My name is {name}</h1>
        <h2>My skills are :{
        skills.map((el)=>(
            `${el} `
        ))
        }</h2>
        </>
    )
}

export default First;

function First1(){
    return(
        <>
        <h1>This is new component</h1>
        </>
    )
}

export  {First1};