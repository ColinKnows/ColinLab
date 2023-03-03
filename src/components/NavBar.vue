<script setup></script>
<template>
    <van-nav-bar class="NavBar">
        <template #left>
        <van-icon name="fire" size="18" color="#1A1F84" />
        <div class="routeName">{{ this.$route.name}}</div>
        </template>
        <template #right>
        <van-icon name="search" size="18" color="#1A1F84"/>
        </template>
    </van-nav-bar>
</template>

<style scoped>

.NavBar{
    padding-left: .3rem;
}

.routeName{
    padding-left: .3rem;
    font-weight: bold;
    color: #1A1F84;
}

</style>