<template>
    <header class="header">
        <div class="container">
            <div class="header__menu">
                <router-link to="/" class="logo-link"><img src="../assets/logo.svg" alt=""
                        class="logo">Liminality</router-link>
                <nav class="header__menu-items">
                    <router-link to="/wiki" class="menu-items">Вики</router-link>
                    <router-link to="/about" class="menu-items">Про нас</router-link>
                    <router-link to="" class="menu-items">Событии</router-link>
                    <button id="ipButton" @click="showIp">Скопировать Ip</button>
                </nav>
            </div>
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

<style scoped>
#ipButton {
    border: 3px solid #000;
    width: 320px;
    height: 60px;
    font-size: 25px;
    color: #fff;
    background: url('../assets/button.png') center;
}

.header {
    height: 100px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    background-color: #131313;
}

.logo {
    width: 50px;
}

.logo-link {
    color: #FFFFFF;
    display: flex;
    gap: 13px;
    align-items: center;
    font-size: 45px;
}

.header__menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__menu-items {
    display: flex;
    align-items: center;
    gap: 23px;
    font-size: 25px;
}

.menu-items {
    color: #FFFFFF;
}
</style>
