var Acontent = document.querySelectorAll(`.acc-content`)

Acontent.forEach((item,index)=>{
  let header = item.querySelector(`header`)
  header.addEventListener(`click`, ()=>{
    item.classList.toggle(`open`);

    let description = item.querySelector(`.acc-descrition`)
    console.log(description)
    if(item.classList.contains(open)){
     description.style.height = `${description.scrollHeight}px`;
   }
   else{
    description.style.height = "0px";
   }
  })
})
