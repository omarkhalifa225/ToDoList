let input=document.getElementById('input');
let Addlist=document.getElementById('add');
let listContiner;
let id;
let mood="Add";


if(localStorage.getItem('lists') == null){
  listContiner=[];
}else{
    listContiner=JSON.parse(localStorage.getItem('lists'));
    displyList();
}

function addTask(){
    let lists=
    {
    row:input.value
    }
    if(mood == 'Add'){
        listContiner.push(lists);
    }else{
        listContiner[id]=lists;
        id = null;
        mood="Add"
        Addlist.innerHTML="Add"
    }
    localStorage.setItem('lists',JSON.stringify(listContiner));
    displyList();
    clearForm();
    console.log(listContiner);
}

function displyList(){
    let cartona=``;
    for(let i=0;i<listContiner.length;i++){
        cartona +=`
           <div class="lists">
    <h3>`+listContiner[i].row+`</h3>
    <button class="update" onclick="updatelist(`+i+`);" >Update</button>
    <i onclick="deletelist(`+i+`);" class="delete fa-solid fa-trash" id="delete"></i>
    </div>
        `
    }
    document.getElementById('list').innerHTML=cartona;
}

function clearForm(){
    input.value="";
}

function deletelist(i){
 listContiner.splice(i,1);
 localStorage.setItem('lists',JSON.stringify(listContiner));
 displyList();
}
function updatelist(index){
 id=index;
    input.value=listContiner[index].row;
    mood="Update"
    Addlist.innerHTML="Update"
}
