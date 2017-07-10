/**
 * Created by anmol on 9/7/17.
 */

let arr=[];
let arrId=[];
let email;
let username;
let password;
let confirmPassword;
let buttonRegis;
let imageUrl;
let id=-1;
$(function(){

    retrieveToLocal()

  email=$('#email')
    username=$('#username');
  password=$('#password');
  confirmPassword=$('#ConfirmPassword');
  buttonRegis=$('#register');
  imageUrl=$('#profileImage');
  buttonRegis.click(function () {

      id=id+1;
      if(checkEmail(email.val())){

          alert('Already Have an Account!!!!!!')

      }
      else if (password.val()==confirmPassword.val()){
         Register(id);
      }else{

          console.log("Error");

      }

  })

});

function objc(id,username,email,password,imageUrl){
    this.id=id;
    this.username=username;
    this.email=email;
    this.password=password;
    this.imageUrl=imageUrl;
}

function Register(id){

    arr.push(new objc(id,username.val(),email.val(),password.val(),imageUrl.val()));
   saveToLocal()

}

function saveToLocal(){
    localStorage.setItem('register',JSON.stringify(arr));
    window.open("RegisterPref.html","_self")
}

function retrieveToLocal(){
    arr=JSON.parse(localStorage.getItem('register'))
    if (arr){
        id=arr[arr.length-1].id;
    }
    else{
        arr=[];
    }
}

function checkEmail(value){

   for(i in arr){
       if (value==arr[i].email){
           return true;
       }
   }
    return false;
}