<script setup lang="ts">
import { defineProps } from "vue";
import { useSlots } from 'vue';

interface IButtonProps {
    text: string,
    standart?: boolean,
    reset?: boolean,
	create?: boolean
}
const slots = useSlots();
const props = defineProps<IButtonProps>();
</script>


<template>
    <button :class="['btn', {'btn--standart': props.standart}, {'btn--reset': props.reset,}, {'btn-create': props.create}]" >
    	<div v-if="slots.leftIcon" class="btn__left-icon">
        	<slot name="leftIcon"></slot>
    	</div>
      {{ props.text }}
    </button>
  </template>
  
 
  <style scoped lang="scss">
  .btn {
    padding: 11px 13px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;    
    border-radius: 10px;    
    border: none;
    cursor: pointer;
  }
  .btn--standart {
	color: #77a6ff;
	background-color: #fff;
  }
  .btn--reset {
	color: #757d8a;
	background-color: #e6e6e6;
  }
  .btn--create {
	color: #fff;
  }
  </style>