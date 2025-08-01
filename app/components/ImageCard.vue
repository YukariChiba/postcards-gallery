<template>
    <v-card @click="$emit('view', imgid)">
        <v-img
            :src="getImageURL(colid, imgid, side)"
            @load="$emit('load')"
            @error="$emit('error')"
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
}>();

defineEmits(["load", "error", "view"]);
const imgid = prop.imgid;
const colid = prop.colid;
</script>
