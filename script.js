document.addEventListener("DOMContentLoaded", () => {

    /* Falling hearts */
    for(let i = 0; i < 40; i++){
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "♡";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = 14 + Math.random() * 20 + "px";
        heart.style.animationDuration = 3 + Math.random() * 5 + "s";
        document.body.appendChild(heart);
    }

    const noBtn = document.getElementById("no");
    const yesBtn = document.getElementById("yes");
    const buttons = document.getElementById("buttons");
    const gift = document.getElementById("gift");
    const teddy = document.getElementById("teddy");
    const finalText = document.getElementById("final-text");

    let noClicks = 0;

    noBtn.addEventListener("click", () => {
        noClicks++;

        const noScale = 1 - noClicks * 0.1;
        const yesScale = 1 + noClicks * 0.1;

        noBtn.style.transform = `scale(${noScale})`;
        yesBtn.style.transform = `scale(${yesScale})`;

        buttons.style.gap = `${40 - noClicks * 5}px`;

        if(noClicks >= 7){
            noBtn.style.opacity = "0";
            noBtn.style.pointerEvents = "none";
            buttons.style.justifyContent = "center";
        }
    });

    yesBtn.addEventListener("click", () => {
        document.getElementById("title").style.display = "none";
        buttons.style.display = "none";

        const msg = document.getElementById("message");
        msg.style.display = "block";
        msg.style.opacity = "1";

        setTimeout(() => {
            msg.style.opacity = "0";

            setTimeout(() => {
                msg.style.display = "none";
                gift.style.display = "block";
                gift.style.opacity = "1";
            }, 500);
        }, 1500);
    });

    /* ✅ FIXED GIFT CLICK */
    gift.addEventListener("click", () => {
        gift.style.opacity = "0";

        setTimeout(() => {
            gift.style.display = "none";

            teddy.style.display = "block";
            teddy.style.opacity = "1";

            finalText.style.display = "block";
            finalText.style.opacity = "1";
        }, 400);
    });

});
