<template>
    <headerComponent />
    <section class="main">
        <div class="container">
            <div class="main__row">
                <div class="main__left">
                    <div class="main__header"></div>
                    <div class="main__text"></div>
                    <div class="main__buttons">
                        <p class="ip"></p>
                        <button class="main__button" @click="copyIp"></button>
                    </div>
                </div>
                <img class="main__img" src="../assets/fire.png" alt="">
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