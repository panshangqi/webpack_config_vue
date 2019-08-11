<template>
    <div id="button-demo">
        <div>
            <sa-button >Default</sa-button>
            <sa-button type="primary">Primary</sa-button>
            <sa-button type="success">Success</sa-button>
            <sa-button type="warning">Warning</sa-button>
            <sa-button type="danger">Danger</sa-button>
        </div>
        <br/>
        <div>
            <sa-button>Default</sa-button>
            <sa-button type="primary" empty>Primary</sa-button>
            <sa-button type="success" empty>Success</sa-button>
            <sa-button type="warning" empty>Warning</sa-button>
            <sa-button type="danger" empty>Danger</sa-button>
        </div>
        <br/>
        <div>
            <sa-button round>Default</sa-button>
            <sa-button type="primary" round>Primary</sa-button>
            <sa-button type="success" round>Success</sa-button>
            <sa-button type="warning" round>Warning</sa-button>
            <sa-button type="danger" round>Danger</sa-button>
        </div>
        <br/>
        <div>
            <sa-button round>Default</sa-button>
            <sa-button type="primary" empty round>Primary</sa-button>
            <sa-button type="success" empty round>Success</sa-button>
            <sa-button type="warning" empty round>Warning</sa-button>
            <sa-button type="danger" empty round>Danger</sa-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mene-demo.vue"
    }
</script>

<style scoped>

</style>