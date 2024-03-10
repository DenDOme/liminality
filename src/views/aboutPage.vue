<template>
    <section class="bg-dim-200 py-[100px]">
        <div class="container">
            <div class="flex items-center justify-between">
                <div class="max-w-[500px]">
                    <div class="text-dim-400 text-[25px] pb-[30px]">О Проекте</div>
                    <div class="pb-[20px] leading-[20px]">Lorem ipsum dolor sit amet consectetur. Egestas lacus sed ipsum
                        felis sit. Enim
                        non
                        tristique vitae amet dolor enim curabitur blandit. Eget non placerat cursus euismod eget pharetra a
                        porta. Ac orci sapien cursus aliquam viverra elementum. A nullam integer augue hac egestas semper
                        accumsan imperdiet eget. Ultricies eu nulla enim mattis mauris cras elit arcu tristique. Pharetra
                        aliquet vel convallis eget lectus ullamcorper pellentesque massa. Sed sed aenean tellus convallis
                        erat morbi amet. Pretium lectus posuere amet erat vitae. Quam ipsum turpis ac diam velit nulla
                        ultrices. Amet aenean sit molestie sed eu imperdiet. Lectus egestas quam ac faucibus in. Suspendisse
                        molestie nunc id vulputate sit fermentum morbi. Amet sed ut at vitae in scelerisque nulla.</div>
                    <div class="leading-[20px]">Lorem ipsum dolor sit amet consectetur. Egestas lacus sed ipsum felis sit.
                        Enim non
                        tristique vitae amet dolor enim curabitur blandit. Eget non placerat cursus euismod eget pharetra a
                        porta. Ac orci sapien cursus aliquam viverra elementum. </div>

                </div>
                <div class="">
                    <img src="../assets/imgs/noname.png" alt="" class="bg-gray-500 h-[550px]">
                </div>
            </div>
        </div>
    </section>
    <section class="bg-dim-500 py-[100px] text-dim-100">
        <div class="container">
            <h2 class="text-center text-dim-300 text-[34px] mb-[90px]">Персонал</h2>
            <swiper :modules="modules" :space-between="200" navigation :loop="true" :centeredSlides="true"
                :centeredSlidesBounds="true">
                <swiper-slide v-for="slide in slides" :key="slide.id" class="w-[420px]">
                    <div class="w-[420px]">
                        <img :src="slide.img" alt="" class="w-[150px] h-[150px] rounded-[150px] bg-gray-400 mx-auto">
                        <div class="text-dim-300 text-[25px] mt-[50px]">{{ slide.name }}</div>
                        <div class="leading-[16px] mt-[15px]">{{ slide.text }}</div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import devs from '../devs';

export default {
    name: 'about',
    displayName: 'aboutPage',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return { modules: [Navigation] }
    },
    data() {
        return {
            slides: devs,
            slideOptions: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            }
        };
    }
}
</script>

<style>
.swiper-slide {
    display: flex;
    justify-content: center
}


.swiper-button-prev::after,
.swiper-button-next::after {
    color: #fff !important;
}
</style>