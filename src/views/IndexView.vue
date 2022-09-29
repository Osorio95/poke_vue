<template>
    <div id="IndexView">
        <div class="container my-4 px-6 mx-auto">
            <section class="flex mb-16 text-gray-800 text-center">
                <div class="container" :class="{ 'w-2/3': selPokemon, 'flex-1': !selPokemon }">
                    <div class="flex mb-4 h-max flex-1 bg-white rounded-xl shadow-md">
                        <input class="p-6 h-14 flex-1 rounded-xl" type="text" name="loadOrder" id="requestPokemon"
                            placeholder="Name or Pokemon ID">
                        <button class="bg-red-600 rounded-xl shadow-md px-4 m-2 text-white">Buscar</button>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-row flex-nowrap justify-between font-bold">
                            <div class="container flex w-auto">
                                <a class="self-center" href="#">Ascending &#x25B2;</a>
                            </div>
                            <div class="container w-auto">
                                <label class="mr-4">
                                    from
                                    <input class="ml-2 p-2 w-12 bg-white rounded-xl shadow-md" type="text"
                                        name="loadOrder" id="from">
                                </label>
                                <label>
                                    to
                                    <input class="ml-2 p-2 w-12 bg-white rounded-xl shadow-md" type="text"
                                        name="loadOrder" id="to">
                                </label>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-4">
                            <select
                                class="p-3 rounded-xl shadow-md form-select form-select-md mb-3 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                type="text" name="filter" id="filterType">
                                <option value="null">Type</option>
                            </select>
                            <select
                                class="p-3 rounded-xl shadow-md form-select form-select-md mb-3 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                type="text" name="filter" id="filterType">
                                <option value="null">Gen</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="pokeData" class="wrapper h-auto grid grid-cols-3 gap-6 overflow-auto pb-6">
                        <div v-for="(item, index) in pokeData" :key="index">
                            <Poke @pokeClick="createDetails" :item="item" :index="index" />
                        </div>
                    </div>
                </div>
                <div v-if="selPokemon" class="w-1/3 ml-4">
                    <PokeDetailed @pokeRemove="disableView" :selPokemon="selPokemon.selPokemon" class="sticky top-4" />
                </div>

            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Poke from '../components/Poke.vue';
import PokeDetailed from '../components/PokeDetailed.vue';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    setup() {

        const pokeData = ref('')

        const loadPokemon = async (limit) => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            pokeData.value = response.data.results
        }

        loadPokemon(51)

        return {
            pokeData
        }
    },
    name: 'IndexView',
    components: {
        Poke,
        PokeDetailed
    },
    data() {
        return {
            pokemons: [],
            totalPokemons: 0,
            perPage: 9,
            currentPage: 1,
            loading: false,
            selPokemon: null
        }
    },
    methods: {
        createDetails(event) {

            this.selPokemon = null

            setTimeout(() => {
                this.selPokemon = Object.freeze(event)
                console.log(event)
            }, 100);
        },
        disableView() {
            this.selPokemon = null
        }
    }
}
</script>