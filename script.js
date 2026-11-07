
const openBtn = document.getElementById("openBtn");
const againBtn = document.getElementById("againBtn");

const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");

const message = document.getElementById("message");

// Nội dung lời chúc
const birthdayMessage = `
Chúc bạn tuổi mới thật nhiều niềm vui! 💗

Mong rằng mọi điều tốt đẹp nhất
sẽ đến với bạn.

Luôn vui vẻ, hạnh phúc,
gặp nhiều may mắn
và đạt được những điều mình mong muốn nhé!

Happy Birthday! 🌷
`;

// Mở thiệp
openBtn.addEventListener("click", () => {
    intro.classList.add("hidden");
    birthday.classList.remove("hidden");

    message.textContent = birthdayMessage;
});

// Xem lại thiệp
againBtn.addEventListener("click", () => {
    birthday.classList.add("hidden");
    intro.classList.remove("hidden");
});

// Tạo trái tim bay
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";

    const symbols = ["💗", "💕", "🌸", "💖", "🌷"];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);
