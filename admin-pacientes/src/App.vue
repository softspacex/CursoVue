<script setup>
  import {ref, reactive} from 'vue';
  import Header from './components/Header.vue';
  import Formulario from './components/Formulario.vue';

  const pacientes = ref([]);

  const paciente = reactive({
        nombre: '',
        propietario:'',
        email:'',
        alta: '',
        sintomas:''
    });
</script>

<template>
  <div class="container mx-auto mt-20">
    <Header />

    <div class="mt-12 md:flex">
      <Formulario
        v-model:nombre="paciente.nombre"
        v-model:propietario="paciente.propietario"
        v-model:email="paciente.email"
        v-model:alta="paciente.alta"
        v-model:sintomas="paciente.sintomas"
      />

      <div class="mdd:w-1/2 md:h-screen overflow-y-scroll">
        <h3 class="font-black text-3xl text-center">Administra tus Pacientes</h3>

        <div v-if="pacientes.length > 0">

        </div>

        <p v-else class="mt-20 text-2xl text-center">No Hay Pacientes</p>
      </div>
    </div>
  </div>
</template>
