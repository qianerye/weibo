<template>
<div id="root">
  <div id="header">header</div>
  <div id="left">left</div>
  <div id="middle">middle</div>
  <div id="right">right</div>
  <div id="footer">footer</div>
</div>
</template>

<script>
export default {};
</script>

<style lang="css">
body {
  display: grid;
}
#header {
  background: red;
  grid-row: 1;
  grid-column: 1/5;
}
#left {
  grid-row: 2;
  grid-column: 1/2;
  background: orange;
}
#right {
  grid-row: 2;
  grid-column: 4/5;
  background: cadetblue;
}
#middle {
  grid-row: 2;
  grid-column: 2/4;
  background: rebeccapurple;
}
#footer {
  background: gold;
  grid-row: 3;
  grid-column: 1/5;
}
</style>
