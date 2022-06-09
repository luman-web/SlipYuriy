<template>
  <div>
    child1
    <child2/>
  </div>
</template>

<script>
module.exports = {
  props: ['prop1'],
  components: {
    'child2': $getCustomComponent('u-Child2')
  }
}
</script>
