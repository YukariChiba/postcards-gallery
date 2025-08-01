<template>
    <div>
        <div class="text-center my-8">
            <v-img
                :src="getTitleURL(colid)"
                height="80px"
                style="filter: brightness(0) invert(1)"
                @error="notfound"
            />
            <v-divider class="my-8 border-opacity-50" />
        </div>
        <v-row>
            <v-col
                v-for="img in loaded"
                :key="img"
                cols="12"
                :md="currentview == img ? 12 : 6"
                :lg="currentview == img ? 12 : 4"
                :xl="currentview == img ? 12 : 3"
            >
                <ImageCard
                    :class="currentview == img ? 'my-8' : ''"
                    :imgid="img"
                    :colid="colid"
                    :selected="currentview == img"
                    :side="currentview == img ? side : 'front'"
                    @error="error"
                    @load="load"
                    @view="view"
                />
            </v-col>
        </v-row>
        <v-fab
            v-show="currentview != 0"
            :icon="side == 'front' ? 'mdi-flip-to-back' : 'mdi-flip-to-front'"
            position="sticky"
            app
            appear
            @click="flipside"
        />
    </div>
</template>

<script setup lang="ts">
const { params } = useRoute();
const router = useRouter();

const colid = params.col as string;

const loaded = ref([1]);

const load = () => {
    loaded.value.push((loaded.value.at(-1) || 1) + 1);
};

const error = () => {};

const notfound = () => {
    router.push("/404");
};

const currentview = ref(0);
const side = ref("front");

const flipside = () => {
    if (side.value === "front") side.value = "back";
    else side.value = "front";
};

const view = (i: number) => {
    if (currentview.value == i) currentview.value = 0;
    else currentview.value = i;
    side.value = "front";
};

useSeoMeta({
    title: `${colid}`,
});
</script>
