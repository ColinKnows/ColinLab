<template>
    <RouterLink to="/home" custom v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'Active':''">Home</li>
    </RouterLink>
    <RouterLink to="/Assets" custom v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'Active':''">Assets</li>
    </RouterLink>
    <RouterLink to="/Transacations" custom v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'Active':''">Transacations</li>
    </RouterLink>
    <RouterLink to="/News" custom v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'Active':''">News</li>
    </RouterLink>
</template>