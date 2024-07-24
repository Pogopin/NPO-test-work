<script setup lang="ts">
import { reactive } from 'vue';
import { usePersonStore } from '@/stores/person';
import { storeToRefs } from 'pinia';
import Field from '@/components/ui/BaseInput.vue';

const personStore = usePersonStore();
const { person } = storeToRefs(personStore);

const userMenu = reactive({
  avatar: person.value.avatar,
  name: person.value.name,
  status: person.value.status
})
</script>

<template>
    <header class="header">
        <div class="header__container">
            <div class="header__rect rect"></div>
            <button class="header__menu-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.67212H3" stroke="#9CBEFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 5.80328H3" stroke="#9CBEFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 13.541H3" stroke="#9CBEFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17 17.4099H3" stroke="#9CBEFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div class="header__search">
                <Field                   
                    placeholder="Поиск"
                >
                    <template #leftIcon>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58335C17.5 5.2111 13.9556 1.66669 9.58332 1.66669C5.21107 1.66669 1.66666 5.2111 1.66666 9.58335C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="#9A9B9D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.3333 18.3334L16.6667 16.6667" stroke="#9A9B9D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </template>
                </Field>
            </div>
            <button class="header__button-pro">Улучшить до PRO</button>
            <div class="header__notification notification">
                <div class="notification__icon"><img src="@/assets/images/notifi.svg" alt="icon"></div>
                <div class="notification__avatar"><img :src="userMenu.avatar" alt="avatar"></div>
                <div class="notification__person">
                    <p class="notification__person-name">{{ userMenu.name }}</p>
                    <p class="notification__person-status">{{ userMenu.status }}</p> 
                </div>
                <img class="notification__arrow" src="@/assets/images/arrow.svg" alt="arrow">
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss">

.header {
    // box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
    &__container {
        max-width: 1890px;
        margin: 0 auto;
        padding: 10px 15px;   
        display: flex;       
        align-items: center;
        background-color: #fff;
    }
    &__rect {
        border-radius: 5px;
        width: 187px;
        height: 48px;
        background-color: #f8f9fd;
    }
    &__menu-button {
        border: none;
        background-color: transparent;
        margin-left: 10px;
    }
    &__search {
        width: 500px;
        margin-left: 447px;
        background-color: #f8f9fd;
        padding: 12px 12px 12px 44px;
        border-radius: 5px;
    }   
    &__button-pro {
        margin-left: auto;
        background: radial-gradient(1910.15% 119.88% at 3.33% 69.79%, rgb(119, 166, 255) 0%, rgb(10, 206, 210) 65.70950746536255%, rgb(26, 228, 182) 100%);
        border-radius: 10px;     
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 12px;
        color: #fff;
        padding: 13px 16px;
        border: none;
    }
    &__notification {
        margin-left: 34px;
        display: flex;
        align-items: center;
        gap: 25px;
    }
}
.notification {
    font-family: var(--font-family);
    font-weight: 400;
    &__person-name {
        font-size: 14px;
        color: #121212;
    }
    &__person-status {
        font-size: 12px;
        color: #515151;
        margin-top: 5px;
    }
}
</style>