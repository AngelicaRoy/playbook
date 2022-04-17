import Explorer from './explorer.js'

export default class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission)
    this.cycle = cycle
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername()
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

// para ejecutarlo abrir cmd, estar dentro del directorio del archivo
// ejecuta el comando:
// node main.js

/*
Viajero {
  name: 'Carlo',
  username: 'LaunchX',
  mission: 'Node JS',
  cycle: 'Abril 2022'
}
Explorer Carlo, username: LaunchX
Explorer Carlo, username: LaunchX, Ciclo Abril 2022

*/