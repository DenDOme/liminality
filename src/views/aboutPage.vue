<template>
    <headerComponent />
    <footerComponent />
</template>

<script>
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'

export default {
    name: 'about',
    displayName: 'aboutPage',
    components: {
        headerComponent,
        footerComponent
    },
}
</script>