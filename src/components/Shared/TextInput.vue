<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
  <!--           @input="location = $event.target.value"
 you can use @input @click etc with the syntax above, MUST use $ (dolar sign) 
 to access the DOM proprieties, then event.target.value to update the data below -->
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  //You can also use Data to store the variable from a field or input, but the
  // component will be responsible for handling data, that's not good
  // data() {
  //   return {
  //     value: "",
  //   };
  // },
  emits: ["update:modelValue"],
  methods: {
    handleInput($event) {
      // this.value = $event.target.value; -> You need this line if using "data()"
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
// Instead of using method or inline @input biding you can use v-model="" with the data you want to update
//You can make a method to update the state of the fields "role and location" or above you can pass the method directly inside @input
// methods: {
//   updateRole($event) {
//     this.role = $event.target.value;
//   },
//   // UpdateLocation is being used an inline V-bind to update data and location variable
//   // updateLocation(e) {
//   //   this.location = e.target.value;
//   // },
// },
</script>
