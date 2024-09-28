const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlusername = urlParams.get("username");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    document.getElementById("home").addEventListener("click", () => {
      const newpage = "../dashboard/dashboard.html";
      let fullurl = newpage + "?username=" + encodeURIComponent(urlusername);
      window.location.href = fullurl;
    });
    document.getElementById("upi").addEventListener("click", () => {
      const newpage = "../1_payment/payment.html";
      let fullurl = newpage + "?username=" + encodeURIComponent(urlusername);
      window.location.href = fullurl;
    });
    //card
    document.getElementById("cardpayment").addEventListener("click", () => {
      const newpage = "../Stripe_Payment/public/checkout.html";
      let fullurl = newpage + "?username=" + encodeURIComponent(urlusername);
      window.location.href = fullurl;
    });
  } catch (error) {
    console.log(error);
  }
});
