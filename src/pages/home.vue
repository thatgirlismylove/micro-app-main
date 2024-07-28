<template>
    <div>
        <micro-app :data="data" iframe name="my-app" url="http://localhost:3000/" @created="created"
    @beforemount="beforemount" @mounted="mounted" @unmount="unmount" @error="error"></micro-app>
    </div>
</template>