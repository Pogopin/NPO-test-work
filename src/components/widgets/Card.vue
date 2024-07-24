<script setup lang="ts">
import BaseInput from '@/components/ui/BaseInput.vue';

interface ICardData {
    title: string,
    headerCol: string[],
    content: string
}
interface ICardProps {
    data: ICardData,
    
}
const props = defineProps<ICardProps>();
</script>
<template>
   <div class="card">
        <h4 class="card__title">{{ props.data.title }}</h4>
        <div class="card__block">
                       
            <div class="card__header">
                <div class="card__header-column" v-for="(el, index) in props.data.headerCol" :key="index"                
                >
                    {{ el }}
                </div>                
            </div>
            <div class="card__input">
                <BaseInput
                    placeholder="Поиск"
                >
                    <template #leftIcon>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58335C17.5 5.2111 13.9556 1.66669 9.58332 1.66669C5.21107 1.66669 1.66666 5.2111 1.66666 9.58335C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="#9A9B9D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.3333 18.3334L16.6667 16.6667" stroke="#9A9B9D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </template>
                </BaseInput>
            </div>
            <div class="card__body">
                <div 
                    class="card__body-column"
                    v-for="(el, index) in 60" :key="index"
                >
                    lorem ipsum
                </div>                
            </div>           
        </div>
   </div>
</template>
<style scoped lang="scss">
::-webkit-scrollbar {
    width: 6px;        
}
::-webkit-scrollbar-track {
    background-color: #f5f5f5;    
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    height: 81px;
    background-color: #77a6ff;
}
.card {
    border: 0.50px solid #e0e0e0;
    border-radius: 10px;
    width: 520px;
    height: 733px; 
    background-color: #fff;
    margin-top: 10px;
    padding: 15px 12px;   
    &__title {
        font-weight: 700;
        font-size: 16px;
        color: #77a6ff;
        text-align: center;
    }
    &__block {
        border: 0.50px solid #e7e7e7;
        border-radius: 15px;
        overflow: hidden;
        margin-top: 15px;
    }
    &__header {
        display: grid;
        grid-template-columns: 112px 112px 1fr;
        height: 56px;       
        padding: 5px 0;
        background-color: #f2f7ff;
        align-items: center;
        margin-bottom: 5px;
        &-column {          
            display: flex;
            justify-content: center;
            align-items: center;  
            height: 100%;
            font-weight: 700;
            font-size: 14px;
            text-align: center;
            color: #1d2433;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                height: 65px;
                top: -5px;
                right: 0;
                width: 1px;
                background-color: #e2e2e2;
            }            
            &:last-child::after {
                width: 0;
            }
        }
    }
    &__input {
        background-color: #f8f9fd;
        padding: 12px 12px 12px 44px;
        border-radius: 5px;
        margin: auto;
        max-width: 450px;
        position: relative;
    }
    &__body {
        overflow-y: scroll;
        height: 593px;
        display: grid;
        grid-template-rows: repeat(5, 40px);
        grid-template-columns: 112px 112px 1fr;
        margin-top: 5px;
        &-column {
            padding: 11px 8px;
            border-bottom: 1px solid #e2e2e2;
            border-right: 1px solid #e2e2e2;
        }
    }
}
.card:nth-child(2),.card:nth-child(3) {
    .card__header{
        grid-template-columns: 112px 1fr 118px;
    }
    .card__body {
        grid-template-columns: 112px 1fr 112px;
    }
}

</style>