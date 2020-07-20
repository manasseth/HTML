function getStuff(){
  var list = document.querySelectorAll('#tuna'); /*returns array or list of whatever we type inside it*/
  for(var i=0; i<list.length; i++){
    list[i].onclick=talk;
  }
}
function talk(){
  alert('yoyoma!');
}
window.onload=getStuff; /*calls whenever everything in our webpage gets loaded*/
