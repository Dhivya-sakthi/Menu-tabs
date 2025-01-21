function showTab(index)
        {
            let tabContents = document.getElementsByClassName("content");
            for(let i =0;i<tabContents.length;i++){
                tabContents[i].classList.remove("active");
            }
            tabContents[index].classList.add("active");
        }