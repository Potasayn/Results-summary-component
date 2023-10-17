const icon = document.querySelectorAll('.box__summary-score-img')
const category = document.querySelectorAll('.box__summary-score-category')
const score = document.querySelectorAll('.box__summary-score-num')

async function getData() {
    try{
        const res = await fetch('data.json')
        const data = await res.json();

        data.forEach((el, index) => {
            icon[index].src = el.icon
            category[index].textContent = el.category
            score[index].textContent = el.score
           
        });

    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

getData();