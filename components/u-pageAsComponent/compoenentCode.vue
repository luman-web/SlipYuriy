<template>
  <div>
    Page As Component {{ comp1 }}
    <br />
    <v-select>
      <template #list-footer>
        <li style="text-align: center">Bottom of the list!</li>
      </template>
    </v-select>
    <verte />
  </div>
</template>

<script>
module.exports = {
  props: ['comp1']
}
</script>
