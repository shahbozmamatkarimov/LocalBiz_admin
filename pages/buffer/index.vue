<template>
  <div>
    <input type="file" @change="handleSubmit" />
  </div>
</template>

<script setup>
import axios from "axios";

// const buffer = {
//   type: "Buffer",
//   data: [66, 108, 111, 98],
// };
// console.log(buffer);
// const blob = new Blob([buffer], { type: "Buffer", data: [66, 108, 111, 98]});
// console.log(blob);
// const url = URL.createObjectURL(blob);
// console.log("Generated URL:", url);

const buffer = new Uint8Array([
  91, 111, 98, 106, 101, 99, 116, 32, 79, 98, 106, 101, 99, 116, 93,
]);
console.log(buffer);

const blob = new Blob([buffer], { type: "image/png" });
console.log(blob);

const url = URL.createObjectURL(blob);
console.log("Generated URL:", url);

const handleSubmit = (e) => {
  const file = e.target.files[0];

  const reader = new FileReader();

  reader.onload = function (e) {
    const arrayBuffer = e.target.result;
    const uint8Array = new Uint8Array(arrayBuffer);

    // Convert Uint8Array to a standard array
    const buffer = Array.from(uint8Array);
    console.log(buffer);
    // buffer.length = 20000

    // Display the result

    axios
    .post("http://localhost:4000/api/student/send_answer", {
      full_name: "Student",
      audio: buffer,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  reader.readAsArrayBuffer(file);

  // axios
  //   .post("http://localhost:4000/api/student/send_answer", {
  //     full_name: "Student",
  //     audio: file,
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  if (file) {
    console.log(file);
    const mimeType = file.type;
    // readFileAsBuffer(file, mimeType);

    // const reader = new FileReader();

    // reader.onload = () => {
    // let base64String = reader.result.split(",")[1]; // Extract the base64 string
    // console.log(base64String.length);
    // base64String.split("").splice(0, 10000);
    // console.log(base64String.length);

    // while(base64String.length) {
    // }
    // Create a Data URI directly from the base64 string
    // const dataUri = `data:${file.type};base64,${base64String}`;

    // Set the Data URI to the imageUrl data property
    // console.log(dataUri);
    // let l;
    // const arr = [];
    // for (let i of 1000) {
    //   l = dataUri.length;
    //   arr.push(dataUri.slice(0, 1000));
    // }
    // };

    // reader.readAsDataURL(file);
  }
};

const readFileAsBuffer = (file, mimeType) => {
  const reader = new FileReader();

  reader.onload = () => {
    // The result property contains the file buffer
    const fileBuffer = reader.result;
    console.log(fileBuffer);

    const blob = new Blob([fileBuffer], { type: mimeType });

    // Create a Data URL from the Blob
    const dataUrl = URL.createObjectURL(blob);

    // while (dataUrl.length) {
    //   dataUrl.slice(0, 1000)
    //   console.log(dataUrl);
    // }

    console.log(dataUrl);
  };

  reader.readAsArrayBuffer(file);
};
</script>

<style lang="scss" scoped></style>
