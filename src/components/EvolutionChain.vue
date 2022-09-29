<template>
    <div class="flex flex-row w-max m-auto" v-if="pokeChain">
        <div>
            <img class="h-12 mx-2"
                :src="`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokeChain.chain.species.name}.gif`"
                alt="">
        </div>
        <div class="flex flex-row items-center" v-if="pokeChain.chain.evolves_to[0]">
            <span class="h-fit bg-gray-200 px-2 py-1 rounded-xl text-gray-400">
                Lvl. {{ pokeChain.chain.evolves_to[0].evolution_details[0].min_level }}
            </span>
            <img class="h-12 mx-2 "
                :src="`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokeChain.chain.evolves_to[0].species.name}.gif`"
                alt="">
        </div>

        <div class="flex flex-row items-center" v-if="pokeChain.chain.evolves_to[0].evolves_to[0]">
            <span class="h-fit bg-gray-200 px-2 py-1 rounded-xl text-gray-400">
                Lvl. {{ pokeChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level }}
            </span>
            <img class="h-12 mx-2"
                :src="`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokeChain.chain.evolves_to[0].evolves_to[0].species.name}.gif`"
                alt="">
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EvolutionChain',
    props: {
        pokeSpecies: Object
    },
    data() {
        return {
            pokeChain: null
        }
    },
    mounted() {
        axios.get(this.pokeSpecies.evolution_chain.url)
            .then(response => {
                this.pokeChain = Object.freeze(response.data);
            })
    },
}
</script>