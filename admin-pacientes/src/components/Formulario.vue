<script setup>
    import {reactive} from 'vue';
    import Alerta from './Alerta.vue';

    const alerta = reactive({
        tipo:'',
        mensaje:''
    })

    defineEmits(['update:nombre']);

    const props = defineProps({
        nombre:{
            type: String,
            required:true
        }
    })

    const validar = () => {
        if(Object.values(paciente).includes('')){
            alerta.mensaje = 'Todos los campos son obligatorios';
            alerta.tipo = 'error';
            return;
        }
    }

</script>

<template>
    <div class="md:w-1/2">
        <h2 class="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p class="text-lg mt-5 text-center mb-10">
            Añade Pacientes y 
            <span class="text-indigo-600 font-bold">Administralos</span>
        </p>

        <Alerta
            v-if="alerta.mensaje"
            :alerta="alerta"
        />

        <form
            class="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            @submit.prevent="validar"
        >
            <div class="mb-5">
                <label 
                    for="mascota"
                    class="block text-gray-700 uppercase font-bold"
                >
                    Nombre Mascota
                </label>

                <input 
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    @input="$emit('update:nombre',$event.target.value)"
                >
            </div>

            <div class="mb-5">
                <label 
                    for="propietario"
                    class="block text-gray-700 uppercase font-bold"
                >
                    Nombre Propietario
                </label>

                <input 
                    id="mascota"
                    type="text"
                    placeholder="Nombre del propetario"
                    class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    
                >
            </div>

            <div class="mb-5">
                <label 
                    for="email"
                    class="block text-gray-700 uppercase font-bold"
                >
                    Email
                </label>

                <input 
                    id="email"
                    type="email"
                    placeholder="Email del propietario"
                    class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 
                >
            </div>

            <div class="mb-5">
                <label 
                    for="alta"
                    class="block text-gray-700 uppercase font-bold"
                >
                    Alta
                </label>

                <input 
                    id="alta"
                    type="date"
                    class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    
                >
            </div>

            <div class="mb-5">
                <label 
                    for="sintomas"
                    class="block text-gray-700 uppercase font-bold"
                >
                    Sintomas
                </label>

                <textarea
                    id="sintomas"
                    placeholder="Describe los sintomas"
                    class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-40"
                    
                ></textarea> 
            </div>

           <input
                type="submit"
                class="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700
                cursor-pointer transition-colors"
                value="Registrar Pacientes"
           />
        </form>
    </div>
</template>


