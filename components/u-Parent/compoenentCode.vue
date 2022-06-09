<template>
  <div>
    parent
    <hr />
    <u-child prop1="prop 1 value" />
  </div>
</template>

<script>
module.exports = {
  components: {
    'u-child': $getCustomComponent('u-Child')
  }
}
</script>
