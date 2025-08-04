<template>
    <v-hover>
        <template #default="{ isHovering, props }">
            <v-card
                :to="`/collection/${item}`"
                v-bind="props"
                rounded="xl"
                class="my-2"
                width="100%"
            >
                <v-img
                    :gradient="
                        isHovering
                            ? 'rgba(100,115,201,.33)'
                            : 'rgba(25,32,72,.7)'
                    "
                    :src="getImageURL(item, 1, 'front')"
                    :aspect-ratio="isHovering ? 6 : 10"
                    cover
                    class="align-center justify-start"
                >
                    <v-overlay
                        :scrim="false"
                        :model-value="true"
                        persistent
                        no-click-animation
                        class="align-end justify-start hidden-xs"
                        contained
                        scroll-strategy="none"
                    >
                        <h1
                            class="ml-4 text-h1 text-black font-weight-black opacity-30"
                            style="margin-bottom: -20px"
                        >
                            {{ i + 1 }}
                        </h1>
                    </v-overlay>
                    <v-card-title class="mt-2">
                        <v-img
                            :src="getTitleURL(item)"
                            height="80px"
                            style="filter: brightness(0) invert(1)"
                            :class="isHovering ? null : 'opacity-50'"
                        />
                    </v-card-title>
                </v-img>
            </v-card>
        </template>
    </v-hover>
</template>

<script setup lang="ts">
const prop = defineProps<{
    item: string;
    colid: number;
}>();

const item = prop.item;
const i = prop.colid;
</script>
