window.addEventListener('load',()=>{
  let taka =  document.querySelector('#taka-input');
  taka.addEventListener('input',function(e){
    let taka = e.target.value;
    console.log(taka);
    let dollar =  document.querySelector('#usd-output');
    dollar.textContent = (taka*0.012).toFixed(2);
    let euro =  document.querySelector('#Euro-output');
    euro.textContent = (taka*0.0097).toFixed(2);
    let pound =  document.querySelector('#pound-output');
    pound.textContent = (taka*0.0086).toFixed(2);
  });
});
