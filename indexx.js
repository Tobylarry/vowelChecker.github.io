let input = document.getElementById('input');
let result = document.getElementById('result');
let btn = document.getElementById('btn');

btn.addEventListener("click", issVowel)

function issVowel() {
    let count = 0
    let letters = input.value
    if (letters.length < 1) {
        result.innerHTML = "Input more than 2 strings!!!"
        location.reload()
    } else {
        for (let i = 0; i < letters.length; i++) {
            let a = letters[i]
            if (a.match(/([a, e, i, o, u])/)) {
                count++
            }

        }
        result.innerHTML = "There are " + count + " vowels in this string";
    }

}