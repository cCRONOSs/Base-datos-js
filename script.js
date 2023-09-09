'use strict';

let datos = []

fetch ('./file.json')
    .then(response => response.json())
    .then(data => {
        datos = data
    })


function mostrarDatos() {
    showDatos(datos.Alumno)
    mostrar()
    ocultar()
}


function ordenarAlfabeticamente(){
    let ordenado = datos.Alumno.sort((a,b) =>{
        if(a.Nombre > b.Nombre){
            return 1
        }
        if(a.Nombre < b.Nombre){
            return-1
        }
        return 0
    })
    showDatos(ordenado)
    mostrar()
    ocultar()
}

function ordenarEdad(){
    let ordenado = datos.Alumno.sort((a,b) =>{
        if(a.Edad > b.Edad){
            return 1
        }
        if(a.Edad < b.Edad){
            return-1
        }
        return 0
    })
    showDatos(ordenado)
    mostrar()
    ocultar()
}

function ordenarMatricula(){
    let ordenado = datos.Alumno.sort((a,b) =>{
        if(a.Matricula > b.Matricula){
            return 1
        }
        if(a.Matricula < b.Matricula){
            return-1
        }
        return 0
    })
    showDatos(ordenado)
    mostrar()
    ocultar()
}


function showDatos(array) {
    document.getElementById("resultsTable").innerHTML = "" // limpia el contenido de la tabla
    array.forEach( (name, index) => {
        document.getElementById("resultsTable").innerHTML += `
        <tr>
            <th scope="row">${++index}</th>
            <td>${name.Nombre}</td>
            <td>${name.Apellido}</td>
            <td>${name.Edad}</td>
            <td>${name.Materias}</td>
            <td>${name.Matricula}</td>
            <td><button class="btn btn-danger " onclick="eliminarPersonaje(${--index})">Eliminar</button></td>
        </tr>
    `
    });
}

function inscripcion() {
    let nombre = document.getElementById("nombre").value
    const nombreCapitalize = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    let apellido = document.getElementById("apellido").value
    let edad = parseInt(document.getElementById("edad").value)
    let materias = document.getElementById("materias").value
    let matricula = document.getElementById("matricula").value

    let nuevoAlumno = {
        Nombre : nombreCapitalize,
        Apellido : apellido,
        Edad : edad,
        Materias : materias,
        Matricula : matricula
    }
    
    datos.Alumno.push(nuevoAlumno)
    mostrarDatos()
}

function mostrarInscripcion(){
        document.getElementById("inscripcion").style.display = "block" 
        ocultar2()
}
function mostrar(){
    document.getElementById("results").style.display = "block" 
}
function ocultar(){
    document.getElementById("inscripcion").style.display = "none" 
}
function ocultar2(){
    document.getElementById("results").style.display= "none"
}
function eliminarPersonaje(indice) {
    datos.Alumno.splice(indice,1)
    showDatos(datos.Alumno)
}

function buscar() {
    let nombreAlumno = document.getElementById("busqueda").value
    const nombreCapitalize = nombreAlumno.charAt(0).toUpperCase() + nombreAlumno.slice(1);
    let datosFiltrados = datos.Alumno.filter( Alumno => Alumno.Nombre.includes(nombreCapitalize) )
    if (datosFiltrados.length == 0) {
        document.getElementById("showError").innerHTML = `
        <div class="alert alert-danger" role="alert">
        No se encontraron coincidencias
      </div>
        `
    } else {
        document.getElementById("showError").innerHTML = ""
        showDatos(datosFiltrados)
    }
    
}
const datoBuscar = document.getElementById("busqueda")
datoBuscar.addEventListener("input", buscar)
