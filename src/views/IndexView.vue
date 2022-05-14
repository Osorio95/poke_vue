<template>
    <div id="IndexView">
        <div class="container my-12 px-6 mx-auto">
            <!-- Section: Design Block -->
            <section class="mb-32 text-gray-800 text-center">

                <div class="container">

                    <div class="flex mb-4 h-max flex-1 bg-white rounded-lg shadow-md">
                        <input class="p-6 h-14 flex-1 rounded-lg" type="text" name="loadOrder" id="requestPokemon"
                            placeholder="Name or Pokemon ID">
                        <button class="bg-red-600 rounded-lg shadow-md px-4 m-2 text-white">Buscar</button>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex flex-row flex-nowrap justify-between font-bold">
                            <div class="container flex w-auto">
                                <a class="self-center" href="#">Ascending &#x25B2;</a>
                            </div>
                            <div class="container w-auto">
                                <label class="mr-4">
                                    from
                                    <input class="ml-2 p-2 w-12 bg-white rounded-lg shadow-md" type="text"
                                        name="loadOrder" id="from">
                                </label>
                                <label>
                                    to
                                    <input class="ml-2 p-2 w-12 bg-white rounded-lg shadow-md" type="text"
                                        name="loadOrder" id="to">
                                </label>
                            </div>
                        </div>
                        <div class="grid grid-cols-5 gap-4 mt-4">
                            <select class="p-2 bg-white rounded-lg shadow-md" type="text" name="filter" id="filterType">
                                <option value=""></option>
                            </select>
                            <input class="p-2 bg-white rounded-lg shadow-md" type="text" name="filter"
                                id="filterWeaknesses">
                            <input class="p-2 bg-white rounded-lg shadow-md" type="text" name="filter" id="filterGen">
                            <input class="p-2 bg-white rounded-lg shadow-md" type="text" name="filter"
                                id="filterWeight">
                            <input class="p-2 bg-white rounded-lg shadow-md" type="text" name="filter"
                                id="filterHeight">
                        </div>
                    </div>

                </div>
                <div class="flex">
                    <div class="basis-2/3 grid lg:grid-cols-3 gap-6 xl:gap-x-12"
                    :class="{'basis-2/3': selPokemon, 'flex-1': !selPokemon}">
                        <div class="my-4 lg:mb-0" v-for="(item, index) in pokeData" :key="index">
                            <Poke @pokeClick="createDetails" :item="item" :index="index" />
                        </div>
                    </div>
                    <div v-if="selPokemon" class="basis-1/3 ml-6 transition-all ease-in mt-4">
                        <PokeDetailed @pokeRemove="disableView" :selPokemon="selPokemon.selPokemon"/>
                    </div>
                </div>

            </section>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import Poke from '../components/Poke.vue';
import PokeDetailed from '../components/PokeDetailed.vue';

export default {
    name: 'IndexView',
    components: {
    Poke,
    PokeDetailed
},
    data() {
        return {
            pokemons: [],
            pokeData: [],
            selPokemon: null
        }
    },
    mounted() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=45')
            .then(response => {
                this.pokeData = Object.freeze(response.data.results)
            });
    },
    methods: {
        createDetails(event) {
            this.selPokemon = Object.freeze(event)
        },
        disableView() {
            this.selPokemon = null
        }
    }
}
</script>

<style>
</style>