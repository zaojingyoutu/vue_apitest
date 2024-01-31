<template>
  <div class="clearfix">
    <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      @preview="handlePreview"
      @change="changeFile"
      :customRequest="customUpload"
    >
      <div v-if="fileList.length < 20">
        <plus-outlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import {upfiles_post} from '@/api/upfiles'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
  });
}

export default defineComponent({
  components: {
    PlusOutlined,
  },

  setup() {
    const previewVisible = ref(false);
    const previewImage = ref('');
    const previewTitle = ref('');
    const fileList = ref([]);

    const handleCancel = () => {
      previewVisible.value = false;
      previewTitle.value = '';
    };

    const handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      previewImage.value = file.url || file.preview;
      previewVisible.value = true;
      previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
    };

    const  customUpload=(data)=> {
      var forms = new FormData()
      var configs = {
              headers:{'Content-Type':'multipart/form-data'}
              };
      forms.append("file",data.file)
      upfiles_post(forms, configs).then(res => {
        let len = fileList.value.length -1
        fileList.value[len]={"url":res.data.url,"name":res.data.name.substring(5),"fs_id":res.data.fs_id,"size":res.data.size}
      })
    }


    return {
      previewVisible,
      previewImage,
      fileList,
      handleCancel,
      handlePreview,
      previewTitle,
      customUpload
    };
  },

});
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>