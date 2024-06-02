const url = "./data.json";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`ошибка - ${error}`);
  }
}
const data = await fetchData(url);

// const fs = require("fs");
// const dataFile = fs.readFileSync('./data.json', 'utf8')
// let data = JSON.parse(dataFile);

const lessonsElement = document.querySelector(".lessons")
Object.keys(data.lessons).forEach(element => {
    lessonsElement.insertAdjacentHTML(
        "beforeend", 
        `
        <div class="oneLesson">
            <div class="lessonData">
                <p class="lessonName">Lesson name: ${element}</p>
                <p class="lessonMaxStudents">Maximum Students: ${data.lessons[element].maxStudents} </p>
                <p class="lessonNowStudents">Now Students: ${data.lessons[element].nowStudents} </p>
                <button class="glow-on-hover enterLesson" type="button">Записаться</button>
            </div>
        </div>
        `
    )
    }
)

/*
        Мне кажется, что вместо того, чтобы весить addEventListener на родительский элемент (в моем случае lessons), как это было на семинаре, лучше сделать конструкцию из querySelectorAll на все кнопки "Записаться";
        Это связано с тем, что в моем случае консоль не будет выводить null при нажатии не на кнопку, а при клике на область lessons - постоянно выводит null, если нажимать не на кнопку- а на область элементов.
*/
const enterLessonButton = document.querySelectorAll(".enterLesson")
enterLessonButton.forEach(element => {
    element.addEventListener('click', event => {
        const enterLessonItem = event.target.closest(".oneLesson")
        const clickedLesson = data.lessons[enterLessonItem.querySelector('.lessonName').textContent.split(": ", 2)[1]];
        if (clickedLesson.nowStudents >= clickedLesson.maxStudents) {
            alert("Максимальное количество участников, запись недоступна")
            const enteredLessonButton = enterLessonItem.querySelector('.enterLesson')
            /*
                Кнопока станет disabled после объяснения причины
            */
            enteredLessonButton.classList.remove('glow-on-hover')
            enteredLessonButton.classList.add('disabled-button')
            enteredLessonButton.setAttribute("disabled", "")
        } else {
            clickedLesson.nowStudents += 1;
            enterLessonItem.querySelector('.lessonNowStudents').textContent = `Now Students: ${clickedLesson.nowStudents}`;
        }
    })
})
/* 
    Для изменеия Data.json применил бы конструкцию 
    fs.writeFileSync();
    И перезаписал бы JSON
*/



