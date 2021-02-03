document.addEventListener('DOMContentLoaded', (event) => {
    var filtercategories = document.querySelectorAll('._li_filtercategory')
    var filterlists = document.querySelectorAll('._ul_filters')
    var singlefilters = document.querySelectorAll('._li_singlefilter')
    var search = document.getElementById("filtersearch")

    var toggleDisplays = function(activeIndex){
        filtercategories.forEach((val, index) => {
            if(index == activeIndex){
                val.classList.add('active')
            }else{
                val.classList.remove('active');
            }
        })

        filterlists.forEach((val, index) => {
            if(index == activeIndex){
                val.classList.remove('disabled')
            }else{
                val.classList.add('disabled')
            }
        })
    }

    var toggleClass = function(element,classname) {
        element.classList.toggle(classname)
    }

    var filterInputs = function(matchText){
        Array.from(singlefilters)
            .forEach(s => s.innerText.toLowerCase().includes(matchText.toLowerCase()) ? s.classList.remove('disabled') : s.classList.add('disabled') )        
    }

    filtercategories.forEach((val, index) => {
        val.addEventListener('click', function(){
            toggleDisplays(index)
        })

    })

    singlefilters.forEach((val) => {
        val.addEventListener('click', function(){
            toggleClass(val, 'active')
        })
    })

    search.addEventListener('keyup', function(){
        filterInputs(search.value)
    })
})