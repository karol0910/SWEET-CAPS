<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
   <nav>
    <ul>
      <li><a href="#"><img src="./assets/tarjetlogosweet.png" class="logovue" alt="Logo"></a></li>
      <li :class="{ active: activeItem === 'inicio' }"><a @click="setActiveItem('inicio')" href="#">Inicio</a></li>
      <li :class="{ active: activeItem === 'acerca' }"><a @click="setActiveItem('nosotros')" href="#">Nosotros</a></li>
      <li :class="{ active: activeItem === 'servicios' }"><a @click="setActiveItem('servicios')" href="#">Servicios</a></li>
      <li :class="{ active: activeItem === 'contacto' }"><a @click="setActiveItem('contacto')" href="#">Contacto</a></li>
    </ul>
  </nav>
</template>

<style>
body {
  background-color: #75849c;
}
/* Estilos del navbar */
nav {
  background-color: #192537;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;

}

li {
  display: inline-block;
  margin-right: 15px;
}

a {
  text-decoration: none;
  color: #fff;
  padding: 25px 50px;
  border-radius: 3px;
}

a:hover {
  background-color: #756e6e;
  color: #070706;
}

.active a {
  background-color: #333;
  color: #fff;
}

/* Estilos del logo */
.logovue {
  width: 180px; /* Ajusta el tamaño según tus necesidades */
  height: 150px; /* Mantén el aspect ratio original */
}
</style>
