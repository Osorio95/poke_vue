<template>
    <div id="pokeDetailed" class="min-h-fit">
        <div class="flex flex-colum bg-white rounded-lg shadow-lg cursor-pointer min-h-fit" @click="emitRemove">
            <div class="min-h-fit" v-if="selPokemon">
                <div class="w-full relative overflow-hidden bg-no-repeat bg-cover drop-shadow-lg my-4">
                    <img class="w-28 overflow-hidden bg-no-repeat bg-cover drop-shadow-lg m-auto"
                        :src="'https://img.pokemondb.net/sprites/black-white/anim/normal/' + selPokemon.name + '.gif'">
                </div>
                <h4 class="text-sm font-bold text-gray-400 capitalize">N°{{ selPokemon.id }}</h4>
                <h1 class="text-slate-900 text-xl capitalize font-bold">{{ selPokemon.name }}</h1>
                <h6>{{ }}</h6>
                <div class="grid grid-rows-1 grid-flow-col gap-4 pb-6 mx-8">
                    <div class="m-4 inline-block px-2 py-2.5 align-middle text-white font-medium text-xs leading-tight rounded-md shadow-sm capitalize"
                        :class="colorType(type.type.name)" v-for="(type, index) in selPokemon.types" :key="index">
                        {{ type.type.name }}
                    </div>
                </div>

                <h3 class="text-slate-900 text-base font-bold">Pokedex Entry</h3>
                <p class="mx-6 my-2 text-sm">
                    {{ pokeSpecies.flavor_text_entries[0].flavor_text }}
                </p>
                <h3 class="text-slate-900 text-base font-bold">Abilities</h3>
                <div v-for="(ability, index) in selPokemon.abilities" :key="index">
                    {{ ability.ability.name }}
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
                        <h3 class="text-slate-900 font-bold">Height</h3>
                        <div class="rounded-full bg-slate-200 p-1 mt-1">{{ selPokemon.base_experience }}</div>
                    </div>
                </div>
                <h3 class="text-slate-900 text-base font-bold">Stats</h3>

                <div class="flex flex-row m-auto justify-around mx-6 mt-2">
                    <div class="flex flex-col w-fit rounded-full bg-slate-200"
                        v-for="(stats, index) in selPokemon.stats" :key="index">

                        <div class="w-fit text-gray-900 rounded-full bg-blue-400 flex items-center justify-center p-1"
                            :class="statColor(stats.stat.name)">
                            {{ statName(stats.stat.name) }}
                        </div>

                        <div class="p-1"> {{ stats.base_stat }} </div>
                    </div>
                </div>

                <h3 class="text-slate-900 text-base font-bold">Evolution</h3>
                <div>
                    <img src="" alt="">
                    <div>Lvl</div>
                    <img src="" alt="">
                    <div>Lvl</div>
                    <img src="" alt="">
                </div>
                <div class="bg-gray-400 flex flex-row justify-around m-2 p-2 rounded-lg">
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
</template>

<script>
import axios from 'axios'

export default {
    name: 'PokeDetailed',
    props: {
        selPokemon: Object
    },
    data() {
        return {
            pokeSpecies: []
        }
    },
    mounted() {
        axios.get(this.selPokemon.species.url)
            .then(response => {
                this.pokeSpecies = Object.freeze(response.data);
                console.log(this.pokeSpecies)
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