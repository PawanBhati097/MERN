import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"

export default function UseEffect() {
    let [count, setCount] = useState(0)
    let [count1, setCount1] = useState(10)
    let [count2, setCount2] = useState(100)
    // Ist Case: Without Dependency : It will run on every re-renders which is occur on our page.
    // useEffect(()=>{
    //     console.log("Case 1")
    // })

    // IInd Case : With empty Array : It will run only on the first render , after that it will not run on any re-renders.
    // useEffect(()=>{
    //     console.log("Case 2")
    // },[])

    // IIIrd Case : With Dependency : It will only run when their is any change in the dependency.
    useEffect(() => {
        console.log("Case 3")
    }, [count1])

    return (
        <>
            <h1>UseEffect</h1>
            <h2>Count : {count}</h2>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
            <h2>Count1 : {count1}</h2>
            <button onClick={() => { setCount1(count1 + 10) }}>Click</button>
            <h2>Count2 : {count2}</h2>
            <button onClick={() => { setCount2(count2 + 100) }}>Click</button>
        </>
    )
}

export function ApiFetch() {
    let page_size = 30
    let [current, setCurrent] = useState(0);
    let [total, setTotal] = useState(0);
    let url = `https://dummyjson.com/products?limit=${page_size}&skip=${page_size * current}`
    const [products, setProducts] = useState([]);
    async function dataFetch() {
        try {
            let apiData = await fetch(url);
            let allData = await apiData.json()
            console.log(allData)
            setProducts(allData.products)
            setTotal(allData.total)
        }
        catch (err) {
            console.log(err)
        }
    }
}