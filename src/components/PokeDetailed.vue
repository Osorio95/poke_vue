<template>
    <div id="pokeDetailed" class="sticky">
        <div class="relative py-16 text-sm">
            <div class="static flex flex-colum gap-3 bg-white rounded-2xl shadow-lg cursor-pointer pt-12"
                @click="emitRemove">
                <div class="w-full" v-if="selPokemon">
                    <div class="w-full z-10 absolute top-0 overflow-hidden bg-no-repeat bg-cover drop-shadow-lg">
                        <img class="w-28 overflow-hidden bg-no-repeat bg-cover drop-shadow-lg m-auto"
                            :src="'https://img.pokemondb.net/sprites/black-white/anim/normal/' + selPokemon.name + '.gif'">
                    </div>
                    <h4 class="font-bold text-gray-400 capitalize">N°{{ selPokemon.id }}</h4>
                    <h1 class="text-slate-900 text-xl capitalize font-bold">{{ selPokemon.name }}</h1>
                    <h6>{{ }}</h6>
                    <div class="grid grid-rows-1 grid-flow-col gap-4 mx-8">
                        <div class="m-4 inline-block px-2 py-2.5 align-middle text-white font-medium text-xs leading-tight rounded-xl shadow-sm capitalize"
                            :class="`bg-${colorType(type.type.name)}`" v-for="(type, index) in selPokemon.types"
                            :key="index">
                            {{ type.type.name }}
                        </div>
                    </div>

                    <h3 class="text-slate-900 text-base font-bold">Pokedex Entry</h3>
                    <div v-if="pokeSpecies">
                        <p class="mx-6 my-1 normal-case">
                            {{ pokeSpecies.flavor_text_entries[0].flavor_text }}
                        </p>
                    </div>
                    <h3 class="text-slate-900 text-base font-bold mt-2">Abilities</h3>
                    <div class="grid grid-cols-2 grid-flow-col gap-4 mx-8 mb-2">
                        <div class="flex flex-col m-4 px-2 py-2 align-middle font-medium text-xs leading-tight rounded-xl shadow-sm capitalize border-2"
                            :class="`border-${colorType(selPokemon.types[0].type.name)}`"
                            v-for="(ability, index) in selPokemon.abilities" :key="index">
                            <p class="h-fit justify-center">
                                {{ ability.ability.name }}
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mx-6 my-2">
                        <div>
                            <h3 class="text-slate-900 font-bold">Height</h3>
                            <div class="rounded-full bg-slate-200 p-1 mt-1">{{ selPokemon.height }}</div>
                        </div>
                        <div>
                            <h3 class="text-slate-900 font-bold">Weight</h3>
                            <div class="rounded-full bg-slate-200 p-1 mt-1">{{ selPokemon.weight }}</div>
                        </div>
                        <div>
                            <h3 class="text-slate-900 font-bold">Weaknesses</h3>
                            <div class="rounded-full bg-slate-200 p-1 mt-1"> to deploy</div>
                        </div>
                        <div>
                            <h3 class="text-slate-900 font-bold">Base exp</h3>
                            <div class="rounded-full bg-slate-200 p-1 mt-1">{{ selPokemon.base_experience }}</div>
                        </div>
                    </div>
                    <h3 class="text-slate-900 text-base font-bold">Stats</h3>

                    <div class="flex flex-row m-auto justify-around mx-6 mt-1">
                        <div class="flex flex-col w-fit rounded-full bg-slate-200"
                            v-for="(stats, index) in selPokemon.stats" :key="index">

                            <div class="w-fit text-gray-900 rounded-full bg-blue-400 flex items-center justify-center p-1"
                                :class="statColor(stats.stat.name)">
                                {{ statName(stats.stat.name) }}
                            </div>

                            <div class="p-1"> {{ stats.base_stat }} </div>
                        </div>
                    </div>

                    <h3 class="text-slate-900 text-base font-bold mt-4">Evolution</h3>
                    <div v-if="pokeSpecies">
                        <EvolutionChainVue :pokeSpecies="pokeSpecies" />

                    </div>
                    <div class="bg-gray-400 flex flex-row justify-around m-2 p-2 rounded-xl">
                        <span>&lt;</span>
                        <img src="" alt="">
                        <h6>Name</h6>
                        <h5>ID</h5>
                        |
                        <h5>ID</h5>
                        <h6>Name</h6>
                        <img src="" alt="">
                        <span>&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import EvolutionChainVue from './EvolutionChain.vue'

export default {
    name: 'PokeDetailed',
    components: {
        EvolutionChainVue
    },
    props: {
        createDetails: Boolean,
        selPokemon: Object
    },
    data() {
        return {
            pokeSpecies: null,
            pokeAbility: null
        }
    },
    mounted() {
        axios.get(this.selPokemon.species.url)
            .then(response => {
                this.pokeSpecies = Object.freeze(response.data);
            })
    },
    methods: {
        colorType(type) {
            switch (type) {
                case 'bug': return 'lime-200 text-black';
                case 'electric': return 'yellow-300';
                case 'fire': return 'amber-600';
                case 'grass': return 'green-600';
                case 'normal': return 'stone-200 text-black';
                case 'rock': return 'yellow-700';
                case 'dark': return 'zinc-600';
                case 'fairy': return 'pink-300';
                case 'flying': return 'blue-300 text-black';
                case 'ground': return 'yellow-600';
                case 'poison': return 'fuchsia-900';
                case 'steel': return 'slate-400';
                case 'dragon': return 'violet-700';
                case 'fighting': return 'orange-900';
                case 'ghost': return 'indigo-900';
                case 'ice': return 'sky-300';
                case 'psychic': return 'pink-500';
                case 'water': return 'blue-700';
            }
        },
        statName(name) {
            switch (name) {
                case 'hp': return 'HP';
                case 'attack': return 'ATK';
                case 'defense': return 'DEF';
                case 'special-attack': return 'Sp.A';
                case 'special-defense': return 'Sp.D';
                case 'speed': return 'SPD';
            }
        },
        statColor(name) {
            switch (name) {
                case 'hp': return 'bg-red-600';
                case 'attack': return 'bg-orange-400';
                case 'defense': return 'bg-yellow-300';
                case 'special-attack': return 'bg-sky-200';
                case 'special-defense': return 'bg-rose-300';
                case 'speed': return 'bg-green-300';
            }
        },
        emitRemove() {
            this.$emit('pokeRemove');
        }
    }
}
</script>