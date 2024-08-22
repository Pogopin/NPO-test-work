<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { list } from '../../config/list';
import BaseButton from '@/components/ui/BaseButton.vue';
import SpecialButton from '@/components/ui/SpecialButton.vue';
import ProductData from '@/components/ui/ProductData.vue';
import CardList from '@/components/widgets/CardList.vue';

const currentTab = ref<string>('Home');
// const tabs = {
//     HomePage, Result
// }
function show () {
    console.log(currentTab.value)
}
console.log(currentTab.value)

onMounted(() => {
    const svg = document.querySelectorAll('.icon') as NodeListOf<SVGElement>;
    const li = document.querySelectorAll('.sidebar__list-item') as NodeListOf<SVGElement>;
    svg.forEach((el,i) => {
        const path = el.querySelectorAll('path') as NodeListOf<SVGElement>;
     
            li[i].addEventListener('mouseover', () => {
                path.forEach(el => !el.hasAttribute('stroke') ? el.setAttribute('fill', '#77a6ff') : el.setAttribute('stroke', '#77a6ff'));
                
            })
            li[i].addEventListener('mouseout', () => {
                path.forEach(el => !el.hasAttribute('stroke') ? el.setAttribute('fill', 'black') : el.setAttribute('stroke', 'black'));                
            })
    })  
    
    const sidebar: any = document.querySelector('.sidebar');

    sidebar.addEventListener('mouseenter', () => {
    sidebar.classList.add('hovered');
    
    sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('hovered');
});
});
})
// function getImageUrlIcon (name: string) {
//     return new URL('../../assets/icons/' + name, import.meta.url).href
// }


</script>

<template>  
    <section class="content">
        <div class="content__container">
            <div class="content__sidebar sidebar">
                <ul class="sidebar__list">
                    <li class="sidebar__list-item" v-for="(el) in list" :key="el.text"     
                        @click="currentTab = el.component; show()"                   
                    >
                        <!-- <img :src="getImageUrlIcon(el.icon)" alt="">                     -->
                        <div class="sidebar__list-item-img" v-html="el.iconsvg"></div>
                        <span class="sidebar__list-text">{{ el.text }}</span>
                    
                    </li>
                </ul>                
            </div>
            <div class="content__body">
                 <!-- <component :is="tabs[currentTab]"></component> -->
                <div class="content__breadcrumbs breadcrumbs">
                    <div class="breadcrumbs__left">Главная</div>
                    <img src="@/assets/images/arrow-right.svg" alt="">
                    <div class="breadcrumbs__right">База деталей</div>
                </div>

                <div class="content__descriptions">
                    <p class="content__descriptions-text">База изделий, сборок и деталей</p>
                </div>
                <div class="content__filters">
                    <BaseButton
                        text="Сортировать по отметке"
                        :standart="true" 
                    />
                    <BaseButton
                        text="Сортировать по дате создания"
                        :standart="true" 
                    />
                    <BaseButton
                        text="Показать мои"
                        :standart="true" 
                    />
                    <BaseButton
                        text="Сбросить"
                        :reset="true" 
                    />
                </div>
                <div class="content__data">
                    <ProductData/>
                    <ProductData/>
                    <ProductData/>
                </div>               
                <div class="content__card-list">
                    <CardList/>
                </div>
                <div class="content__sp-panel">
                    <SpecialButton
                        text="Создать"
                        :create="true"
                    >
                        <template #leftIcon>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.6666 3.66669V12.3333" stroke="white" stroke-width="1.23809" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.33337 8H12" stroke="white" stroke-width="1.23809" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </template>
                    </SpecialButton>
                    <SpecialButton
                        text="Создать копированием"
                        :createByCopy="true"
                    >
                        <template #leftIcon>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.6666 3.66669V12.3333" stroke="#757D8A" stroke-width="1.23809" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.33337 8H12" stroke="#757D8A" stroke-width="1.23809" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </template>
                    </SpecialButton>
                    <SpecialButton
                        text="Редактировать"
                        :edit="true"
                    >
                        <template #leftIcon>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 13.3336H14" stroke="#757D8A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11 2.33374C11.2652 2.06852 11.6249 1.91953 12 1.91953C12.1857 1.91953 12.3696 1.9561 12.5412 2.02718C12.7128 2.09825 12.8687 2.20242 13 2.33374C13.1313 2.46506 13.2355 2.62096 13.3066 2.79254C13.3776 2.96412 13.4142 3.14802 13.4142 3.33374C13.4142 3.51946 13.3776 3.70335 13.3066 3.87493C13.2355 4.04652 13.1313 4.20242 13 4.33374L4.66667 12.6671L2 13.3337L2.66667 10.6671L11 2.33374Z" stroke="#757D8A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </template>
                    </SpecialButton>
                    <SpecialButton
                        text="Архив"
                        :archive="true"
                    >
                        <template #leftIcon>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5.33347V13.2001C14 13.642 13.6418 14.0001 13.2 14.0001H2.8C2.35817 14.0001 2 13.642 2 13.2001V5.33347" stroke="#757D8A" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.5332 2H1.4665C1.02468 2 0.666504 2.35817 0.666504 2.8V4.53333C0.666504 4.97516 1.02468 5.33333 1.4665 5.33333H14.5332C14.975 5.33333 15.3332 4.97516 15.3332 4.53333V2.8C15.3332 2.35817 14.975 2 14.5332 2Z" stroke="#757D8A" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.6665 8H9.33317" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </template>
                    </SpecialButton>
                </div>
            </div>
           
        </div>
  </section>
</template>
<style scoped lang="scss">
.content {
    &__container {
        max-width: 1920px;
        margin: 0 auto;       
        display: grid;
        grid-template-columns: 245px 1fr;
        gap: 5px;
    }
    &__body {
        background-color: #f8f9fd;
        padding: 18px 20px;
    }
    &__breadcrumbs {
        max-width: 175px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    &__descriptions {
        margin-top: 10px;
        &-text {            
            font-weight: 400;
            font-size: 18px;
            color: #000;
        }
    }
    &__filters {
        margin-top: 15px;
        display: flex;
        gap: 10px;
    }
    &__data {
        display: flex;
        margin-top: 10px;
        gap: 10px;
    }
    &__sp-panel {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
}
::-webkit-scrollbar {
    width: 4px;
    height: 50px;
    max-height: 50px;
}
::-webkit-scrollbar-track {
    background-color: #f8f9fd;    
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    height: 54px;
    max-height: 50px;
    background-color: #ecf3ff;
}


.sidebar::-webkit-scrollbar {
  display: none;    
  
} 
.sidebar.hovered::-webkit-scrollbar {
  display: block;
}


.sidebar {
    height: 100vh;
    overflow-y: scroll;
    
    &__list {
        max-width: 235px;
        padding-right: 7px;              
    }  
    &__list-item {
        display: flex;
        align-items: center;
        width: 205px;
        height: 19px;       
        padding: 11px 4px 11px 25px;
        margin-bottom: 4px;
        cursor: pointer;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 205px;
            height: 2px;
            background-color: #f8f9fd;
            bottom: 0;
        }
        &::before {
            content: '';
            position: absolute;
            left: 0;
            height: 100%;
            width: 3px;
            border-radius: 0 5px 5px 0;
            background-color: #77a6ff;
            opacity: 0;
            visibility: hidden;
            transition: opacity .3s linear;
        }
        &:hover {
            border-radius: 5px;
            background-color: #f2f7ff;      
           
            &::before {
                    opacity: 1;
                    visibility: visible;                    
                }
            .sidebar__list-text {
                color: #77a6ff;
            }
            .icon {
                fill: red;
               
            }
        }
    }
    &__list-text {        
        font-weight: 300;
        font-size: 14px;
        color: #282828;
        margin-left: 8px;      
    }
}

.breadcrumbs {
    &__left {       
        font-weight: 400;
        font-size: 12px;
        color: #b8b8b8;
    }
    &__right {
        border-radius: 6px;
        padding: 3px 8px;
        background-color: #d6e4ff;
        color: #77a6ff;        
        font-size: 12px;
    }
}
</style>