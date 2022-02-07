/*    M E N U    */
function toggleMenu(){
    document.getElementById("menuNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

/*    D A T E    */

// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("#currentDate"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options -> more options

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

/*    B A N N E R    */
let day = now.getDay();
const banner = document.querySelector("#banner");