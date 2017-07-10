/**
 * Created by anmol on 9/7/17.
 */

let button;

let arr=[]
$(function () {

    retrieve();

    button=$('#submit');

    button.click(clickButt);





});

function retrieve(){
    arr=JSON.parse(localStorage.getItem('register'));
}
function clickButt(ev){

    let id=arr[arr.length-1].id;
    let email=arr[arr.length-1].email;
    let username=arr[arr.length-1].username;
    let password=arr[arr.length-1].password;
    let genre=$('input[name="genre"]:checked').val()
    let personality=$('input[name="personality"]:checked').val()
    let eat=$('input[name="eat"]:checked').val()
    let guitar=$('input[name="guitar"]:checked').val()
    let travel=$('input[name="travel"]:checked').val();
    let genrePrio=$('#genrePrio').val();
    let persoanlityPrio=$('#personalityPrio').val();
    let eatPrio=$('#eatPrio').val()
    let guitarPrio=$('#guitarPrio').val();
    let travelPrio=$('#travelPrio').val();

    arr.splice(arr.length-1,1);

    arr.push(new objc(id,username,email,password,genre,genrePrio,personality,persoanlityPrio,eat,eatPrio,guitar,guitarPrio,travel,travelPrio));

    saveToLocal();
}

function objc(id,username,email,password,genre,genrePrio,personality,personalityPrio,eat,eatPrio,guitar,guitarPrio,travel,travelPrio){

    this.id=id;
    this.username=username;
    this.email=email;
    this.password=password;
    this.genre=genre;
    this.genrePrio=genrePrio;
    this.personality=personality;
    this.personalityPrio=personalityPrio;
    this.eat=eat;
    this.eatPrio=eatPrio;
    this.guitar=guitar;
    this.guitarPrio=guitarPrio;
    this.travel=travel;
    this.travelPrio=travelPrio;

}

function saveToLocal(){
    localStorage.setItem('register',JSON.stringify(arr));
}