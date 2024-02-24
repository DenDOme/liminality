<template>
    <footer class="h-[120px] flex items-center bg-dim-100">
        <div class="container">
            <div class="flex items-center justify-between">
                <router-link to="/"><img src="../assets/imgs/logo2.png" alt="" class="logo"></router-link>
                <nav class="flex items-center gap-[20px]">
                    <button
                        class="w-[320px] h-[60px] text-[20px] text-dim-100 bg-center bg-button border-[3px] border-dim-500"
                        @click="showIp">Скопировать Ip</button>
                    <a href=""><img src="../assets/imgs/vk.svg" alt="" class="socials"></a>
                    <a href=""><img src="../assets/imgs/discord.svg" alt="" class="socials"></a>
                    <a href=""><img src="../assets/imgs/github.svg" alt="" class="socials"></a>
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
