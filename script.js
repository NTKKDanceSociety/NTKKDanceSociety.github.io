document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! We will get in touch with you soon.");
  this.reset();
});
