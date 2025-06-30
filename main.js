const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch(error => {
          const modal = document.getElementById("modal");
          const modalMessage = document.getElementById("modal-message");
          modal.classList.remove("hidden");
          modalMessage.textContent = error;

          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});


