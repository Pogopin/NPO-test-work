<script setup lang="ts">
import { defineProps } from "vue";
import { useSlots } from 'vue';

interface ISpButtonProps {
    text: string,
    create?: boolean,
    createByCopy?: boolean,
    edit?: boolean,
    archive?: boolean
}
const slots = useSlots();
const props = defineProps<ISpButtonProps>();
</script>


<template>
    <button :class="['spbtn', {'spbtn--create': props.create, 'spbtn--createbycopy': props.createByCopy, 'spbtn--edit': props.edit, 'spbtn--archive': props.archive }]" >
        <slot name="leftIcon"></slot>    	
      {{ props.text }}
    </button>
</template>
<style scoped lang="scss">
.spbtn {
    border-radius: 5px;
    padding: 11px 13px;
    border: none;
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
}
.spbtn--create {
    background-color: #77a6ff;
    color: #fff;
}
.spbtn--createbycopy,.spbtn--edit,.spbtn--archive {
    background-color: #f5f5f5;
    color: #757d8a;
}

</style>