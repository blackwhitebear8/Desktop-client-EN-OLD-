function redirect(){window.location.href = 'https://enclient.waddleon.net';}
window.addEventListener('DOMContentLoaded', () => {
var url = window.location.href;
  if(url.includes('waddleon.net') == false){
    alert('Oops! This page is not supported, heading back to Waddle On.');
    redirect();
  }

 if(url.includes('enclient.waddleon.net') && (url.includes('waddleon.net') == false)){
  redirect();
}
});