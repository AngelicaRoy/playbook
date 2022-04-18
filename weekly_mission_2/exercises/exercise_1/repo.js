//Diagrama de Objeto: Repositorio
const repo={
    name:"hola-mundo",
    author:"AngelicaRoy",
    language:"JavaScript",
    numberOfCommits:15,
    stars:0,
    forks:1,
    issues_open:10,
    issues_close:10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close;
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`;
    }
}

console.log("Nombre del repo:"+repo.name);
console.log("Issues totales:"+repo.getTotalIssues());
console.log(repo.getGeneralInfo());