//Diagrama de objeto: PullRequest
/*
PullRequest
+title
+branchName
+dateCreated
+status
+repositoryNameAssociated
+getStatus()
+getTitleAndAutor()  
*/
const pull={
    title:"Constribuccion 1",
    branchName:"main",
    dateCreated:"2022-04-18",
    status:"add",
    repositoryNameAssociated:"hola-mundo",
    actionName:"modified",
    file:"README.md",
    getStatus:function(){
        return this.actionName +" "+ this.file;         
    },
    getTitleAndAuthor:function() {
        return `The pull ${this.title} was created by AngelicaRoy`;
    }
}
console.log("TITULO Y AUTOR:\n"+pull.getTitleAndAuthor());
console.log("PULL REQUEST STATUS:\n"+pull.getStatus());
console.log("FECHA DE CREACIÓN:\n"+pull.dateCreated);