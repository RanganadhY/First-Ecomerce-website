// let atag = document.querySelectorAll("form .checking-q1");
// console.log(atag);
// atag.forEach((s) =>{
//     s.addEventListener("click",(s)=>{
//         console.log(s);
//         if(s.path[1].children.length==2 && [...s.path[0].classList].includes("check-option")){
//             s.path[1].removeChild(s.path[1].children[1]);
//             s.path[0].classList.remove("check-option")
//         }else{
//         const span = document.createElement("span");
//         console.log(span);
//         span.innerHTML = "";
//         s.path[1].appendChild(span);
//         s.path[1].children[1].classList.add("q1check");
//         s.path[0].classList.add("check-option")
//         // console.log(s);
//         }
//     })
// })

// let check_border = document.querySelectorAll("form .checking-q1");
// // console.log(check);
// check_border.forEach((c)=>{
//     c.addEventListener("click",(c)=>{
//         console.log(c);
//         if(c.path[0].classList.length == 1){
//             c.path[0].classList.add("check-option")
//         }
//         else{
//             c.path[0].classList.remove("check-option")
//         }
//     })
// })