const para = document.querySelector('[data-testid = "shortBio"]');
para.innerText
console.log(para.innerText);

const date = new Date();
document.querySelector(".time").innerHTML = date.toISOString();