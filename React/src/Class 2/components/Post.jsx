import Body from "./Body";
import Id from "./Id";
import Title from "./Title";

export default function Post({id,title,body}){
    return(
        <>
            <h1>Post</h1>
            <Id id={id}/>
            <Title title={title}/>
            <Body body={body}/>
        </>
    )
}