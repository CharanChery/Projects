async function fetchData() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlusername = urlParams.get("username");
  console.log(urlusername); // charan
  try {
    const getcoin = await axios.post('http://localhost:5501/api/v2/getcoins',{urlusername: urlusername});
    points.textContent = getcoin.data.data
    const response = await axios.get('http://localhost:5501/api/v2/getProfiledetails/',{
    params:{
        username: urlusername
    }
    });
    const fetchedUsername = response.data.username;
    const fetchedemail = response.data.email;
    const fetchedfullname = response.data.fullname;
    const fetchedcoins = response.data.coins;
    const uin = document.getElementById("user-name");
    uin.textContent = fetchedUsername;
    const ein = document.getElementById("email");
    ein.textContent = fetchedemail;
    const fullname = document.getElementById("fullname");
    fullname.textContent = fetchedfullname;
    const coins = document.getElementById("coins");
    coins.textContent = fetchedcoins;
    
  } catch (error) {
    console.log(error);
  }
}
const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlusername = urlParams.get("username");
document.getElementById('home').addEventListener('click',()=>{
  const newpage = '../dashboard/dashboard.html'
  let fullurl = newpage+'?username='+encodeURIComponent(urlusername)
  window.location.href =fullurl 
})

document.getElementById('allProducts').addEventListener('click',()=>{
  const newpage = '../All-products/all.html'
  let fullurl = newpage+'?username='+encodeURIComponent(urlusername)
  window.location.href =fullurl
})
// myRepo

document.getElementById('myRepo').addEventListener('click',()=>{
  const newpage = '../Myrepo/repo.html'
  let fullurl = newpage+'?username='+encodeURIComponent(urlusername)
  window.location.href =fullurl
})
document.getElementById('paymentGateway').addEventListener('click',()=>{
  const newpage = '../1_payment/demo.html'  
  let fullurl = newpage+'?username='+encodeURIComponent(urlusername)
  window.location.href =fullurl
})

document.getElementById('notificationbell').addEventListener('click',()=>{
  const newpage = '../notificationfolder/notif.html'
  // C:\Users\chokk\OneDrive\Desktop\axios\public\notificatiofolder\notif.html
  let fullurl = newpage+'?username='+encodeURIComponent(urlusername)
  window.location.href =fullurl 
})

document.getElementById('profile').addEventListener('click',()=>{
  const newpage = '../Profilepage/profile.html'
  let fullurl = newpage +'?username='+encodeURIComponent(urlusername)
  window.location.href =fullurl 
})
document.getElementById('logout1').addEventListener('click',()=>{
  const newpage = '../login.html'
  let fullurl = newpage//+'?username='+encodeURIComponent(urlusername)
  window.location.href =fullurl 
})  
document.getElementById('logout2').addEventListener('click',()=>{
  const newpage = '../login.html'
  let fullurl = newpage//+'?username='+encodeURIComponent(urlusername)
  window.location.href =fullurl 
})  
fetchData();
