<template>
    <input type="text" :value="value.b" @input="$emit('input', $event)">
</template>

<script>
    export default {
        name: "test",
        props: {
            value: {}
        },
    }
</script>

<style scoped>

</style>