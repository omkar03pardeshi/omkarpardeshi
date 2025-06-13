

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

 const form = document.getElementById("form");
 form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  axios
   .post("https://usebasin.com/f/382a05bdc31c", formData, options)
   .then((response) => {
    if (response.status === 200) {
     console.log("success");
    } else {
     console.log("fail");
    }
   })
   .catch((error) => console.log(error));
 });
