document.addEventListener('DOMContentLoaded', (event) => {
    const toggles = document.querySelectorAll('.togglepart')
    let btn = document.getElementById('toggleEditFormButton')

    let toggle = function(){
        toggles.forEach((val) => {
            val.classList.toggle('disabled')
        })
    }

    btn.addEventListener('click', toggle);
})