<template>
    <headerComponent />
    <section class="main">
        <div class="container">
            <div class="main__row">
                <div class="main__left">
                    <div class="main__header">Проект <span class="header-color">Лиминалитй</span></div>
                    <div class="main__text">Lorem ipsum dolor sit amet consectetur. Et platea consectetur et elit elit
                        volutpat maecenas auctor. Leo maecenas viverra in lorem sed nisi tempus sit. Vitae et risus nec vel
                        mi dui magna. Ac sit pellentesque vitae vitae morbi lobortis diam mus.</div>
                    <div class="main__buttons">
                        <p class="ip">play.backrooms-liminality.ru</p>
                        <button class="main__button" @click="copyIp">скопировать</button>
                    </div>
                </div>
                <div class="main__right" v-bind:style="{ position: 'relative' }">
                    <img class="main__img" src="../assets/fire.png" alt="">
                </div>
            </div>
        </div>
    </section>
    <section class="about level">
        <div class="container">
            <div class="container">
                <h1 class="about__header">

                </h1>
                <div class="about__row">
                    <div class="about__item">
                        <img src="" alt="" class="about__item-img">
                        <div class="about__item-header"></div>
                        <div class="about__item-text"></div>
                    </div>
                    <div class="about__item">
                        <img src="" alt="" class="about__item-img">
                        <div class="about__item-header"></div>
                        <div class="about__item-text"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr class="section__line">
    <section class="about mob">
        <div class="container">
            <h1 class="about__header">

            </h1>
            <div class="about__row">
                <div class="about__item">
                    <img src="" alt="" class="about__item-img">
                    <div class="about__item-header"></div>
                    <div class="about__item-text"></div>
                </div>
                <div class="about__item">
                    <img src="" alt="" class="about__item-img">
                    <div class="about__item-header"></div>
                    <div class="about__item-text"></div>
                </div>
            </div>
        </div>
    </section>
    <hr class="section__line">
    <section class="last">
        <div class="container">
            <div class="last__row">
                <div class="last__left">
                    <div class="last__header"></div>
                    <div class="last__text"></div>
                    <div class="last__buttons">
                        <p class="last__ip"></p>
                        <button class="last__copy" @click="copyIp"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footerComponent />
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
        }
    }
}
</script>

<style scoped>
.main {
    background-color: #DFDFDF;
    padding: 50px 0;
}

.main__buttons {
    display: flex;
    align-items: center;
}

.main__text {
    margin: 20px 0;
}

.main__left {
    max-width: 450px;
}

.main__header {
    font-size: 25px;
    color: #131313
}

.main__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;
}

.main__img {
    position: relative;
}

.main__right::after {
    content: ' ';
    background: url('../assets/item.png');
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
}
</style>