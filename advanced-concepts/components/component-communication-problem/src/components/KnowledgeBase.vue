<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid @select-topic="$emit('select-topic', $event)"></knowledge-grid>
  </section>
</template>

// We only define props and emits here to pass it further
// to the next component, so this component is dummy.

<script>
export default {
  emits: ['select-topic'],
};
</script>