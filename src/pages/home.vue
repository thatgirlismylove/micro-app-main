<template>
    <div class="child-app">
        <micro-app :data="data" iframe name="my-app" url="http://localhost:3000/" @created="created"
    @beforemount="beforemount" @mounted="mounted" @unmount="unmount" @error="error"></micro-app>
    </div>
</template>

<style scoped>
.child-app {
    width: 200px;
    height: 200px;
    margin: 0 auto;
}
</style>