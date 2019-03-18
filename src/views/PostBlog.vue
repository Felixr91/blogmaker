<template>


  <!-- <div>
      <p class="d-flex justify-content-left">
        <pre>{{textEntry}}</pre>
      </p>
    </div> -->
  <div class="row container-fluid d-flex justify-content-center ml-0 mr-0 pl-0 pr-0">

    <h1 style="margin-top:75px">Create a blog post!</h1>

    <div class="form-group txt-area-lg" @submit.prevent="addTextArea">

      <label class="d-flex justify-content-left" for="link">Title</label>
      <input class="form-control mb-3" type="text" placeholder="Default input" v-model="title">

      <label class="d-flex justify-content-left" for="link">Date</label>
      <input class="form-control mb-3" type="text" placeholder="Default input" v-model="date">

      <label class="d-flex justify-content-left" for="link">Image Link</label>
      <input class="form-control mb-3" type="text" placeholder="Default input" v-model="imgLink">

      <label class="d-flex justify-content-left" for="exampleFormControlTextarea1">Write Your Blog Post Here... </label>

      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="textEntry"></textarea>

      <button class="btn btn-primary mt-4" type="submit" @click="submitTxtArea()">Post</button>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'postBlog',
    data() {
      return {
        textEntry: "",
        imgLink: "",
        title: "",
        date: ""
      }
    },
    computed: {},
    methods: {

      submitTxtArea() {

      }

    }
  }

</script>

<style>
  .txt-area-lg {
    width: 90%;
  }
</style>