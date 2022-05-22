<script setup lang="ts">
import pokemons from 'json-pokemon'

const keyword = ref('')
const filteredPokemons = computed(() => {
  const filteredPokemons = pokemons.map(e=>e.name)
      .filter(e=>e.toLowerCase().includes(keyword.value.toLowerCase()))
  return filteredPokemons.slice(0, 10)
})

const getInfo = (name: any) => {
  const pokemon = pokemons.filter(e => e.name === name)
  if (pokemon.length) {
    return pokemon[0]
  } else {
    return null
  }
}

const firstPokemon = computed(() => {
  if (!keyword.value || !filteredPokemons) {
    return null
  }
  const pokemon = getInfo(filteredPokemons.value[0])
  return pokemon
})

</script>

<template>
  <div class="w-full md:w-3/5">
    <p class="font-bold text-4xl">
    Pokemon Info
    </p>
    <div class="row my-6">
      <input type="text" class="input input-md rounded-md w-full max-w-xs input-bordered" v-model="keyword"/>
    </div>
    <div class="grid grid-cols-2 gap-x-6">
      <div v-if="firstPokemon === null" class="rounded-2xl border-1">
        <p class="text-2xl py-8">
          <span v-if="!keyword">Type in pokemon name</span>
          <span v-else class="text-red-600">No pokemon has that name!</span>
        </p>
      </div>
      <div v-if="firstPokemon" class="rounded-2xl border-3 border-orange-400">
        <p class="text-2xl font-bold pt-4">
          {{ firstPokemon.name }}
        </p>
        <p class="italic pt-3"> Type </p>
        <span class="font-bold text-lg">{{firstPokemon.typeList.join(' ')}}</span>
        <div class="divider mt-6">
          <span class="text-sm text-gray-400 italic">Move Typing</span>
        </div>
        <p class="font-bold p-2 text-red-600">Weakness (x2)</p>
        <p class="font-bold p-2 text-blue-600">Resisted (x0.5)</p>
        <p class="font-bold p-2 text-green-600">Immune (x0)</p>
      </div>
      <div class="rounded-2xl border-1 p-4">
        <div v-for="pokemon in filteredPokemons.slice(firstPokemon?1:0)" :key="pokemon">
          <p class="font-bold py-2">
            {{ pokemon }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
</route>
