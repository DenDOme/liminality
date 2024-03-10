<template>
    <div class="bg-dim-200">
        <div class="container">
            <div class="bg-dim-500 border-[5px] border-dim-100 py-[50px] my-[50px]">
                <div @click="log" v-for="event in events" :key="event.id">
                    <eventComponent :sendEvent="event" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import eventComponent from '@/components/eventComponent.vue';
import events from '../event.js';

export default {
    name: 'wiki',
    displayName: 'wikiPage',
    data() {
        return { events };
    },
    components: {
        eventComponent
    },
}
</script>