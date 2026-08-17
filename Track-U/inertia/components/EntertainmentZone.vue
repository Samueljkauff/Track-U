<template>
    <div class="h-full flex flex-col">
        <div class="flex flex-col h-full items-center pr-3 pt-3 font-bold text-[#212529]">
            <p>{{ entertainmentZone[selectedZone].name }}</p>
            <hr class="w-full">
                <component :playing="playing" @update:playing="playing = $event" :is="entertainmentZone[selectedZone].component" />
            <button class="mt-auto mb-3 container-shadow" @click="clickAction()">
                {{ entertainmentZone[selectedZone].buttonType }}
            </button>
            <DotNav :tabs="entertainmentZone.length" v-model="selectedZone" class="mt-auto" />
        </div>
    </div>
</template>

<script lang="ts">
import Snake from './Snake.vue';
import DotNav from './DotNav.vue';
import Pong from './Pong.vue';
import AlbumShowcase from './AlbumShowcase.vue';
import { Component } from 'vue';

interface Sections {
    name: string,
    component: Component,
    buttonType: string,
}

export default {
    data() {
    return {
      entertainmentZone: [{
        name: 'Mosaic',
        component: AlbumShowcase,
        buttonType: 'Lock',
      },
    {
        name: 'Pong',
        component: Pong,
        buttonType: 'Play',
    },
    {
        name: 'Snake',
        component: Snake,
        buttonType: 'Play',
    }] as Sections[],
      selectedZone: 0,
      playing: false,
    }
  },
  methods: {
    clickAction() {
        this.playing = true;
    }
  },
  components: {

    AlbumShowcase,
    DotNav,
    Pong,
    Snake
  }
}
</script>