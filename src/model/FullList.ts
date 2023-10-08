import ListItem from "./ListItem";

export interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  edit(id: string, itemValue: string): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();
  private constructor(private _list: ListItem[] = []) {}
  get list(): ListItem[] {
    return this._list;
  }
  public load(): void {
    const thelist: string | null = localStorage.getItem("myList")
    if(typeof thelist !== "string"){
        return
    }
    let parsedList: {
        _id: string, 
        _item: string, 
        _checked: boolean
    }[]= JSON.parse(thelist)
    parsedList.forEach(itemObj =>{
        const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
        FullList.instance.addItem(newListItem)
    })
  }
  public save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }
  public clearList(): void {
    this._list = [];
    this.save();
  }
  //Added the edit method
  public edit(id: string, itemValue: string) {
    let specificItem: ListItem | undefined = this._list.find(
      (item) => item.id === id
    );
    if (specificItem) {
      specificItem.item = itemValue;
    }
    this.save();
  }
  public addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }
  public removeItem(id: string) {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
