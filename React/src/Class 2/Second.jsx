export default function Second({name}){//instaed of props use a key with {}

    //whenever you are using props keywird it will return a object.
    return(
        <>
        <h1>Hii my name is {name}</h1>
        
        </>
    )
}

export function Second1({cities}){
    return(
        <>
        <h1>Fav cities: {cities.city1}{cities.city2}{cities.city3}</h1>
        </>
    )
}