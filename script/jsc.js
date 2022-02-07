
  
function disable_rc() {
    document.addEventListener('contextmenu', 
            event => event.preventDefault());
  
}
disable_rc()