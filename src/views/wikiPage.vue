<template>
    <headerComponent />
    <footerComponent />
</template>

<script>
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'

export default {
    name: 'wiki',
    displayName: 'wikiPage',
    components: {
        headerComponent,
        footerComponent
    },
}
</script>