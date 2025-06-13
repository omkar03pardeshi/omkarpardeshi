
 const form = document.getElementById("form");
 form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch("https://usebasin.com/f/382a05bdc31c", {
   method: "POST",
   headers: {
    "Accept": "application/json",
   },
   body: formData,
  })
  .then((response) => {
   if (response.status === 200) {
    console.log("success");
   } else {
    console.log("fail");
   }
  })
  .catch((error) => console.log(error));
 });
