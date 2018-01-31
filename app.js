function calculateTip() {
    let tipAmount;

    let each = document.getElementById('each');
    each.style.display = 'none';
    // get form input
    let amount = document.getElementById('billAmount').value;
    amount = parseFloat(amount);
    let service = document.getElementById('serviceRating').value;
    service = parseFloat(service);
    let people = document.getElementById('numPeople').value;
    people = isNaN(people) ? 0 : parseInt(people);

    if (!isNaN(amount) && service > 0) {
        // do the math
        tipAmount = (amount * service).toFixed(2);
        if (people > 1) {
            // do the math
            tipAmount = (tipAmount / people).toFixed(2);
            // show "each" for more than one person
            each.style.display = 'block';
        }
        let totalTip = document.getElementById('totalTip');
        // display the tip
        totalTip.style.display = 'block';
        let tip = document.getElementById('tip');
        tip.innerHTML = tipAmount;
    } else {
        alert('Be serious!');
        return;
    }
}
// hide tip amount on load
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

// grab the calculate button
let calcBtn = document.getElementById('calcBtn');

// add listener to click on calcBtn
calcBtn.onclick = function (e) {
    e.preventDefault();
    calculateTip();
};