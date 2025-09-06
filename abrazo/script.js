const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Te veo el Lunes 🙃🚀​​";
  gif.src =
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmI1eW1yemkyYjRmczM3cXpqdjZ5bjN4MTg3NDgza281enMxZzBwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/odIt5RqXhRsDm/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


document.addEventListener('click', () => {
    const audio = document.getElementById('myAudio');
    if (audio.muted) {
      audio.muted = false; // Desactiva el silencio
    audio.play();
    }
});
