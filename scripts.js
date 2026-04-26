let count = 1240;
function joinWaitlist(){
  const name=document.getElementById('nameInput').value.trim();
  const email=document.getElementById('emailInput').value.trim();
  if(!name){document.getElementById('nameInput').style.borderColor='#e07b54';document.getElementById('nameInput').focus();return}
  if(!email||!email.includes('@')){document.getElementById('emailInput').style.borderColor='#e07b54';document.getElementById('emailInput').focus();return}
  try{const e=JSON.parse(localStorage.getItem('terraai')||'[]');e.push({name,email,date:new Date().toISOString()});localStorage.setItem('terraai',JSON.stringify(e))}catch(e){}
  count++;
  document.getElementById('countDisplay').textContent=count.toLocaleString()+' people already waiting';
  document.getElementById('formContent').style.display='none';
  document.getElementById('successMsg').style.display='block';
}
function joinCTA(){
  const email=document.getElementById('ctaEmail').value.trim();
  if(!email||!email.includes('@')){document.getElementById('ctaEmail').style.borderColor='rgba(255,255,255,0.8)';return}
  document.getElementById('ctaEmail').value='';
  document.getElementById('ctaMsg').style.display='block';
}