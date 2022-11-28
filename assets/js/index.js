


document.querySelectorAll('.goto').forEach((val) => {
    val.addEventListener('click',() => {
        var element = document.querySelector(val.dataset.go);
        window.scroll({
        top: element.offsetTop - 100,
        behavior: 'smooth'
        });
    })
})






function openPopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';



    overlay.addEventListener('click',(e)=>{
        if (e.target == overlay){
            overlay.style.display = 'none';
        }
    })


}


function closePopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = "none";
}


(
    () => {
            document.querySelectorAll('.get_started').forEach((el) =>{
                el.addEventListener('click',openPopup);
            });
    }
)();