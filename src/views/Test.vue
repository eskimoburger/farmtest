<template>
  <div>
    <div>Hello Test</div>
    <div class="">
      Upload an image file:
      <input type="file" @change="previewImage" accept="image/*" />
    </div>
    <div class="image-preview" v-if="imageData.length > 0">
      <img class="preview" :src="imageData" />
    </div>

    <div class="image-preview" v-else>
      <img class="preview" src="../assets/person.png" />
    </div>
  </div>

  <div class="mb-2">
    <span>Attachments</span>
    <div
      class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer"
    >
      <div class="absolute">
        <div class="flex flex-col items-center ">
          <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>
          <span class="block text-gray-400 font-normal"
            >Attach you files here</span
          >
          <span class="block text-gray-400 font-normal">or</span>
          <span class="block text-blue-400 font-normal">Browse files</span>
        </div>
      </div>
      <input type="file" class="h-full w-full opacity-0" name="" />
    </div>
    <div class="flex justify-between items-center text-gray-400">
      <span>Accepted file type:.doc only</span>
      <span class="flex items-center "
        ><i class="fa fa-lock mr-1"></i> secure</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageData: "",
    };
    // we will store base64 format of image in this string
  },
  methods: {
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style></style>
