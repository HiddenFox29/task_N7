// 1кг = 7716ккол
// 2900 ккал норма
function calculate(){
    let yourWeight = prompt('ваш вес');
    let wantWeight = prompt('желаемый вес');
    let timeToGol = prompt('время достижения в неделях');
    let result = null;
    let substraction = 7719-2990;
    timeToGol = timeToGol * 7;
    yourWeight = yourWeight * substraction;
    wantWeight = wantWeight * substraction;
    if (yourWeight > wantWeight) {
        result = ((yourWeight - wantWeight)/timeToGol).toFixed(2)
        alert('вам нужно терять ' + result + ' ккал в день')
    }
    else if (yourWeight < wantWeight) {
        result = ((wantWeight - yourWeight)/timeToGol).toFixed(2)
        alert('вам нужно набирать ' + result + ' ккал в день')

    } else{alert('вы достигли желаемого')}
}

calculate();

if (confirm('Желаете повторить расчеты?')){
    calculate()
 }