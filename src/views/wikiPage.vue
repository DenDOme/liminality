<template>
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
                        <router-link :to="'/wiki/levels/' + level.id"
                            class="tab-item flex items-center justify-between max-w-[1050px] w-full bg-dim-200 py-[22px] px-[30px]"
                            v-for="level in levels" :key="level.id">
                            <div class="max-w-[600px]">
                                <div class="mb-[20px] text-[25px]">{{ level.name }}</div>
                                <div class="leading-[16px]">{{ level.text }}</div>
                            </div>
                            <div class="right">
                                <img :src="level.img" alt="" class=" w-[300px]">
                            </div>
                        </router-link>
                    </div>
                    <div class="tab flex items-center justify-between mt-[40px] mx-auto flex-wrap gap-y-[40px]"
                        v-show="activeIndex === 1">
                        <router-link :to="'/wiki/objects/' + object.id"
                            class="tab-item items-center justify-between max-w-[250px] w-full bg-dim-200 py-[30px] px-[25px]"
                            v-for="object in objects" :key="object.id">
                            <img :src="object.img" alt="" class="w-[200px] h-[200px]">
                            <div class="text-[25px] text-dim-400 mt-[15px] mb-[5px]">{{ object.name }}</div>
                            <div class="leading-[16px]">{{ object.text }}</div>
                        </router-link>
                    </div>
                    <div class="tab flex flex-col items-center gap-[40px] mt-[40px]" v-show="activeIndex === 2">
                        <router-link :to="'/wiki/mobs/' + mob.id"
                            class="tab-item flex items-center justify-between max-w-[1050px] w-full bg-dim-200 py-[22px] px-[30px]"
                            v-for="mob in mobs" :key="mob.id">
                            <div class="max-w-[600px]">
                                <div class="mb-[20px] text-[25px]">{{ mob.name }}</div>
                                <div class="leading-[16px]">{{ mob.text }}</div>
                            </div>
                            <div class="right">
                                <img :src="mob.img" alt="" class="w-[300px]">
                            </div>
                        </router-link>
                    </div>
                    <div class="tab flex flex-col items-center gap-[40px] mt-[40px]" v-show="activeIndex === 3">
                        <router-link :to="'/wiki/groups/' + group.id"
                            class="tab-item flex items-center justify-between max-w-[1050px] w-full bg-dim-200 py-[22px] px-[30px]"
                            v-for="group in groups" :key="group.id">
                            <img :src="group.img" alt="" class="h-[250px] w-[125px]">
                            <div class="max-w-[600px]">
                                <div class="mb-[20px] text-[25px] text-dim-400">{{ group.name }}</div>
                                <div class="leading-[16px]">{{ group.text }}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import wiki from '../wiki.js';


export default {
    name: 'wiki',
    displayName: 'wikiPage',
    data() {
        return {
            activeIndex: 0,
            levels: wiki.levels,
            objects: wiki.objects,
            mobs: wiki.mobs,
            groups: wiki.groups,
        };
    },
    methods: {
        callbutton(number) {
            this.activeIndex = number;
        }
    }
}
</script>

<style>
.active {
    background-color: '#5B4500';
    color: '#fff';
}
</style>