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
  width: 22rem;
  padding: 1.2rem;
  overflow:scroll
}

::-webkit-scrollbar{
    display:none;
}

@media (max-width: 576px) {
  .MainBody {
    width: 100vw;
    height: calc(100vh - 96px);
  }
}

</style>