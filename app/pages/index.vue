<template>
    <div class="justify-center align-center">
        <CollectionCard
            v-for="(item, i) in items"
            :key="i"
            :item="item"
            :colid="i"
            :selected="selected == i"
            @hover="(a) => (selected = a)"
        />
    </div>
</template>

<script setup lang="ts">
import items from "@/assets/collections.json";
const selected = ref(-1);
</script>
