<template>
  <b-form @submit.prevent="submit">
    <b-form-group label="Phone">
      <b-form-input v-model="phone" :disabled="inProcess" />
    </b-form-group>

    <b-form-group label="Confirmation Code" v-if="insertCode">
      <b-form-input v-model="code" />
    </b-form-group>

    <b-button variant="primary" type="submit">
      Submit
    </b-button>
  </b-form>
</template>

<script>
module.exports = {
  data() {
    return {
      phone: null,
      code: null,
      insertCode: false,
      inProcess: false,
    }
  },
  methods: {
    submit() {
      this.insertCode
        ? this.enterVerificationCode()
        : this.startPhoneLogin()
    },
    startPhoneLogin() {
      this.inProcess = true

      $anonUserToPermanent('phone', {
        phoneNumber: this.phone,
        enterVerificationCodeCallback: this.enterVerificationCodeCallback,
        role: ['-NLRRGKGwQI-ram0rbN9'],
        // stopLoadingManually: true
      }).then(() => {
        $setCurrentTab('-N7u8LvmRAy1ZLz-V5Ko')
        // setTimeout(() => {
        //   $setCurrentTab('-N7u8LvmRAy1ZLz-V5Ko')
        //   this.$helpers.$isLoading = false
        // }, 3000)
      }).catch((err) => {
        console.error(err)
      }).finally(() => {
        this.phone = null
        this.code = null
        this.insertCode = false
        this.inProcess = false
      })
    },
    enterVerificationCodeCallback() {
      this.insertCode = true
    },
    enterVerificationCode() {
      this.$bus.$emit('phoneNumberLoginVerify', this.code)
    }
  },
}
</script>
