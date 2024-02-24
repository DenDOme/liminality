<template>
    <div class="wrapper bg-dim-500">
        <headerComponent />
        <section class="bg-dim-200 py-[100px]">
            <div class="container">
                <div class="flex items-center justify-between mx-12">
                    <div class="max-w-[450px]">
                        <div class="text-2xl text-dim-500">Проект <span class="text-dim-400">Лиминалитй</span></div>
                        <div class="my-5">Lorem ipsum dolor sit amet consectetur. Et platea consectetur et elit elit
                            volutpat maecenas auctor. Leo maecenas viverra in lorem sed nisi tempus sit. Vitae et risus nec
                            vel
                            mi dui magna. Ac sit pellentesque vitae vitae morbi lobortis diam mus.</div>
                        <div class="flex items-center gap-[20px]">
                            <p ref="textToCopy"
                                class="w-[260px] h-[50px] flex items-center justify-center bg-dim-500 text-dim-100 text-center">
                                play.backrooms-liminality.ru</p>
                            <button class="main__button" @click="copyIp">скопировать</button>
                        </div>
                    </div>
                    <div class="main__right relative">
                        <img src="../assets/imgs/fire.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-dim-500 py-[100px] text-dim-100">
            <div class="container">
                <h1 class="text-center text-dim-300 text-[34px]">
                    Новые уровни
                </h1>
                <div class="flex justify-between items-center pt-[100px]">
                    <div class="max-w-[420px]">
                        <img src="../assets/imgs/FirstLvl.png" alt="" class="pb-[30px]">
                        <div class="text-dim-300 text-[25px] pb-[15px]">Backrooms</div>
                        <div class="about__item-text">Lorem ipsum dolor sit amet consectetur. Feugiat risus purus quis
                            semper in
                            vitae. Nisl nunc tincidunt consequat vestibulum leo ultricies mollis neque. In vitae platea ut
                            id.
                            Felis quis quis amet congue.</div>
                    </div>
                    <div class="max-w-[420px]">
                        <img src="../assets/imgs/SecondLvl.png" alt="" class="pb-[30px]">
                        <div class="text-dim-300 text-[25px] pb-[15px]">Backrooms</div>
                        <div class="about__item-text">Lorem ipsum dolor sit amet consectetur. Feugiat risus purus quis
                            semper in
                            vitae. Nisl nunc tincidunt consequat vestibulum leo ultricies mollis neque. In vitae platea ut
                            id.
                            Felis quis quis amet congue.</div>
                    </div>
                </div>
            </div>
        </section>
        <hr class="max-w-[1320px] mx-auto bg-dim-400 h-[2px] border-0">
        <section class="bg-dim-500 py-[100px] text-dim-100">
            <div class="container">
                <h1 class="text-center text-dim-300 text-[34px]">
                    Новые мобы
                </h1>
                <div class="flex justify-between items-center pt-[100px]">
                    <div class="max-w-[420px]">
                        <img src="../assets/imgs/ThirdLvl.png" alt="" class="pb-[30px]">
                        <div class="text-dim-300 text-[25px] pb-[15px]">backrooms</div>
                        <div class="about__item-text">Lorem ipsum dolor sit amet consectetur. Feugiat risus purus quis
                            semper in
                            vitae. Nisl nunc tincidunt consequat vestibulum leo ultricies mollis neque. In vitae platea ut
                            id.
                            Felis quis quis amet congue.</div>
                    </div>
                    <div class="max-w-[420px]">
                        <img src="../assets/imgs/FourthLvl.png" alt="" class="pb-[30px]">
                        <div class="text-dim-300 text-[25px] pb-[15px]">backrooms</div>
                        <div class="text-[14px]">Lorem ipsum dolor sit amet consectetur. Feugiat risus purus quis semper in
                            vitae. Nisl nunc tincidunt consequat vestibulum leo ultricies mollis neque. In vitae platea ut
                            id.
                            Felis quis quis amet congue.</div>
                    </div>
                </div>
            </div>
        </section>
        <hr class="max-w-[1320px] mx-auto bg-dim-400 h-[2px] border-0">
        <section class="bg-dim-500 py-[200px]">
            <div class="container">
                <div class="flex justify-between items-center">
                    <div class="max-w-[400px]">
                        <div class="text-dim-300 text-[25px] pb-[15px]">Присойденяйся к нам</div>
                        <div class="text-dim-100 py-[30px]">Lorem ipsum dolor sit amet consectetur. Eget at dictum non
                            lacus.
                            Quisque ut
                            eget rhoncus vel consectetur accumsan pharetra. Platea libero accumsan tellus nec morbi
                            volutpat.
                            Vulputate duis erat pharetra cursus varius. Nunc egestas integer augue magna posuere. Amet nunc
                            leo
                            arcu cursus et.</div>
                        <div class="flex items-center gap-[20px]">
                            <p
                                class="w-[260px] h-[50px] flex items-center justify-center bg-dim-300 text-dim-500 text-center">
                                play.backrooms-liminality.ru
                            </p>
                            <button class="text-dim-100" @click="copyIp">скопировать</button>
                        </div>
                    </div>
                    <div class="">
                        <img src="../assets/imgs/noname.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <footerComponent />
    </div>
</template>

<script>
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'

export default {
    name: 'home',
    displayName: 'homePage',
    components: {
        headerComponent,
        footerComponent
    },
    methods: {
        copyIp() {
            console.log('copy ip')
            const textToCopy = this.$refs.textToCopy.innerText;

            const el = document.createElement('textarea');
            el.value = textToCopy;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);

        },
    }
}
</script>

<style scoped>
.main__right::after {
    content: ' ';
    background: url('../assets/imgs/item.png');
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
}
</style>