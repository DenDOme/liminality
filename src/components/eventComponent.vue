<template>
    <router-link :to="'/events/' + sendEvent.id">
        <div class="bg-dim-200 max-w-[1080px] mx-auto py-[40px] px-[35px] flex items-center justify-between mb-[40px]">
            <div class="left">
                <img src="" alt="" class="w-[520px] h-[370px] bg-dim-500">
            </div>
            <div class="max-w-[420px]">
                <div class="text-dim-400 text-[25px]">{{ sendEvent.name }}</div>
                <div class="leading-[17px] mt-[20px]">{{ sendEvent.text }}</div>
                <div class="text-end">Дата - {{ sendEvent.date }}</div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'eventComponent',
    props: { sendEvent: Object },
}
</script>