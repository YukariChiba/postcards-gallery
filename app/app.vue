<template>
    <NuxtLayout>
        <v-app>
            <PageHeader />
            <v-container>
                <NuxtPage />
            </v-container>
            <PageFooter />
        </v-app>
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk
            ? `Yukari Chiba's Postcards | ${titleChunk}`
            : "Yukari Chiba's Postcards";
    },
});
</script>
