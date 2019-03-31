<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <a class="navbar-brand" href="#">
      LOGO
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Préstamos en vivo <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Invierte</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pide tu préstamo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span class="text-blue">Ingresar</span></a>
          </li>
        </ul>
    </div>
  </nav>
</template>

<script>
import Test from '@/api/test.js';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  mounted: function () {
    this.handleGetCurrentprice();
  },
  methods: {
    handleGetCurrentprice: function () {
      console.log(Test.getCurrentprice, '.............');
      Test.getCurrentprice().then(res => {
        const {status, data} = res;
        console.log(status, data, '++++++++++++');
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
