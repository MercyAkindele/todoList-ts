import "./css/style.css"
import FullList from "./model/FullList"
import ListItem from "./model/ListItem"
import ListTemplates from "./templates/ListTemplates"

const initApp = (): void => {
    const fullList = FullList.instance;
    const templates = ListTemplates.instance;

    const itemEntryForm: HTMLFormElement= document.getElementById("itemEntryForm") as HTMLFormElement;
    itemEntryForm.addEventListener("submit", (e:SubmitEvent): void =>{
        e.preventDefault()
        const input = document.getElementById("newItem") as HTMLInputElement;
        let newEntryText: string = input.value.trim();
        if(!newEntryText.length)return
        const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id)+ 1 : 1;
        const newItem = new ListItem(itemId.toString(), newEntryText)
        fullList.addItem(newItem)

        //added to clear out input field once text has been submitted
        input.value = ""
        templates.render(fullList)
        
        
    })
    const clearItems: HTMLButtonElement = document.getElementById("clearItemsButton") as HTMLButtonElement;
    clearItems.addEventListener("click", (): void =>{
        fullList.clearList()
        templates.clear();
    })
    fullList.load()
    templates.render(fullList) 
}
document.addEventListener("DOMContentLoaded", initApp)