const handleForm=()=>{
    let el=document.getElementById('formContainer');
    if(el.style.display=='block')
       el.style.display='none';
   else el.style.display='block';
}
document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();
  let form=document.getElementById('form')
  const formData= new FormData(form);
  console.log("form entries ",...formData.entries())
  const entries=[...formData.entries()];
  let flag=true;
  entries.forEach(element => {
    if(!element[1].length){
        flag=false;
        document.getElementById(element[0]).innerHTML='Required'
    }else document.getElementById(element[0]).innerHTML=null;
   
  });
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(entries[1][1]))
  {
   
    document.getElementById('email').innerHTML=null;
  }
  else {
    flag=false;
  document.getElementById('email').innerHTML='Invalid email';
  }

  if(flag)
  window.location.href='http://productfrontend.infinityfreeapp.com/index.php?i=1'
    // window.location.href='index.php'
})
