//((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a, div')

for(let i = 0; i < text.length; i++){
    let regex = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/i;
    if(text[i].innerHTML.search(regex) !== -1){
        text[i].innerHTML = text[i].innerHTML.replace(new RegExp(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/, "g"), 'CHANGE PLS')
    }
}