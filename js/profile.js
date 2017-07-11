/**
 * Created by anmol on 10/7/17.
 */
let body;
let idProfile;
let arr=[];
let perarr=[]
let newPost=[];
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
let postsTitle;
let postsImageUrl;
let postsTextArea;
let submitPost;
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



     body=$(` 
 
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand">UserMatch</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Community<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Posts</a>
                </li>
                <li class="nav-item pull-right">
                    <a class="nav-link" href="#">Logout</a>
                </li>
            </ul>
         </div>
            </nav>

 
 
         <div class="row">
        <div class="col text-center">
            <br><br>
            <img src="${imageProfile}" alt="Profile Page" height="200px">
            <br><br>
            <h4>${username}</h4>
            <h5>${email}</h5>
        </div>
         <div class="col">
            <br><br>
            <h2>Write Posts</h2>
            <input type="text" id="posts_title" class="form-control" placeholder="Title"><br>
            <input type="text" id="posts_imageUrl" class="form-control" placeholder="imageUrl"><br>
            <textarea id="posts_textArea" placeholder="Write Post">

            </textarea>

            <button class="btn btn-warning pull-right" id="writePostBtn">Write Post</button>

        </div>
        <div class="col" id="scroll">
           ${StringMatch}
         </div>
       </div>
       <br>
      <div class="row" id="posts">
        <div class="col text-center">
            <div class="jumbotron">
                <hr>
                <br>
                <h1>My Posts</h1>
                <br>
            </div>
        </div>
        </div>
    `);

    container.append(body);

    getPosts(2);

   postsTitle=$('#posts_title');
   postsImageUrl=$('#posts_imageUrl');
   postsTextArea=$('#posts_textArea');
   submitPost=$('#writePostBtn');

   submitPost.click(function () {
       let newPost=JSON.parse(localStorage.getItem('posts'))
       if (newPost==null){
            newPost=[];
            newPost.push(new Postobjc(postsTitle.val(),postsImageUrl.val(),postsTextArea.val()));
            localStorage.setItem('posts',JSON.stringify(newPost));
            getPosts();

       }
       else{
           newPost.push(new Postobjc(postsTitle.val(),postsImageUrl.val(),postsTextArea.val()));
           localStorage.setItem('posts',JSON.stringify(newPost));
           getPosts(2);
       }
   });

}

function getPosts(id) {
    let postArr=[];
    let StringPost='';
    postArr=JSON.parse(localStorage.getItem('posts'))


         for(i in postArr){
             StringPost=StringPost+`
             <br>
            <hr>
            <div class="row posts_det" id="${i}">
            <div class="col text-center">
            <img class="pull-left" src="${postArr[i].imageUrl}" height="300px">
            <button class="btn btn-danger pull-right" id="delete_post">Delete</button>
            <h1>${postArr[i].title}</h1>
            <h4>${postArr[i].textArea}</h4>
            </div>
             </div>`

         }

  //  container.empty();
    if (id==1) {
        container.empty();
        container.append(body);
        container.append(StringPost)
    }
    else{
        container.append(StringPost);
    }
    let deletePost=$('#delete_post');

    deletePost.click(deletePostClick)


}

function deletePostClick(ev){

    let id=$(ev.target).parent().parent().attr('id');
    console.log(id);
    let getArr=[];
    getArr=JSON.parse(localStorage.getItem('posts'))
    getArr.splice(id,1);
    console.log(getArr);
    localStorage.setItem('posts',JSON.stringify(getArr))
    getPosts(1)
}

function Postobjc(title,imageUrl,textArea){
    this.title=title;
    this.imageUrl=imageUrl;
    this.textArea=textArea;
}


function pushPerobjc(id,per){
    this.id=id;
    this.per=per;
}