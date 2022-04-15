class Logger{
    constructor(name){
        //en el constructor se guardaran estos valores por defecto
        this.count=0;
        this.name=name;
    }

    log(message){
        //aumenta el contador interno al ser llamado este metodo
        this.count++;
        console.log('['+this.name+']'+message);
    }
}

module.exports=new Logger('DEFAULT');//Instanciación del objeto y se exporta