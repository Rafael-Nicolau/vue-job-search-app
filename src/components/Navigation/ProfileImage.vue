<template>
  <img
    :src="imageLink"
    alt="Link Image"
    class="w-10 h-10 object-contain rounded-3xl hover:cursor-pointer"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "/img/link.png",
    };
  },
};
</script>
