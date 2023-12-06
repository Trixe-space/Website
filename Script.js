console.warn('Things may not be accurate to an actual command prompt. Btw you can break this site just by holding down enter');
const Buttons = document.querySelectorAll('.menu button');
let CurrentButton = 0;
const Command = document.querySelector('.command');

for (let i = 0; i < 3; i++) {
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
        } else if (i == 2) {
            Command.innerHTML = Command.innerHTML +
                `cd Contacts
                <br>`;
            setTimeout(() => {
                Command.innerHTML = Command.innerHTML +
                    `Email - trixe-space@trixe-space.tk
                    <br>
                    Discord - @trixe_space`;
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
    if (e.key == 'ArrowUp' || e.key == 'ArrowRight') {
        if (CurrentButton != 2) {
            CurrentButton += 1;
        } else {
            CurrentButton = 0;
        }
    } else if (e.key == 'ArrowDown' || e.key == 'ArrowLeft') {
        if (CurrentButton != 0) {
            CurrentButton -= 1;
        } else {
            CurrentButton = 2;
        }
    }
    console.log(CurrentButton);
    AutoFocus();
};