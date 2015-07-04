/*global  pass:false, codedpass:false */
function encrypt(keytyp,keyid,pubkey,salt)
{
 var text=document.getElementById('login_form').pass.value+'@'+Math.floor(Math.random()*100000000)+salt;
 document.getElementById('login_form').codedpass.value=doEncrypt(keyid, keytyp, pubkey, text);
 document.getElementById('login_form').pass.value="";
 document.getElementById('login_form').submit();
}
