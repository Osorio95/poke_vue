<template>
    <div id="Poke" class="h-full" v-if="pokeDatos.sprites">
        <div class="relative pt-12 text-sm">
            <div @click="emitPokeDatos" class="static cursor-pointer block bg-white rounded-2xl shadow-lg h-full pt-12">
                <div class="flex">
                    <div class="w-full absolute top-0 overflow-hidden bg-no-repeat bg-cover drop-shadow-lg"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img :src="pokeDatos.sprites.front_default"
                            class="w-28 overflow-hidden bg-no-repeat bg-cover drop-shadow-lg m-auto" />
                    </div>
                </div>
                <div class="py-1 px-4">
                    <h6 class="text-sm font-bold text-gray-400 capitalize"> N°{{ pokeDatos.id }}</h6>
                    <h5 class="text-slate-900 font-bold text-lg mb-3 capitalize">{{ pokeDatos.name }}</h5>
                    <div class="grid grid-rows-1 grid-flow-col gap-4 pb-2">
                        <div class="inline-block px-2 py-2.5 align-middle text-white font-medium text-xs leading-tight rounded-xl shadow-sm capitalize"
                            :class="colorType(type.type.name)" v-for="(type, index) in pokeDatos.types" :key="index">
                            {{ type.type.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Poke',
    props: {
        item: Object,
        index: Number
    },
    data() {
        return {
            pokeDatos: []
        }
    },
    mounted() {
        axios.get(this.item.url)
            .then(response => {
                this.pokeDatos = Object.freeze(response.data);
            })
    },
    methods: {
        colorType(type) {
            switch (type) {
                case 'bug': return 'bg-lime-200 text-black';
                case 'electric': return 'bg-yellow-300';
                case 'fire': return 'bg-amber-600';
                case 'grass': return 'bg-green-600';
                case 'normal': return 'bg-stone-200 text-black';
                case 'rock': return 'bg-yellow-700';
                case 'dark': return 'bg-zinc-600';
                case 'fairy': return 'bg-pink-300';
                case 'flying': return 'bg-blue-300 text-black';
                case 'ground': return 'bg-yellow-600';
                case 'poison': return 'bg-fuchsia-900';
                case 'steel': return 'bg-slate-400';
                case 'dragon': return 'bg-violet-700';
                case 'fighting': return 'bg-orange-900';
                case 'ghost': return 'bg-indigo-900';
                case 'ice': return 'bg-sky-300';
                case 'psychic': return 'bg-pink-500';
                case 'water': return 'bg-blue-700';
            }
        },
        emitPokeDatos() {
            this.$emit('pokeClick', {
                selPokemon: this.pokeDatos
            });
        }
    }
}
</script>