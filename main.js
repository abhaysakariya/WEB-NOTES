console.log('Abhay Sakariya');
shownote();
let addbtn = document.getElementById('addbtn');
/*
let plusicon = document.getElementById('plusicon');

plusicon.addEventListener('click', function(){
  document.getElementById('cardbody').style.display = 'block';
  this.style.display = 'none';
  document.getElementById('xicon').style.display = 'block';
});

let xicon = document.getElementById('xicon');

xicon.addEventListener('click',function(){
  document.getElementById('cardbody').style.display = 'none';
  plusicon.style.display = 'block';
  document.getElementById('xicon').style.display = 'none';
});

*/
addbtn.addEventListener('click', function(){
  let addtitle = document.getElementById('addtitle');
  
  let adddisc = document.getElementById('adddis');
  if(addtitle.value == ''){
    if(adddisc.value == ''){
      alert('Please Add The Title And Discription First!');
      return;
    }
  }
  
  let notes = localStorage.getItem('notes');
  if(notes == null){
    notesobj = [];
  }else{
    notesobj = JSON.parse(notes);
  }
  let myobj = {
    title: addtitle.value,
    disc: adddisc.value
  }
  notesobj.push(myobj);
  localStorage.setItem('notes',JSON.stringify(notesobj));
  addtitle.value = '';
  adddisc.value = '';
  shownote();
});


function shownote(){
  let notes = localStorage.getItem('notes');
  if(notes == null){
    notesobj = [];
  }else{
    notesobj = JSON.parse(notes);
  }
  let card = "";
  notesobj.forEach(function(element, index){
    card += `<div class="card sh bg-primary text-white" id='showcard'>
  <h5 class="card-header">${element.title}<button type="submit" class="btn btn-dark impbtn " id="impbtn1">IMP</button></h5>
  <div class="card-body">
    <p class="card-text disc" id="disc">${element.disc}</p><hr>
    <div class="notebtndiv">
    <a href="#" id="${index}" onclick="deletenote(this.id)" class="btn btn-dark deletebtn">Delete</a>
	 <button type="button" id="btn-pop" class="btn btn-dark" style="margin-left:.5rem;" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="${element.disc}">
  View
</button>
      </div>
  </div>
</div>
`;
  });
  
  let notediv = document.getElementById('notesdiv');
  
  if(notesobj.length != 0){
    notediv.innerHTML = card;
  }else{
    notediv.innerHTML = '<h3 class="nothing">Nothing To Show Here Lets Add Some Notes!</h3>'
  }
}

function deletenote(id){
  let notes = localStorage.getItem('notes');
  if(notes == null){
    notesobj = [];
  }else{
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(id, 1);
  localStorage.setItem('notes',JSON.stringify(notesobj));
  
  shownote();
}



$('#impbtn1').click(function(){
  $(this).toggleClass('imp');
});
 

// jquery 
$("#plusicon").click(function(){
	$("#cardbody").slideToggle(500);
	$(this).toggleClass("plusicon xicon")
});

$("#custom-nav-btn").click(function(){
  $("#custom-nav").slideToggle(500);
});

$('#darkmode').change(function(){
  $('#background').toggleClass('bg_dark bg_white')
  // $(this).toggleClass('dark white');
});

$('.deletebtn').click(function(){
  $('#showcard').fadeOut();
});
$(function () {
  $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
  trigger: 'focus'
})

$("a#addbtn, .notebtndiv a").click(function(){
	  $('[data-toggle="popover"]').popover()

$('.popover-dismiss').popover({
  trigger: 'focus'})
});
