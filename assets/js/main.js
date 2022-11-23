let removeText = document.querySelector(".remove_text")
let text = document.querySelector(".add_text")
let btn = document.querySelector(".btn")
let arr = []
removeText.addEventListener("click", () => {
    text.value = ""
})
var counter_id = 0;
let ul = document.querySelector(".add_li_to_ul")
let ulDiv = document.querySelector(".ul_div")
btn.addEventListener("click", () => {
    if (text.value == "" || text.value.trim() == "" || text.value.length == 0) {
        alert("Doğru daxil edin!")
    } else {
        ulDiv.style.display = "block"
        ulDiv.style.border = "1px solid black"
        ulDiv.style.width = "70%";
        ulDiv.style.borderRadius = "10px"
        ulDiv.style.marginBottom = "5px"
        const icon = document.createElement("i")
        const icon2 = document.createElement("i")

        const checkicon1 = document.createElement("i")
        const checkicon2 = document.createElement("i")
        const edit_icon = document.createElement("i")
        edit_icon.className = "fa-regular fa-pen-to-square"
        edit_icon.style.position = "absolute"
        edit_icon.style.right = "70px"
        edit_icon.style.top = "9px"
        checkicon2.className = "fa-solid fa-circle-check"
        checkicon2.style.display = "none"
        checkicon1.className = "fa-regular fa-circle-check"
        checkicon1.addEventListener("mouseover", (e) => {
            e.target.style.display = "none"
            checkicon2.style.display = "block"
        })
        checkicon2.addEventListener("mouseout", (e) => {
            e.target.style.display = "none"
            checkicon1.style.display = "block"
        })

        icon2.className = "fa-solid fa-circle-xmark"
        icon2.style.display = "none"
        icon.className = "fa-regular fa-circle-xmark"
        icon.addEventListener("mouseover", (e) => {
            e.target.style.display = "none"
            icon2.style.display = "block"
        })
        icon2.addEventListener("mouseout", (e) => {
            e.target.style.display = "none"
            icon.style.display = "block"
        })
        const li = document.createElement("li")
        li.setAttribute('draggable', true);
        counter_id += 1
        li.setAttribute('id', counter_id);
        li.addEventListener('dragstart', (li) => {
            li.dataTransfer.setData("text", li.target.id)
        })
        ul.addEventListener("dragover", (li) => {
            li.preventDefault()
        })
        ul.addEventListener("drop", (li) => {
            const dragedItemId = li.dataTransfer.getData("text")
            ul.append(document.getElementById(dragedItemId))
        })
        li.innerText = text.value;
        li.style.listStyleType = "none"
        li.style.padding = "8px"
        li.style.marginBottom = "8px"
        li.style.position = "relative"
        li.style.paddingRight = "90px";
        li.style.textOverflow = "ellipsis"
        li.style.overflow = "hidden"
        li.style.whiteSpace = "nowrap"
        li.append(icon2)
        li.append(icon)
        li.append(checkicon1)
        li.append(checkicon2)

        li.append(edit_icon)


        edit_icon.addEventListener("click", () => {
            const edit_input = document.createElement("input")
            edit_input.className = "edit_input"
            edit_input.style.position = "absolute"
            edit_input.style.top = "0px"
            edit_input.style.left = "0px"
            edit_input.style.width = "100%"
            edit_input.style.background = "white"
            edit_input.style.height = "43px"
            li.append(edit_input)
            edit_input.value = li.innerText
            edit_input.addEventListener("keyup", (e) => {
                if (e.keyCode === 13) {
                    li.innerText = e.path[0].value
                    li.append(icon2)
                    li.append(icon)
                    li.append(checkicon1)
                    li.append(checkicon2)
                    li.append(edit_icon)
                }
            })
        })


        checkicon1.style.position = "absolute"
        checkicon1.style.top = "10px"
        checkicon1.style.right = "50px"
        checkicon1.addEventListener("click", () => {
            li.style.textDecoration = "line-through"
        })

        checkicon2.style.position = "absolute"
        checkicon2.style.top = "10px"
        checkicon2.style.right = "50px"
        checkicon2.addEventListener("click", () => {
            li.style.textDecoration = "line-through"
        })

        icon.style.position = "absolute"
        icon.style.top = "10px"
        icon.style.right = "30px"
        icon.addEventListener("click", (e) => {
            e.target.parentElement.remove()
            arr.splice(arr.indexOf(e.target.parentElement), 1)
            if (ul.childNodes.length == 0) {
                ulDiv.style.display = "none"
            }
        })

        icon2.style.position = "absolute"
        icon2.style.top = "10px"
        icon2.style.right = "30px"
        icon2.addEventListener("click", (e) => {
            e.target.parentElement.remove()
            if (ul.childNodes.length == 1) {
                ulDiv.style.display = "none"
            }
        })
        ul.append(li)
        arr.push(li)
        text.value = ""

    }
})
let first = document.querySelector("button.srt_1")
let second = document.querySelector("button.srt_2")
second.style.display = "none"
first.addEventListener('click', () => {
    second.style.display = "block"
    first.style.display = "none"
})
second.addEventListener('click', () => {
    second.style.display = "none"
    first.style.display = "block"
})
let resert = document.querySelector(".resert_btn")
resert.addEventListener("click", () => {
    window.location.reload()
})
let search = document.querySelector(".search_area")
search.addEventListener("keyup", () => {
    let arr1 = arr.filter(x => {
        return x.innerText.toLowerCase().includes(search.value.toLowerCase())
    })

    ul.innerHTML = "";
    arr1.forEach(x => {
        ul.append(x)
    })
})