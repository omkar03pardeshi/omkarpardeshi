
  function showOptions(e) {
      const popup = document.getElementById('popup');
      popup.style.display = 'block';
      popup.style.left = e.pageX + 'px';
      popup.style.top = e.pageY + 'px';
    }

    function makeCall() {
      window.location.href = 'tel:+919309186692';
    }

    function sendWhatsApp() {
      const message = encodeURIComponent("Hi Omkar, I got your number from your website!");
      const phone = "919309186692"; // without + sign
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    }

    // Hide popup when clicking outside
    window.addEventListener('click', function(e) {
      const popup = document.getElementById('popup');
      if (!popup.contains(e.target) && !e.target.classList.contains('phone')) {
        popup.style.display = 'none';
      }
    });
