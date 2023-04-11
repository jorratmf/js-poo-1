// Variables globales
let auto = null;

// Función para crear el objeto auto a partir de los datos del formulario
function crearAuto(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const color = document.getElementById("color-input").value;
    const marca = document.getElementById("marca-input").value;
    const modelo = document.getElementById("modelo-input").value;

    // Crear el objeto auto
    auto = {
        color: color,
        marca: marca,
        modelo: modelo,
        encendido: false,

        // Métodos para encender y apagar el auto
        encender: function() {
            this.encendido = true;
        },
        apagar: function() {
            this.encendido = false;
        }
    };

    // Mostrar los datos del auto en el segundo HTML
    mostrarDatos();
}

// Función para mostrar los datos del auto
function mostrarDatos() {
    if (auto !== null) {
        // Mostrar los valores del objeto auto en el HTML
        document.getElementById("color").textContent = auto.color;
        document.getElementById("marca").textContent = auto.marca;
        document.getElementById("modelo").textContent = auto.modelo;
        
        // Mostrar si el auto está encendido o apagado
        if (auto.encendido) {
            document.getElementById("estado").textContent = "Encendido";
        } else {
            document.getElementById("estado").textContent = "Apagado";
        }
    }
}

// Función para encender el auto
function encender() {
    auto.encender();
    mostrarDatos();
}

// Función para apagar el auto
function apagar() {
    auto.apagar();
    mostrarDatos();
}

// Agregar el listener al formulario
const autoForm = document.getElementById("auto-form");
autoForm.addEventListener("submit", crearAuto);