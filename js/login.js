/**
 * Created by anmol on 11/7/17.
 */

let arrReg=[];
let email;
let password;
let loginBtn;
let registerBtn;

$(function () {

    retrieveLocal();
    email=$('#email');
    password=$('#password');
    loginBtn=$('#login');
    registerBtn=$('#Register');

    loginBtn.click(loginClick)

    registerBtn.click(function () {
        window.open("Register.html","_self");
    })

});

function loginClick(ev){

    let a=0;
    let i1=0;


    for(i in arrReg){

        if (arrReg[i].email==email.val() && arrReg[i].password==password.val()){
            a=a-1;
            i1=i;
        }

        else{
              a=a+1;
        }
    }


    if (a==arrReg.length){
        alert("Invalid username or password");
    }
    else{
        localStorage.setItem('IDProfile',arrReg[i1].id);
        window.open("Profile.html","_self");
    }

}

function retrieveLocal(){

    arrReg=JSON.parse(localStorage.getItem('register'))

}