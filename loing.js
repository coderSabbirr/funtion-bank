document.getElementById('loing-button').addEventListener('click',function(){
    // get user email 
   const emailFiled =document.getElementById('user-email');
   const userEmail = emailFiled.value;
   
   // get user password
   const passwordFiled = document.getElementById('user-password');
   const userPassword =passwordFiled.value;
   if(userEmail == 'abc@mail.com' && userPassword == '1234') {
       console.log('valid user');
       window.location.href='banking.html';
   }
   else {
       alert('worng password');
   }
})