<template>
    <headerComponent />
    <section class="bg-dim-200">
        <div class="container">
            <div class="bg-dim-500 border-[5px] border-dim-100 py-[50px] my-[50px] px-[60px]">

            </div>
        </div>
    </section>
    <footerComponent />
</template>

<script>
import headerComponent from '@/components/headerComponent.vue';
import footerComponent from '@/components/footerComponent.vue';
import wiki from '../temp-data';

export default {
    name: 'details',
    components: {
        headerComponent,
        footerComponent,
    },
    data() {
        return { item: [] }
    },
    methods: {
        fetchData() {
            let temp;
            if (this.$router.currentRoute._rawValue.name === "event-detail") {
                temp = wiki.events;
            } else if (this.$router.currentRoute._rawValue.name === "level-detail") {
                temp = wiki.wiki.levels;
            } else if (this.$router.currentRoute._rawValue.name === "mob-detail") {
                temp = wiki.wiki.mobs
            } else if (this.$router.currentRoute._rawValue.name === "object-detail") {
                temp = wiki.wiki.objects
            } else if (this.$router.currentRoute._rawValue.name === "group-detail") {
                temp = wiki.wiki.groups
            }
            temp.forEach((element) => {
                if (element.id == this.$route.params.id) {
                    this.item = element;
                }
            });
            console.log(this.item);
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>