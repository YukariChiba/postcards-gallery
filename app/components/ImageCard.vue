<template>
    <v-card>
        <v-img
            :src="
                getImageURL(
                    colid,
                    imgid,
                    prop.side,
                    prop.selected ? 'png' : 'jpg',
                )
            "
            :class="prop.rotate ? 'rotate90' : ''"
            @load="$emit('load')"
            @error="$emit('error')"
            @click="$emit('view', imgid)"
        >
            <template #placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate />
                </div>
            </template>
        </v-img>
    </v-card>
</template>

<script setup lang="ts">
const prop = defineProps<{
    colid: string;
    imgid: number;
    selected: boolean;
    side: string;
    rotate: boolean;
}>();

defineEmits(["load", "error", "view"]);
const imgid = prop.imgid;
const colid = prop.colid;
</script>

<style scoped>
.rotate90 {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}
</style>
