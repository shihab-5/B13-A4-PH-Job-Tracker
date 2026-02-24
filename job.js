let interList=[]
let rejectList=[]
let currentState='all'

const total=document.getElementById("total");
const inter=document.getElementById("inter");
const reject=document.getElementById("reject");
const avilablet=document.getElementById('ttl')

const hCarts=document.getElementById('alljobcarts')
const mainCont=document.querySelector('main')

const allBaton=document.getElementById("all-baton")
const interBaton=document.getElementById("inter-baton")
const rejectBaton=document.getElementById("reject-baton")

const fullList=document.getElementById('all')
const fullIntList=document.getElementById('interview')
const empty=document.getElementById('empty')

function hcartcnt(){
    total.innerText=hCarts.children.length
    inter.innerText=interList.length
    reject.innerText=rejectList.length
    avilablet.innerText=hCarts.children.length +' jobs';

}
 hcartcnt()



 function tgle(id){
 allBaton.classList.remove('btn-primary')
 interBaton.classList.remove('btn-primary')
 rejectBaton.classList.remove('btn-primary')

 allBaton.classList.add('btn-active')
 interBaton.classList.add('btn-active')
 rejectBaton.classList.add('btn-active')

 const select=document.getElementById(id)

//  select.classList.remove('btn-active')
 select.classList.add('btn-primary')
    currentState=id
 if(id=='inter-baton'&& interList.length!=0){
    fullIntList.classList.remove('hidden')
    fullList.classList.add('hidden')
      empty.classList.add('hidden')
    render()
 }
   else if(id=='inter-baton'&& interList.length==0){
empty.classList.remove('hidden')
fullIntList.classList.add('hidden')
fullList.classList.add('hidden')
 }
 else if(id=='all-baton'&& hCarts.children.length!=0){
  fullIntList.classList.add('hidden')
  fullList.classList.remove('hidden')
  empty.classList.add('hidden')

 }
  else if(id=='all-baton'&& hCarts.children.length==0){
empty.classList.remove('hidden')
fullIntList.classList.add('hidden')
fullList.classList.add('hidden')
 }
 else if(id=='reject-baton'&& rejectList.length!=0){
  fullList.classList.add('hidden') 
  fullIntList.classList.remove('hidden')
    empty.classList.add('hidden')

  renderr()

 }
   else if(id=='reject-baton'&& rejectList.length==0){
empty.classList.remove('hidden')
fullIntList.classList.add('hidden')
fullList.classList.add('hidden')
 }
 
 }



 mainCont.addEventListener('click',function(event){

     if(event.target.classList.contains('inter-batn')){

    const prnt=event.target.parentNode.parentNode
    const name=prnt.querySelector('.name').innerText
    const position=prnt.querySelector('.position').innerText
    const detail=prnt.querySelector('.detail').innerText
    const state=prnt.querySelector('.state').innerText
    const require=prnt.querySelector('.require').innerText

    const cart={
        name,
        position,
        detail,
        state:'interview',
        require
    }

    const exist=interList.find(item=> item.name== cart.name)
    prnt.querySelector('.state').innerText='interview'
    if(!exist){
        interList.push(cart)
    }
    
    rejectList=rejectList.filter(item=> item.name != cart.name)

    hcartcnt()

   if(currentState=="reject-baton"){
renderr()    
}

}    
    else if(event.target.classList.contains('reject-batn')){

    const prnt=event.target.parentNode.parentNode
    const name=prnt.querySelector('.name').innerText
    const position=prnt.querySelector('.position').innerText
    const detail=prnt.querySelector('.detail').innerText
    const require=prnt.querySelector('.require').innerText

    const cart={
        name,
        position,
        detail,
        state:'Rejected',
        require
    }

    const exist=rejectList.find( item=>  item.name== cart.name)
    prnt.querySelector('.state').innerText='Rejected'
    if(!exist){
        rejectList.push(cart)
    }
    
    interList=interList.filter(item=> item.name!=cart.name)

   hcartcnt()

if(currentState=='inter-baton'){
render()    
}
}    

    else if(event.target.classList.contains('dtl-btn')){
        const prnt=event.target.parentNode
        console.log(event.target.parentNode)
        console.log('dlt-btn')
        
    }

 })


 const intersec=document.getElementById('interview')

//  creating

 function render(){
    intersec.innerHTML=``

  for(let inte of interList){
    const div=document.createElement('div')
    div.className=`jobcart flex p-6 bg-base-100 rounded-[10px] justify-between mb-5`
    div.innerHTML=`
         <div class="info flex flex-col gap-1.5">
               <p class=" name font-bold text-[20px]">${inte.name}</p>
               <p class="position font-medium text-[16px] text-gray-500">${inte.position}</p>
               <p class="detail font-medium text-[14px] text-gray-500 my-2.5">${inte.detail}</p>
               <p class="state border-0 bg-primary-content py-3 px-4 mr-[690px] rounded-[5px]">${inte.state}</p>
               <p class="require">${inte.require}</p>
          <div class="flex gap-3">
                 <button  class="inter-batn btn btn-outline btn-success" id="">INTERVIEW</button>

                 <button class="btn btn-outline btn-error reject-batn" id="">REJECTED</button>
               </div>
              </div>
              <div class="dlt">
                <p><i class="fa-regular fa-trash-can"></i></p>
              </div>`
              intersec.appendChild(div)
  }
 }
 function renderr(){
    intersec.innerHTML=``

  for(let inte of rejectList){
    const div=document.createElement('div')
    div.className=`jobcart flex p-6 bg-base-100 rounded-[10px] justify-between mb-5`
    div.innerHTML=`
         <div class="info flex flex-col gap-1.5">
               <p class=" name font-bold text-[20px]">${inte.name}</p>
               <p class="position font-medium text-[16px] text-gray-500">${inte.position}</p>
               <p class="detail font-medium text-[14px] text-gray-500 my-2.5">${inte.detail}</p>
               <p class="state border-0 bg-primary-content py-3 px-4 mr-[690px] rounded-[5px]">${inte.state}</p>
               <p class="require">${inte.require}</p>
              <div class="flex gap-3">
                 <button  class="inter-batn btn btn-outline btn-success" id="">INTERVIEW</button>

                 <button class="btn btn-outline btn-error reject-batn" id="">REJECTED</button>
               </div>
              </div>
              <div class="dlt">
                <p><i class="fa-regular fa-trash-can"></i></p>
              </div>`
              intersec.appendChild(div)
  }
 }