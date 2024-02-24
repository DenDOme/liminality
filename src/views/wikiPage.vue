<template>
    <headerComponent />
    <div class="bg-dim-200">
        <div class="container">
            <div class="bg-dim-500 border-[5px] border-dim-100 py-[50px] my-[50px] px-[60px]">
                <div class="flex items-center justify-between pb-[20px]">
                    <button @click="callbutton(0)" class="bg-dim-300 text-dim-500 h-[100px] w-[250px] text-[25px]" :class="activeIndex === 0 ? 'bg-dim-400 text-white' : 'bg-dim-300 text-dim-500'
                        + ' h-[100px] w-[250px] text-[25px] '">Уровни</button>
                    <button @click="callbutton(1)" class="bg-dim-300 text-dim-500 h-[100px] w-[250px] text-[25px]" :class="activeIndex === 1 ? 'bg-dim-400 text-white' : 'bg-dim-300 text-dim-500'
                        + ' h-[100px] w-[250px] text-[25px] '">Объекты</button>
                    <button @click="callbutton(2)" class="bg-dim-300 text-dim-500 h-[100px] w-[250px] text-[25px]" :class="activeIndex === 2 ? 'bg-dim-400 text-white' : 'bg-dim-300 text-dim-500'
                        + ' h-[100px] w-[250px] text-[25px] '">Мобы</button>
                    <button @click="callbutton(3)" class="bg-dim-300 text-dim-500 h-[100px] w-[250px] text-[25px]" :class="activeIndex === 3 ? 'bg-dim-400 text-white' : 'bg-dim-300 text-dim-500'
                        + ' h-[100px] w-[250px] text-[25px] '">Группы</button>
                </div>
                <hr class="w-[1100px] bg-dim-100 border-0 h-[1px] mx-auto">
                <div class="tabs">
                    <div class="tab flex flex-col items-center gap-[40px] mt-[40px]" v-show="activeIndex === 0">
                        <div class="tab-item flex items-center justify-between max-w-[1050px] w-full bg-dim-200 py-[22px] px-[30px]"
                            v-for="level in levels" :key="level.id">
                            <div class="max-w-[600px]">
                                <div class="mb-[20px] text-[25px]">{{ level.name }}</div>
                                <div class="leading-[16px]">{{ level.text }}</div>
                            </div>
                            <div class="right">
                                <img src="" alt="" class="h-[150px] w-[300px] bg-dim-500">
                            </div>
                        </div>
                    </div>
                    <div class="tab" v-show="activeIndex === 1">

                    </div>
                    <div class="tab" v-show="activeIndex === 2">

                    </div>
                    <div class="tab" v-show="activeIndex === 3">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <footerComponent />
</template>

<script>
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import wiki from '../temp-data';

export default {
    name: 'wiki',
    displayName: 'wikiPage',
    components: {
        headerComponent,
        footerComponent
    },
    data() {
        return {
            activeIndex: 0,
            levels: [],
            objects: [],
            mobs: [],
            groups: [],
        };
    },
    methods: {
        callbutton(number) {
            this.activeIndex = number;
        },
        fetchAllData() {
            const data = wiki.wiki;
            this.levels = data.levels;
            this.objects = data.objects;
            this.mobs = data.mobs;
            this.groups = data.groups;
        }
    },
    mounted() {
        this.fetchAllData();
    },
}
</script>

<style>
.active {
    background-color: '#5B4500';
    color: '#fff';
}
</style>