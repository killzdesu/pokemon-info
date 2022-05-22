<script setup lang="ts">
import pokemons from 'json-pokemon'
import TypeIconList from '../components/TypeIconList.vue'
import typing from '../assets/typing.json'

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

const calcTyping = (types: Array<string>) => {
  const allTypes = typing.map(e=>e.name)
  const results: any = {
    0: [],
    0.25: [],
    0.5: [],
    1: [],
    2: [],
    4: [],
  }
  allTypes.forEach(atk => {
    let val = 1
    const atkType = typing.filter(e=>e.name==atk)[0]
    types.forEach(type => {
      if (atkType.immunes.includes(type)) val *= 0
      if (atkType.weaknesses.includes(type)) val *= 0.5
      if (atkType.strengths.includes(type)) val *= 2
    })
    results[val].push(atk)
  })
  return results
}

const typingFirstPokemon = computed(()=>{
  return calcTyping(firstPokemon.value?.typeList ?? [])
})

</script>

<template>
  <div class="w-full md:w-3/5 pb-6 mb-10">
    <p class="font-bold text-4xl">
    Pokemon Info
    </p>
    <div class="row my-6">
      <input type="text" class="input input-md rounded-md w-full max-w-xs input-bordered" v-model="keyword"/>
    </div>
    <div class="grid grid-cols-2 gap-x-6">
      <div v-if="firstPokemon === null" class="rounded-2xl border-1 p-2">
        <p class="text-2xl py-8">
          <span v-if="!keyword">Type in pokemon name</span>
          <span v-else class="text-red-600">No pokemon has that name!</span>
        </p>
      </div>
      <div v-if="firstPokemon" class="rounded-2xl border-3 border-orange-400 p-3">
        <p class="text-2xl font-bold pt-4">
          {{ firstPokemon.name }}
        </p>
        <p class="italic pt-3 pb-2"> Type </p>
        <TypeIconList :typings="firstPokemon.typeList"/>
        <div class="divider mt-6">
          <span class="text-sm text-gray-400 italic">Move Typing</span>
        </div>
        <p class="title-effect text-red-600">Super effective (x4)</p>
        <TypeIconList :typings="typingFirstPokemon[4]"/>
        <p class="title-effect text-red-400">Very effective (x2)</p>
        <TypeIconList :typings="typingFirstPokemon[2]"/>
        <p class="title-effect text-blue-600">Not very effective (x0.5)</p>
        <TypeIconList :typings="typingFirstPokemon[0.5]"/>
        <p class="title-effect text-blue-800">Resisted (x0.25)</p>
        <TypeIconList :typings="typingFirstPokemon[0.25]"/>
        <p class="title-effect">Immune (x0)</p>
        <TypeIconList :typings="typingFirstPokemon[0]"/>
        <p class="pb-3"></p>
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

<style>
.title-effect {
  @apply font-bold p-2 text-sm
}

</style>

<route lang="yaml">
</route>
