function Xvid (){
alert("Want to visit Xvid?")
}


function countPopup(){
setTimeout("Popup()",10000);
return false;
}
function Popup(){
  var X = (confirm("Do you want to visit xxVidxxs ?"))
  if (X== true)  {

   document.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
else{

  alert("Ok your loss !")  
}
document.getElementById("demo").innerHTML= txt;
}

