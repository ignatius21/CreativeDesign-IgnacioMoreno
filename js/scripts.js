function menuToggle() {
    var nav = document.getElementById("nav")
    var toggle = document.getElementById("toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
}


// Añadiendo carrito de compras

const carrito = [];


const producto1 ={
    nombre: 'Remera ReactJs',
    precio: 1200,
    mostrarInfo: function(){
        console.log(`La ${this.nombre} tiene un valor de $ ${this.precio}`)
    }
}

const producto2 ={
    nombre: 'Remera VueJs',
    precio: 1450,
    mostrarInfo: function(){
        console.log(`La ${this.nombre} tiene un valor de $ ${this.precio}`)
    }
}

const producto3 ={
    nombre: 'Remera AngularJs',
    precio: 1530,
    mostrarInfo: function(){
        console.log(`La ${this.nombre} tiene un valor de $ ${this.precio}`)
    }
}

producto1.mostrarInfo();
producto2.mostrarInfo();
producto3.mostrarInfo();

// Mostrar carrito de compras

carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);

console.table(carrito);

// Calcular el valor de las compras del carrito

function sumarProductos(a,b,c){
    if(a + b + c >= 2000){
        let descuento = 5;
        let resultado = (a + b + c)*descuento /100;
        console.log(`El total a pagar con el descuento es de $${resultado}`);
    }else if(a + b || b + c || a + c >= 3000){
        let descuento2 = 10;
        let resultado2 = (a + b || b + c || a + c)*descuento2 /100;
        console.log(`El total a pagar con el descuento es de $${resultado2}`);
    }else if(a + b + c >= 5000){
        let descuento3 = 15;
        let resultado3 = (a + b + c)*descuento3 /100;
        console.log(`El total a pagar con el descuento es de $${resultado3}`);
    }else{
        console.log('Monto no aplicable al descuento...')
    }
}

sumarProductos(producto1.precio,producto2.precio,producto3.precio);
sumarProductos(producto1.precio,producto2.precio);
sumarProductos(producto1.precio);





















