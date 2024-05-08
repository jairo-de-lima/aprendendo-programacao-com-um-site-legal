const form = document.querySelector(".formulario-fale-conosco")
const mascf = document.querySelector(".mascara-formulario")

function clickEC() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascf.style.visibility = "visible"    
}
function masc() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascf.style.visibility = "hidden"  

}
