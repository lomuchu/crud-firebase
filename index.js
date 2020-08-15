var arreglo = ['comprar','limpiar','cocinar'];
var posicion = -1;

function agregar() {
    let tarea = document.getElementById("tarea");
    arreglo.push(tarea.value);
    pintarLista();
    tarea.value = '';
}

function pintarLista() {
    let lista = document.getElementById("lista");

    lista.innerHTML = '';
    
    arreglo.forEach((element, index) => {
        lista.innerHTML += 
        '<li class="list-group-item">' 
            + element
            + '<button class="btn btn-primary ml-5" onclick="editar('+index+')">Editar</button>'  
            + '<button class="btn btn-danger ml-5" onclick="eliminar('+index+')">Eliminar</button>' + 
            
        '</li>';
        
    });

    
}

function cambiar() {
    let tarea = document.getElementById("tarea");

    arreglo[posicion] = tarea.value;

    tarea.value = '';
    
    pintarLista();
    ocultar(true);
}

function ocultar(agregar) {
    if(agregar){
        document.getElementById("agregar").style = 'display: block;';
        document.getElementById("agregar-boton").style = 'display: block;';
    } else {
        document.getElementById("agregar").style = 'display: none;';
        document.getElementById("agregar-boton").style = 'display: none;';
    }
    
    if(agregar) {
        document.getElementById("editar").style = 'display: none;';    
        document.getElementById("editar-boton").style = 'display: none;';
        document.getElementById("cancelar-boton").style = 'display: none;';
    } else  {
        document.getElementById("editar").style = 'display: block;';    
        document.getElementById("editar-boton").style = 'display: block;';
        document.getElementById("cancelar-boton").style = 'display: block;';
    }
    
}

function cancelar() {
    ocultar(true);

    document.getElementById("tarea").value = '';
}

function editar(indice) {

    ocultar(false);

    let tarea = document.getElementById("tarea");
    tarea.value = arreglo[indice];

    posicion = indice;
}

function eliminar(indice) {


   arreglo.splice(indice, 1);

   pintarLista();
}

pintarLista();
