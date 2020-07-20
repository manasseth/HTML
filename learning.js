function getStuff(){
  document.querySelector('#tuna').onclick=talk; /*select everything with the id of tuna, return vrey first element selected*/
}
function talk(){
  alert('yoyoma!');
}
window.onload=getStuff; /*calls whenever everything in our webpage gets loaded*/
