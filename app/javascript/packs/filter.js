document.addEventListener('turbolinks:load', (event) => {
    var filtersection = document.querySelector("._section_pagemeta")
    
    var filterbutton = document.querySelectorAll(".openfilters")
    var closebutton = document.getElementById("closefilters")
    var applybutton = document.getElementById("applyfilters")    

    var filtercategories = document.querySelectorAll("._div_filtercategory")
    var catbuttons1 = document.querySelectorAll("._btn_cat")
    var catbuttons2 = document.querySelectorAll("._btn_cat2");
    
    let setClassInArray = function(arr, ind, classname){
        arr.forEach((element, index) => {
            if(index != ind && element.classList.contains(classname)){
                element.classList.remove(classname)
            }else if(ind == index){
                element.classList.add(classname)
            }
        })
    }

    let setSections = function(actindex){
        filtercategories.forEach((element, index) => {
            if(index != actindex 
                && !element.classList.contains("disabled")){
                element.classList.add("disabled")
            }else if(index == actindex){
                element.classList.remove("disabled")
            }
        })
    }

    let setMenu = function(actindex){
        setClassInArray(catbuttons1, actindex, "active")
        setClassInArray(catbuttons2, actindex, "active")
    }

    catbuttons1.forEach((element, index) => {
        element.addEventListener('click', function(){
            setSections(index)
            setMenu(index)
        })
    })

    catbuttons2.forEach((element, index) => {
        element.addEventListener('click', function(){
            setSections(index)
            setMenu(index)
        })
    })

    filterbutton.forEach(e => {
        e.addEventListener('click', function(){
            if (filtersection.classList.contains("disabled")){
                filtersection.classList.remove("disabled")
            }
        })
    })
    
    closebutton.addEventListener('click', function(){
        if (!filtersection.classList.contains("disabled")){
            filtersection.classList.add("disabled")
        }
    })

    let filtersearch = document.getElementById("filtersearch")
    let concfilters = document.querySelectorAll("._p_filterelement")
    let selectedfilters = Array.from(document.querySelectorAll(".selected")).map(e => e.innerText)
    let selcont = document.getElementById("selectedFilters")
    let formcont = document.getElementById("selectedform")

    console.log(selectedfilters)

    let filterClick = function(element){
        if(element.classList.contains("selected")){
            selectedfilters = selectedfilters.filter(f => f != element.innerText)
            Array.from(concfilters).filter(f => f.innerText == element.innerText).forEach(e => {
                e.classList.remove("selected")
            })
        }else{
            selectedfilters.push(element.innerText)
            element.classList.add("selected")
        }
        updateSelectedUI()
    }

    let updateSelectedUI = function(){
        selcont.innerHTML = ""
        formcont.innerHTML = ""
        selectedfilters.forEach(f => {
            let p = document.createElement("p")
            p.classList.add("_p_info")
            p.classList.add("_p_filterelement")
            p.classList.add("selected")
            p.classList.add("immutable")
            p.textContent = f
            p.addEventListener('click', function(){
                filterClick(p)
            })
            selcont.appendChild(p)
            
            let i = document.createElement("input")
            i.type = "text"
            i.disabled = true
            i.name = "filter[]"
            i.value = f
            formcont.appendChild(i)

            let j = document.createElement("input")
            j.type = "hidden"
            j.name = "filter[]"
            j.value = f
            formcont.appendChild(j)
            
        })
    }

    concfilters.forEach(element => {
        element.addEventListener('click', function(){
            filterClick(element)
        });
    });

    filtersearch.addEventListener('keyup', function(){
        Array.from(concfilters).forEach(element => {
            if(element.classList.contains("immutable") == false 
            && element.innerText.toLowerCase().includes(filtersearch.value.toLowerCase()) == false){
                element.classList.add("hidden")
            }else{
                element.classList.remove("hidden")
            }
        })
    })

    updateSelectedUI()
})
