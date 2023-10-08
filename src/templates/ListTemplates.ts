import FullList from "../model/FullList";
export interface DomList{
    ul:HTMLUListElement,
    clear():void,
    render(fullList: FullList): void,
}

export default class ListTemplates implements DomList{
    static instance: ListTemplates = new ListTemplates();
    ul:HTMLUListElement;
    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    } 
    clear():void{
        this.ul.innerHTML= ""
    }
    render(fullList: FullList): void{
        this.clear();
        fullList.list.forEach((item)=> {
            let li: HTMLLIElement= document.createElement("li") as HTMLLIElement;
            li.classList.add("item")
            let check: HTMLInputElement = document.createElement("input") as HTMLInputElement;
            check.type = "checkbox"
            check.id = item.id
            check.tabIndex = 0
            check.checked = item.checked
            li.append(check)
            check.addEventListener("change", () =>{
                item.checked = !item.checked
                fullList.save()
            })
            let label: HTMLLabelElement= document.createElement("label") as HTMLLabelElement
            label.htmlFor = item.id;
            label.textContent = item.item;
            li.append(label)

            let delButton: HTMLButtonElement= document.createElement("button") as HTMLButtonElement;
            delButton.classList.add("button")
            delButton.textContent = "X"
            li.append(delButton)
            delButton.addEventListener("click", () =>{
                fullList.removeItem(item.id)
                this.render(fullList)
            })
            //Added edit functionality
            let editButton: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
            editButton.classList.add("edit-button")
            editButton.id = item.id
            editButton.textContent = "Edit"
            li.append(editButton)

            let editInput: HTMLInputElement = document.createElement("input") as HTMLInputElement;
            editInput.type = "text";
            editInput.value = item.item;
            editInput.style.display = "none"
            li.append(editInput)
            
            editButton.addEventListener("click", () =>{
                editInput.style.display = "inline";
                label.style.display = "none";
                editInput.focus();
            })
            editInput.addEventListener("blur", ()=>{
                let newItemValue = editInput.value;
                fullList.edit(item.id, newItemValue)

                label.textContent = newItemValue;
                label.style.display = "inline";
                editInput.style.display = "none";

                fullList.save();
                ListTemplates.instance.render(fullList);
            })
            
            
            
            
            this.ul.append(li)

        })
        
    }
}