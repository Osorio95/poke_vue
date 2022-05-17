<template>
    <nav id="topHeader" class="container my-6 px-6 mx-auto">

        <div class="btn-group flex shadow-md" role="group">
            <RouterLink to="/"
                class="flex-1 text-lg py-6 px-4 text-center font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 transition ease-in-out">
                Home
            </RouterLink>
            <RouterLink to="/"
                class="flex-1 text-lg py-6 px-4 text-center font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 transition ease-in-out">
                Pokedex
            </RouterLink>
            <RouterLink to="/"
                class="flex-1 text-lg py-6 px-4 text-center font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 transition ease-in-out">
                More
            </RouterLink>
        </div>

    </nav>
</template>

<script>

export default {
    name: 'topheader'
}
</script>

<style>
</style>