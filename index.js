const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase .toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!@#$%^&*()"; 
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword(){
    let data = []
    let password = ""

    if (lowercase.checked) data.push(...dataLowercase)
    if (uppercase.checked) data.push(...dataUppercase)
    if (numbers.checked) data.push(...dataNumbers)
    if (symbols.checked) data.push(...dataSymbols)

    if (data.length === 0) {
        alert("Veuillez sélectionner des criteres")
        return
    }

    for (let i = 0; i < rangeValue.value; i++){
        password += data[Math.floor(Math.random() * data.length)];
        console.log(password);
    }

    passwordOutput.value = password

    passwordOutput.select()
    navigator.clipboard.writeText(passwordOutput.value)

    generateButton.textContent = "Copie !"

    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe"
    }, 3000)
   
}

generateButton.addEventListener("click", generatePassword)

let c = document.getElementById("c");
let ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
let txts = "αβγδεζηθικλμνξοπρστυφχψω∷∫∮∝∞∧∨∑∏∪∩∈∵∴⊥‖∠⌒⊙≌√";
txts = txts.split("");
let font_size = 12;
let columns = c.width / font_size;
let drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;
// console.log(drops)
function draw() {
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#490";
	ctx.font = font_size + "px arial";
	for (let i = 0; i < drops.length; i++) {
		let text = txts[Math.floor(Math.random() * txts.length)];
		ctx.fillText(text, i * font_size, drops[i] * font_size);
		if (drops[i] * font_size > c.height || Math.random() > 0.98) drops[i] = 0;
		drops[i]++;
	}
}
setInterval(draw, 60);


