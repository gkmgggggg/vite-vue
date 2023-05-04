<template>
  <div>Home</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { basicApi } from '../api/index'

export default defineComponent({
  setup() {
    const store = useStore()
    store.dispatch('countPlus')
    console.log(store.getters.count)
    console.log(basicApi)
    onMounted(async () => {
      const params = {
        account: 'admin',
        password: '123456',
        captchaCode: '13',
        captchaCodeToken: '45'
      }

      const res = await basicApi.authLogin(params)
      console.log(res)
    })
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
