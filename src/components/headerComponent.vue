<template>
    <header class="header">
        <div class="container">
            <router-link to="/"><img src="../assets/logo.svg" alt="" class="logo">Liminality</router-link>
            <nav class="header__menu">
                <router-link to="">Вики</router-link>
                <router-link to="">Про нас</router-link>
                <router-link to="">Событии</router-link>
                <button id="ipButton" @click="showIp">Скопировать Ip</button>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'headerComponent',
    methods: {
        showIp() {
            console.log('click');
        }
    }
}
</script>
