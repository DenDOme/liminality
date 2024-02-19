<template>
    <footer class="footer">
        <div class="container">
            <router-link to="/"><img src="../assets/logo2.png" alt="" class="logo"></router-link>
            <nav class="footer__menu">
                <button id="ipButton" @click="showIp">Скопировать Ip</button>
                <a href="" class="footer-links"><img src="../assets/vk.svg" alt="" class="socials"></a>
                <a href="" class="footer-links"><img src="../assets/discord.svg" alt="" class="socials"></a>
                <a href="" class="footer-links"><img src="../assets/github.svg" alt="" class="socials"></a>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footerComponent',
    methods: {
        showIp() {
            console.log('click');
        }
    }
}
</script>