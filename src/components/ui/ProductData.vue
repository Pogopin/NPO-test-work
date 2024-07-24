<script setup lang="ts">
</script>
<template>
    <div class="product-data">
        <p class="product-data__info">Кол-во: <span>305</span></p>
        <p class="product-data__info">Без операций: <span>330</span></p>
    </div>
</template>
<style scoped lang="scss">
.product-data {    
    border: 0.50px solid #e7e7e7;
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    gap: 20px;    
    background-color: #fff;
    flex-basis: 545px;

    &__info {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        color: #757d8a;
    }
    &__info > span {
        color: #282828;
    }
}
</style>