<script>
  // Sab <details> elements select kar rahe hain
  const allDetails = document.querySelectorAll("details");

  allDetails.forEach((targetDetail) => {
    targetDetail.addEventListener("toggle", () => {
      if (targetDetail.open) {
        // Jab ek open ho, dusre close karo
        allDetails.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      }
    });
  });
</script>
