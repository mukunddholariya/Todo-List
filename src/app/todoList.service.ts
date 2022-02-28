export class TodoListService {
    tasks:{name: string, priority: string}[] = [];

    addList(name: string, priority: string){
        this.tasks.push({name: name, priority: priority });
    }

    deleteList(index: number){
        this.tasks.splice(index,1);
    }
}