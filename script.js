const uploadInput = document.getElementById("uploadInput");
const gallery = document.getElementById("gallery");

// Upload Function
uploadInput.addEventListener("change",function () {
    const files = Array.from(this.files);
    files.forEach (file => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src= e.target.result;
            gallery.appendChild(img);
            
        };
        reader.readAsDataURL(file);
    });
});

// 🎵 Start music after user click
const bgMusic = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");
const startOverlay = document.getElementById("startOverlay");

startBtn.addEventListener("click", () => {
  bgMusic.play()
    .then(() => {
      startOverlay.style.display = "none";
    })
    .catch(err => {
      console.error("Music failed to play:", err);
    });
});