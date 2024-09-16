
 let  allpost = document.querySelector(".allpost")
let name = document.querySelector(".name")
let caption = document.querySelector(".caption")
let  postBtn = document.querySelector(".postBtn")

 let arr = [
]
postBtn.addEventListener("click", ()=>{
  arr.push({
    name:name.value,
    caption:caption.value
  })
  display()
})


function display(){
  arr.map(item=>{
    allpost.innerHTML += `
    <div class="card " style="width: 18rem;">
     <div class="card-body">
       <h1 class="card-title">${item.name}</h1>
       <p class="card-text">${item.caption}</p>
       <button class="btn btn-primary">edit</button>
       <button class="btn btn-danger">delete</button>
     </div>
   </div>
   `
 })
 
}