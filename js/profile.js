/**
 * Created by anmol on 10/7/17.
 */

let idProfile;
let arr=[];
let perarr=[]
let email;
let imageProfile;
let username;
let genre;
let genrePrio;
let personality;
let personalityPrio;
let eat;
let eatPrio;
let travel;
let travelPrio;
let guitar;
let guitarPrio;
let container;
$(function(){

    retrieveLocal();

    container=$('.container');
    getData()

});

function retrieveLocal(){

    arr=JSON.parse(localStorage.getItem('register'));
    idProfile=localStorage.getItem('IDProfile');

}

function getData(){

    for(i in arr){
        if (arr[i].id==idProfile){
            email=arr[i].email;
            imageProfile=arr[i].imageUrl;
            username=arr[i].username;
            genre=arr[i].genre;
            genrePrio=arr[i].genrePrio;
            personality=arr[i].personality
            personalityPrio=arr[i].personalityPrio
            eat=arr[i].eat;
            eatPrio=arr[i].eatPrio;
            guitar=arr[i].guitar;
            guitarPrio=arr[i].guitarPrio;
            travel=arr[i].travel
            travelPrio=arr[i].travelPrio
        }
    }

    let count=0;

    let StringMatch=''

    for(i in arr){

        if (arr[i].id==idProfile){

        }
        else{

            if (arr[i].genre==genre){
                count=count+(+genrePrio);
            }

            if (arr[i].eat==eat){
                count=count+(+eatPrio);
            }

            if (arr[i].personality==personality){
                count=count+(+personalityPrio);
            }

            if (arr[i].guitar==guitar){
                count=count+(+guitarPrio);
            }

            if (arr[i].travel==travel){
                count=count+(+travelPrio);
            }

            console.log(count)
            let sum=(+genrePrio)+(+eatPrio)+(+personalityPrio)+(+guitarPrio)+(+travelPrio);
            console.log(genrePrio)
            console.log(eatPrio)
            console.log(personalityPrio)
            console.log(guitarPrio)
            console.log(travelPrio)

            console.log(sum);
            console.log(count/sum)
            let percentage=((count/sum)*100).toFixed(1);

         //   perarr.push(new pushPerobjc(i,percentage));

            StringMatch=StringMatch+`<br>
                 <img src="${arr[i].imageUrl}" height="50px">
                 <h5>${arr[i].username}</h5>
                  <h6>Match ${percentage}%</h6>
                    <h6>${arr[i].email}</h6>`

        }

    }


    putData(StringMatch);

}

function putData(StringMatch){



    let body=$(`  <div class="row">
        <div class="col text-center">
            <br><br>
            <img src="${imageProfile}" alt="Profile Page" height="200px">
            <br><br>
            <h4>${username}</h4>
            <h5>${email}</h5>
        </div>
        <div class="col" id="scroll">
           ${StringMatch}
         </div>  
    `);

    container.append(body);

}

function pushPerobjc(id,per){
    this.id=id;
    this.per=per;
}