import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import avatarImg from '@/assets/images/avatar.jpg';

interface IPerson {
  name: string,
  status: string,
  avatar: string
}

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref<boolean>(true);
  const person = reactive<IPerson>({
    name: 'David Perov',
    status: 'Администратор',
    avatar: avatarImg
  });

  const setIsAuth = (value: boolean) => isAuth.value = value;

  return { isAuth, person, setIsAuth };
})