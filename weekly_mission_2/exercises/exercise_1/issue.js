/*
Issue
+title
+repositoryNameAssociated
+status
+numberOfComments
+labels
+author
+dateCreated
+lastUpdated
+getTitleAndAuthor()
+getGeneralInfo()
*/
//Diagrama de Objeto: Issue
const issu={
    title:"mi primer issues",
    repositoryNameAssociated:"hola-mundo",
    status:"open",
    numberOfComments:"1",
    labels:"documentation",
    author:"AngelicaRoy",
    dateCreated:"06-02-2022",
    lastUpdated:"08-02-2022",
    getTitleandAuthor: function(){
        return this.title + this.author;
    },
    getGeneralInfo: function(){
        return `The issue ${this.title} was created by ${this.author}`;
    }
}
console.log("TITULO Y AUTOR:\n"+issu.getTitleandAuthor());
console.log("NOMBRE DEL REPOSITORIO ASOCIADO:\n"+issu.repositoryNameAssociated);
console.log("INFORMCIÓN GENERAL:\n"+issu.getGeneralInfo());