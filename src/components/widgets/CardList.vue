<script setup lang="ts">
import Card from '@/components/widgets/Card.vue';
import { cardData } from '../../config/cardData';
</script>
<template>
    <div class="card-list">
        <Card v-for="(el, index) in cardData"
            :data="el"
        />
    </div>
</template>
<style scoped lang="scss">
.card-list {
    display: flex;
    gap: 10px;
}
</style>