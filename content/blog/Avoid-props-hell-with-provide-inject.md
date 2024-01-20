---
title: 'Avoid props hell with provide inject | Blog'
description: "The best way to avoid hellish props"
headline: 'Avoid props hell with provide inject'
excerpt: "Avoid props hell with provide inject"
date: '2024-01-19T12:00:00'
dateUpdated: ''
author: 'Dimas Okta'
authorUrl: '/about' 
profil: /img/profil.png
socialImage:
  src: '/img/blog/sample.webp'
  mime: 'webp'
  alt: 'Mountain'
  width: 1200
  height: 630
---
![](/props.avif)

Ketika kita melanjutkan data dari induk ke anak dalam komponen Vue, seringkali kita menggunakan `props` untuk meneruskan data tersebut dari komponen induk ke anak. Proses ini berulang dan berlanjut sampai mencapai elemen anak yang diinginkan. Namun, jika data yang diteruskan sangat dalam dan memerlukan props secara terus menerus, penggunaan props dapat menjadi tidak efisien.
## Table Contents
- [Props](#Introduction)
- [Provide & Inject](#Provide-inject)
- [Mengubah Props dengan Provide dan Inject](#refactor)
- [Kesimpulan](#kesimpulan)

# <a id="Introduction">Introduction</a>
Sebelum membahas alternatifnya, perlu dipahami cara props digunakan untuk meneruskan data dari komponen root ke komponen anak.

###### Props data string
```js
App.vue
<script setup>
import { ref } from 'vue'
import home from "./components/home.vue"
const title = ref('ok')
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-100">
    <home :title="title" />
  </div>
</template>
```

```js
home.vue
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```


###### Props data array
```js
app.vue 
<script setup>
import home from "./components/home.vue"
import { ref, onMounted } from 'vue'
const items = ref([]);

onMounted(async () => {
  const response = await fetch('./data.json');
  items.value = await response.json();
});
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-100">
    <home :items="items" />
  </div>
</template>
```

```js
home.vue
<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul class="tab">
    <li v-for="(item, index) in   items  " :key="index">
      {{ item.user.name }}
    </li>
  </ul>
</template> 
```

# <a id="Provide-inject">Provide & Inject</a>
Solusi untuk mengatasi kompleksitas ini adalah menggunakan `provide` dan `inject`. Dengan menggunakan `provide`, komponen induk dapat berfungsi sebagai penyedia dependensi untuk semua komponen turunannya. Komponen mana pun dalam rantai turunan dapat memasukkan dependensi yang disediakan oleh komponen induknya.

![](/provide.avif)

- `provide`: Digunakan untuk menyediakan data ke turunan komponen.
```js
provide(/* key */ 'message', /* value */ 'hello!')
```
- `inject`: Digunakan untuk memasukkan data yang disediakan oleh komponen leluhur.
```js
const value = inject(/* key name */'message',
/* default value ketika data provide tidak ada*/ 'default value')
```

# <a id="refactor">Mengubah Props dengan Provide dan Inject</a>
Jika proses penggunaan props secara terus menerus menjadi tidak praktis, kita dapat beralih menggunakan `provide` dan `inject` untuk meneruskan data dari root ke child component. Ini memungkinkan kita untuk melewati data tanpa perlu melibatkan siklus berantai seperti pada penggunaan props.

Berikut cara pass data root ke child dengan provide inject 

###### Provide data string 
```js
app.vue
<template>
  <div class="min-h-screen p-8 bg-gray-100">
    <home />
  </div>
</template>

<script setup>
import home from "./components/home.vue"
import { ref, provide } from 'vue'
const title = ref('ok')
provide('title', title)
</script>
```

```js
home.vue
<script setup>
import { inject } from 'vue';
const title = inject('title', 'default title')
</script>

<template>
  {{ title }}
</template>
```

lalu bagaimana jika passing data dalam bentuk array?, berikut ini merupakan contohnya

###### Provide data array
```js 
app.vue
<template>
  <div class="min-h-screen p-8 bg-gray-100">
    <home />
  </div>
</template>

<script setup>
import home from "./components/home.vue"
import { ref, onMounted, provide } from 'vue'
const items = ref([]);
provide('items', items)
onMounted(async () => {
  const response = await fetch('./data.json');
  items.value = await response.json();
});
</script>
```


```js
home.vue
<script setup>
import { ref, inject } from 'vue';
// ketika data 'items' tidak ada, maka kita menggunakan array kosong 
const items = inject('items', ref([]))
</script>

<template>
  <ul class="tab">
    <li v-for="(item, index) in   items  " :key="index">
      {{ item.user.name }}
    </li>
  </ul>
</template>
```

# <a id="kesimpulan">kesimpulan</a>
Dalam konteks Vue 3, menggunakan `provide` dan `inject` merupakan pilihan yang tepat ketika kita memiliki banyak komponen dalam struktur yang kompleks. Hal ini memungkinkan kita untuk meneruskan data tanpa harus melibatkan proses props yang panjang dan rumit.


Referensi: 
- [Provide-inject](https://vuejs.org/guide/components/provide-inject.html#provide-inject).
- [Props](https://vuejs.org/guide/components/props.html#props)