<template>
    <section class="bg-dim-200">
        <div class="container">
            <div class="bg-dim-500 border-[5px] border-dim-100 py-[50px] my-[50px] px-[100px] text-dim-100">
                <button class="flex items-center gap-5 text-[20px] text-dim-300 mb-[30px]" @click="goBack"><img
                        src="../assets/imgs/Arrow.svg" alt="">
                    Назад</button>
                <div class="flex items-start justify-between relative">
                    <img :src="item.img" alt="">
                    <div class="max-w-[450px]">
                        <div class="text-[34px] text-dim-300 mb-[30px]">{{ item.name }}</div>
                        <div class="text-[14px] leading-[18px]">{{ item.text }}</div>
                        <div v-show="itsEvent == true" class="w-[170px] mt-[50px]">Дата - {{ item.date
                        }}
                        </div>
                    </div>
                </div>
                <div class="mt-[40px] text-[25px] text-dim-300">Описание</div>
                <div class="mt-[30px]">{{ item.main }}</div>
            </div>
        </div>
    </section>
</template>

<script>
import events from '../event.js';
import wiki from '../wiki.js';

export default {
    name: 'details',
    data() {
        return {
            itsEvent: false,
            item: []
        }
    },
    methods: {
        fetchData() {
            let temp;
            if (this.$router.currentRoute._rawValue.name === "event-detail") {
                temp = events
                this.itsEvent = true;
            } else if (this.$router.currentRoute._rawValue.name === "level-detail") {
                temp = wiki.levels
            } else if (this.$router.currentRoute._rawValue.name === "mob-detail") {
                temp = wiki.mobs
            } else if (this.$router.currentRoute._rawValue.name === "object-detail") {
                temp = wiki.objects
            } else if (this.$router.currentRoute._rawValue.name === "group-detail") {
                temp = wiki.groups
            }
            temp.forEach((element) => {
                if (element.id == this.$route.params.id) {
                    this.item = element;
                }
            });
        },
        goBack() {
            this.$router.back();
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>