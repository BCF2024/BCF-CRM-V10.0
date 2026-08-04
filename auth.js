const USERS_KEY="bearcrest_users_v11";
const SESSION_KEY="bearcrest_session_v11";
const LEGACY_AUTH_KEY="bearcrest_auth_v4_1_clean";

function userDefaults(){
  let legacy={};try{legacy=JSON.parse(localStorage.getItem(LEGACY_AUTH_KEY)||"{}");}catch{}
  return [{id:"admin",fullName:"Joel Vazquez",username:legacy.username||"admin",password:legacy.password||"BearCrest2026!",role:"Administrator",active:true,mustChange:legacy.mustChange!==false,createdAt:new Date().toISOString()}];
}
function getUsers(){try{const u=JSON.parse(localStorage.getItem(USERS_KEY)||"null");return Array.isArray(u)&&u.length?u:userDefaults();}catch{return userDefaults();}}
function saveUsers(users){localStorage.setItem(USERS_KEY,JSON.stringify(users));}
if(!localStorage.getItem(USERS_KEY))saveUsers(userDefaults());
function getCurrentUser(){try{const s=JSON.parse(sessionStorage.getItem(SESSION_KEY)||"null");if(!s||Date.now()>s.expiresAt)return null;return getUsers().find(u=>u.id===s.userId&&u.active)||null;}catch{return null;}}
function sessionValid(){return !!getCurrentUser();}
function startSession(user){sessionStorage.setItem(SESSION_KEY,JSON.stringify({userId:user.id,expiresAt:Date.now()+60*60000}));}
function unlock(){document.body.classList.remove("auth-locked");document.getElementById("loginScreen")?.classList.add("hidden");document.dispatchEvent(new CustomEvent("bearcrest:user-login",{detail:getCurrentUser()}));}
function lock(){document.body.classList.add("auth-locked");document.getElementById("loginScreen")?.classList.remove("hidden");}
function validPassword(v){return String(v||"").length>=10;}
window.BearCrestAuth={getUsers,saveUsers,getCurrentUser,isAdmin:()=>getCurrentUser()?.role==="Administrator"};

document.addEventListener("DOMContentLoaded",()=>{
 const loginForm=document.getElementById("loginForm"),loginError=document.getElementById("loginError"),username=document.getElementById("loginUsername"),password=document.getElementById("loginPassword"),toggle=document.getElementById("togglePasswordBtn"),logout=document.getElementById("logoutBtn"),changeForm=document.getElementById("passwordChangeForm");
 if(sessionValid())unlock();else lock();
 if(toggle)toggle.onclick=()=>{const v=password.type==="text";password.type=v?"password":"text";toggle.textContent=v?"Show":"Hide";};
 loginForm?.addEventListener("submit",e=>{e.preventDefault();const user=getUsers().find(u=>u.active&&u.username.toLowerCase()===username.value.trim().toLowerCase()&&u.password===password.value);if(!user){loginError.textContent="The username or password is incorrect, or this account is disabled.";return;}loginError.textContent="";startSession(user);unlock();password.value="";if(user.mustChange){const d=document.getElementById("passwordChangeDialog");if(d&&!d.open)d.showModal();}});
 changeForm?.addEventListener("submit",e=>{e.preventDefault();const p1=document.getElementById("firstNewPassword").value,p2=document.getElementById("firstConfirmPassword").value,error=document.getElementById("passwordChangeError"),current=getCurrentUser();if(!validPassword(p1)){error.textContent="Use at least 10 characters.";return;}if(p1!==p2){error.textContent="The passwords do not match.";return;}const users=getUsers(),u=users.find(x=>x.id===current.id);u.password=p1;u.mustChange=false;saveUsers(users);error.textContent="";document.getElementById("passwordChangeDialog").close();alert("Your new password has been saved.");});
 logout?.addEventListener("click",()=>{sessionStorage.removeItem(SESSION_KEY);location.reload();});
});
