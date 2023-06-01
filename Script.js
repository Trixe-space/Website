console.warn('Things may not be accurate to an actual command prompt. Btw you can break this site just by holding down enter');
const Buttons = document.querySelectorAll('.menu button');
let CurrentButton = 0;
const Command = document.querySelector('.command');

//TODO add keyboard inputs

for (let i = 0; i < 2; i++) {
    Buttons[i].addEventListener('focus', () => {
        Buttons[i].innerText = '> ' + Buttons[i].innerText;
        CurrentButton = i;
    });
    Buttons[i].addEventListener('focusout', () => {
        Buttons[i].innerText = Buttons[i].innerText.replace('> ', '');
    });

    Buttons[i].addEventListener('click', () => {
        if (i == 0) {
            Command.innerHTML = Command.innerHTML +
                `cd About me
                <br>`;
            setTimeout(() => {
                Command.innerHTML = Command.innerHTML +
                    `I am Trixe space. I exist. Me is dumb. I live in Bangladesh. I like to watch Youtube all day. I sometimes code I guess. I am not too good at it. I also have been trying to learn illustration. Uhhhhhhhh what else do I say?`;
            }, 80);
        } else if (i == 1) {
            Command.innerHTML = Command.innerHTML +
                `cd Socials
                <br>`;
            setTimeout(() => {
                Command.innerHTML = Command.innerHTML +
                    `Youtube - <a href="https://www.youtube.com/@Trixe-space">https://www.youtube.com/@Trixe-space</a>
                    <br>
                    Github - <a href="https://github.com/Trixe-space">https://github.com/Trixe-space</a>`;
            });
        }
        setTimeout(() => {
            Command.innerHTML = Command.innerHTML +
                `<br><br>
                C:\\Users\\Trixe space>`;
        }, 100);
    });
}

let AutoFocus = () => {
    Buttons[CurrentButton].focus();
};

AutoFocus();

document.onkeydown = e => {
    if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
        CurrentButton = CurrentButton == 0 ? 1 : 0;
    }
    AutoFocus();
};