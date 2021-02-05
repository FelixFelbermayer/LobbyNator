document.addEventListener('turbolinks:load', (event) => {
    let subheadings = document.querySelectorAll('._h3_subheading')
    let subsections = document.querySelectorAll('._div_subsection')
    let accordion = function(activeInd){
        
        subsections[activeInd].classList.toggle('active')

        subsections.forEach((val, ind) => {
            if(ind != activeInd){
                val.classList.remove('active')
            }
        })
    }

    subheadings.forEach((val, index) =>{
        val.addEventListener('click', function(){
            accordion(index)
        })
    })

})