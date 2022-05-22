<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div>
    <div text="4xl">
      <label for="my-modal">
        <i-carbon-pedestrian class="inline-block" />
      </label>
      <input type="checkbox" id="my-modal" class="modal-toggle">
      <div class="modal">
        <div class="modal-box relative">
          <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
          <p class="pt-4 text-base">You've found hidden modal test xD</p>
          <div class="modal-action">
            <label for="my-modal" class="btn btn-sm">Yay!</label>
          </div>
        </div>
      </div>

    </div>
    <p>
      Hi {{ props.name }}
    </p>

    <p class="text-sm opacity-50">
      <em>Dynamic route</em>
    </p>

    <template v-if="user.otherNames.length">
      <p class="text-sm mt-4">
        <span class="opacity-75">AKA.</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        class="btn btn-secondary btn-sm" m="3 t6" text="sm"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
