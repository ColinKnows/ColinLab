<script setup>

</script>

<template>
    <div class="MainBody">
        <slot></slot>
    </div>
</template>

<style scoped>

.MainBody{
  height: calc(75vh - 96px);
  padding: 1.2rem;
  overflow:scroll
}

::-webkit-scrollbar{
    display:none;
}

</style>