<script setup>

// from server
const { data } = await useFetch('/api/hello')
console.log(data)

definePageMeta({
  middleware: "auth"
});

// From Pinia
import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();
console.log(store.name)

// from composables
const { sayHello } = useUtils();

// from plugins
const { $sayHelloPlugin } = useNuxtApp();
const counter = useCounter();
sayHello();
</script>

<template>
  <div>
    <Alert />
    <IconsBell />
    {{ $sayHelloPlugin("world") }}
    index
    <ContentDoc />
    <div>
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
  </div>
</template>
