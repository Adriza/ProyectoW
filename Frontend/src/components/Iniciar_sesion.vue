<template>
    <v-layout id="container" row wrap justify-center align-center>
        <v-card>
            <v-card-title>
               <h1 class="titulo">Iniciar Sesión</h1>
            </v-card-title>
            <v-card-text>
                <v-text-field
                  label="Nombre_usuario"
                  v-model="nombre_usuario"
                  ></v-text-field>
                  <v-text-field
                  label="Correo"
                  v-model="correo"
                  ></v-text-field>
                  <v-text-field
                  label="Contraseña"
                  type="password"
                  v-model="contraseña"
                  ></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-layout row wrap justify-center>
                    <v-btn color="blue" @click="iniciar_sesion()">Iniciar Sesión</v-btn>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-layout>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            nombre_usuario: '',
            correo: '',
            contraseña: ''
        }
    },
    methods: {
        iniciar_sesion() {
            axios.post('http://localhost:3000/Usuarios', {
                 nombre_usuario: this.nombre_usuario,
                correo: this.correo,
                contraseña: this.contraseña
            }).then(response => {
                console.log(response.data)
            })

        }
    },
}
</script>

<style scoped>
#container {
    min-height: 100vh;
}
</style>
