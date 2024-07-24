<script lang="ts" setup>
import { useSlots } from 'vue';

interface Props { 
  placeholder?: string;
}

const slots = useSlots();
const props = defineProps<Props>();
const emits = defineEmits(['onInput']);

const onInput = (event: EventTarget | null) => {
    const value = (event as HTMLInputElement).value;
    emits('onInput', value);
}

</script>

<template>
    <div class="field">
        <div v-if="slots.leftIcon" class="field__left-icon">
            <slot name="leftIcon"></slot>
        </div>      
        <input
            :class="['field__input']"
            type="text"
            @input="onInput($event.target)"     
            :placeholder="props.placeholder"       
        />
    </div>
</template>
<style scoped lang="scss">
.field {
    position: relative;
}
.field__input {
    width: 100%;  
    transition: .3s ease-in-out;
    border: none;
    font-weight: 400;
    font-size: 14px;
    color: #9a9b9d;    
    outline: none;  
    position: relative;
    background-color: inherit;
}
.field__left-icon {
    position: absolute;
    left: -30px;
    top: -1px;
    z-index: 2;
    cursor: pointer;
}

</style>