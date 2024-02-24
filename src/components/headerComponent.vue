<template>
    <header class="h-[100px] flex items-center text-dim-100 bg-dim-500">
        <div class="container">
            <div class="header__menu flex items-center justify-between">
                <router-link to="/" class="text-dim-100 flex gap-[13px] items-center text-[30px]"><img
                        src="../assets/imgs/logo.svg" alt="" class="w-[50px]">Liminality</router-link>
                <nav class="flex items-center gap-[23px] text-[20px]">
                    <router-link to="/" class="text-dim-100">Главное</router-link>
                    <router-link to="/wiki" class="text-dim-100">Вики</router-link>
                    <router-link to="/about" class="text-dim-100">Про нас</router-link>
                    <router-link to="/events" class="text-dim-100">Событии</router-link>
                    <button class="w-[320px] h-[60px] text-dim-100 bg-center bg-button border-[3px] border-dim-500"
                        @click="showIp">Скопировать
                        Ip</button>
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
            const textToCopy = 'play.backrooms-liminality.ru';

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