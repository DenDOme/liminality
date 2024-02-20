<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__menu">
                <router-link to="/"><img src="../assets/logo2.png" alt="" class="logo"></router-link>
                <nav class="footer__menu-items">
                    <button id="ipButton" @click="showIp">Скопировать Ip</button>
                    <a href="" class="footer-links"><img src="../assets/vk.svg" alt="" class="socials"></a>
                    <a href="" class="footer-links"><img src="../assets/discord.svg" alt="" class="socials"></a>
                    <a href="" class="footer-links"><img src="../assets/github.svg" alt="" class="socials"></a>
                </nav>
            </div>
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

<style scoped>
#ipButton {
    border: 3px solid #000;
    width: 320px;
    height: 60px;
    font-size: 25px;
    color: #fff;
    background: url('../assets/button.png') center;
}

.footer {
    height: 120px;
    display: flex;
    align-items: center;
}

.footer__menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer__menu-items {
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>