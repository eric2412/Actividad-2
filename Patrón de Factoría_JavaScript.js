class comida{
  
    preparar(){
        console.log("La comida ya esta lista");
    }
}

class hamburguesa extends comida{
   constructor(){
       console.log("Hamburguesa nueva creada");
       super();
   }
   ingredienteExtra(){
       console.log("Ingrediente extra añadido");
   }
}


class Pizza extends comida{
    constructor(){
        console.log("Pizza nueva creada");
        super();
        this.preparar();
    }
    
    preparar(){
     console.log("La pizza esta preparada para usted");
 }
    agregar_jugo(){
        console.log("jugo añadida");
    }
 }

 

 class cocinafactory{
   constructor(tipo){
       switch (tipo) {
           case "Pizza":
               return new Pizza();
            case "hamburguesa":   
               return new hamburguesa();       
           default:
                return null;
               break;
       }
   }

 }
 const Pizza = new cocinafactory("Pizza");
 Pizza.agregar_jugo();

 const hamburguesa = new cocinafactory("hamburguesa");
 hamburguesa.ingredienteExtra();