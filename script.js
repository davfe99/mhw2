/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const card = document.querySelectorAll('.choice-grid div');
const reset_button = document.getElementById('reset_button');
const final_box = document.getElementById('final_box');

let result = [];

for (const item of card) {
    item.addEventListener('click', checked);
}

function checked(event) {

    const selected_card = event.currentTarget;
    const selected_ch_id = selected_card.dataset.choiceId;
    const selected_qu_id = selected_card.dataset.questionId;

    for (const item of card) {
        const unchecked = item.querySelector('.checkbox');
        const checked = item.querySelector('.checked');
        if (item.dataset.choiceId !== selected_ch_id &&
            item.dataset.questionId === selected_qu_id) {
            unchecked.classList.remove('hidden');
            checked.classList.add('hidden');
            item.classList.add('opacity');
            item.classList.remove('change-color');

        } else if (item.dataset.questionId === selected_qu_id) {
            item.classList.remove('opacity')
            item.classList.add('change-color')
            unchecked.classList.add('hidden');
            checked.classList.remove('hidden');
        }
    }

    get_result(selected_ch_id, selected_qu_id);

    let title, text;
    title = document.getElementById('title');
    text = document.getElementById('text');

    if (Object.keys(result).length === 3) {
        for (const item of card) {
            item.removeEventListener('click', checked);
        }
         final_box.classList.remove('hidden');
         if(result[1] === result[2] && result[1] !== result[0]) {

             title.textContent = RESULTS_MAP[result[1]].title;
             text.textContent = RESULTS_MAP[result[1]].contents;
         }else {
             title.textContent = RESULTS_MAP[result[0]].title;
             text.textContent = RESULTS_MAP[result[0]].contents;
             reset_button.addEventListener('click',reset);
         }
    }
}

function reset(){
    result.splice(0);
    final_box.classList.add('hidden');
    for (const item of card) {
        item.addEventListener('click', checked);

        const unchecked = item.querySelector('.checkbox');
        const check = item.querySelector('.checked');

        item.classList.remove('opacity')
        item.classList.remove('change-color')
        unchecked.classList.remove('hidden');
        check.classList.add('hidden');        
    }
    console.log(result);
}

function get_result(ch_id, qu_id) {

    if(qu_id === 'one'){
        result[0] = ch_id;
    }else if (qu_id === 'two'){
        result[1] = ch_id;
    }else {
        result[2] = ch_id;
    }
    console.log(result);
}


