const form=document.querySelector('form');
const answer={
    q1: "Sachin Tendulkar",
    q2:"West Indies",
    q3:" Sachin Tendulkar",
    q4:"264",
    q5:"Muttiah Muralitharan",
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data=new FormData(form);

    let finalScore=0;
    for(let [name,value] of data.entries()){
        if(answer[name]==value){
            finalScore++;
        }
    }

    document.getElementById('out').textContent=`Your SCore is ${finalScore} out of 5`;
    form.reset();
})
