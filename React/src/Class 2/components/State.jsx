import { useState } from "react"


export default function State(){
    const [state,setState]=useState(10);

    function increase(){
        setState(state+10);
    }
    function decrease(){
        setState(state-10);
    }
    return(
        <>
        {/* State : useState(1st hook) */}
        <div>
            <button onClick={increase}>+</button>
            {state}
            <button onClick={decrease}>-</button>
            <button onClick={()=>{
                setState(0);
            }}>0</button>
        </div>
        </>
    )
}

export function Toggle(){
    let [status,setStatus]=useState(true);
        function updateStatus(){
            setStatus(!status);
        }
    return(
        <>
        <button onClick={updateStatus}>
            {
            status?"Hide para":"Show para"
            }  </button> 

        {/* conditional rendering */}

       {status && <p> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat est distinctio, reprehenderit ducimus tempora deserunt non, odit et repellendus animi doloribus facere laboriosam laborum consequatur eum! Ab alias suscipit accusamus voluptatum delectus vitae numquam reiciendis, praesentium ratione facilis perspiciatis accusantium fuga eum explicabo libero nulla obcaecati, saepe possimus. Reprehenderit esse reiciendis maxime magni dicta laboriosam quam, hic facilis illum perspiciatis officiis. Esse repellat facere cupiditate omnis. Nisi earum unde quidem ea, laboriosam alias repudiandae. Dolore adipisci doloremque quasi et minima tempore provident itaque, suscipit dicta voluptatibus natus. Culpa tempora ex sint dolore repellat rerum harum. Molestias, facere ad magni debitis veniam quo sequi? Nisi dolorum nihil aliquam odit nobis, voluptatum voluptas quidem maxime, explicabo soluta dolorem! Optio molestias rem ipsum quibusdam a suscipit, cupiditate, repudiandae consectetur nihil ab corrupti aut eos adipisci dolorem autem fugiat asperiores accusantium atque quod assumenda quis ea voluptates nemo unde. Eos recusandae amet porro facilis expedita, eaque voluptatem harum autem doloremque illum praesentium impedit sequi quaerat officia, repellat unde iure sint provident distinctio, vel doloribus explicabo repudiandae ipsum optio. Quia laudantium unde ex dolor deserunt magni quos officiis placeat officia dignissimos. Autem laborum iure nulla voluptatem cum ullam, molestias veniam rerum facilis nemo commodi magni aliquid quia, delectus voluptas adipisci quaerat aliquam. Aliquam cupiditate vitae mollitia quasi. Aperiam dignissimos sequi, quod perspiciatis ex repudiandae accusantium eius provident saepe corrupti eum nihil nesciunt odit, in nisi repellat mollitia unde esse quidem. Ullam maxime quo sapiente, facere quis itaque? Possimus harum officiis rerum corporis iure voluptates totam quibusdam soluta laborum iusto, placeat pariatur, nostrum est distinctio dignissimos nobis doloribus. Aliquid libero quasi illo in aperiam autem obcaecati quae qui aliquam dolore? Quos perspiciatis optio ratione enim rem, recusandae ipsam nam illum fuga modi ad, quod ipsum vero soluta aut! Est praesentium sint voluptas aut animi. Quod, debitis!
        </p>
}
        </>
    )
}

import {FaMoon,FaSun } from "react-icons/fa";
import './Second.css'

export function ThemeUpdate(){
//true:light
//false:dark

    const[theme,setTheme]=useState(false);
    function updateTheme(){
        setTheme(!theme);
    }
    return(
        <>
        <div className={theme?"light":"dark"} style={{padding:" 0px 30px",border:"2px solid white"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h1>Logo</h1>
        <div>
           { 
            theme?
            <FaMoon onClick={updateTheme} style={{color:"black"}} size={30}/>:
            <FaSun onClick={updateTheme} style={{color:"yellow"}} size={30}/>
            
    }
        </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati veniam repellat quis suscipit, odio blanditiis iste nihil qui velit eligendi atque, tempora ipsum ut quidem consequuntur eveniet corporis illo excepturi unde error iusto ipsa adipisci. Odio quas omnis non, minima possimus culpa alias. Provident nesciunt esse aspernatur eos cumque aliquid, hic qui sapiente tenetur enim repellat mollitia, voluptatem voluptatum commodi optio veritatis sed quaerat! Ex doloremque error, repellat ut quibusdam a assumenda maxime aperiam repudiandae, sed vitae? Saepe distinctio inventore temporibus laboriosam accusamus nisi, totam commodi autem. Possimus expedita, labore quis quia laudantium vitae nobis libero temporibus et impedit numquam tenetur dolores tempora recusandae ipsa eius vero alias! Ipsam cupiditate odio dolore. Accusantium id odit fugit commodi ex dolorem dolorum necessitatibus ipsa quidem, laudantium enim expedita corrupti tempore minus numquam laboriosam reiciendis ut dicta harum rem fuga magni iusto quaerat. Similique ab, quam, repudiandae veritatis at incidunt eveniet facere harum distinctio id optio deserunt quos dolore, ex suscipit quibusdam magnam delectus assumenda odit ut ea reprehenderit tenetur saepe! Explicabo, veritatis. Atque provident rem, incidunt nemo accusamus molestiae obcaecati? Error, aliquid, ullam quos eveniet est ratione autem fuga asperiores deleniti reiciendis consequatur, architecto iste sapiente vero expedita nihil delectus perferendis.</p>
        </div>
        </>
    )
}