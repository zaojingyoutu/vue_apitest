<template>
  <div style="width: 25%; float: left">
    <a-directory-tree
      v-model:expandedKeys="expandedKeys"
      v-model:selectedKeys="selectedKeys"
      multiple
      @select="selectedKey"
      :tree-data="treeData"
    ></a-directory-tree>
  </div>
  <div style="width: 75%; height: 600px; float: right">
    <div class="button" style="margin-bottom: 5px">
      <a-button type="primary" @click="showModal" style="margin-left: 10px"
        >新增</a-button
      >
      <a-modal v-model:visible="visible" title="新增脚本" @ok="handleOk">
        <a-form>
          <a-form-item label="名称" required>
            <a-input v-model:value="modelRef.name" />
          </a-form-item>
          <a-form-item label="类型" required>
            <a-select v-model:value="modelRef.mold" :options="options" />
          </a-form-item>

          <a-form-item label="CURL" required v-if="modelRef.mold =='curl'">
            <a-input v-model:value="modelRef.content" />
          </a-form-item>
        </a-form>
      </a-modal>

      <a-button type="primary" style="margin-left: 10px" @click="create"
        >保存</a-button
      >
      <a-button type="primary" style="margin-left: 10px" @click="del"
        >删除</a-button
      >
      <a-popconfirm
        title="只能运行locust并关闭已运行的，确认运行吗？"
        ok-text="Yes"
        cancel-text="No"
        @confirm="run"
        @cancel="cancel"
      >
        <a-button type="primary" style="margin-left: 10px">运行</a-button>
      </a-popconfirm>
    </div>

    <MyCodemirror v-model:value="content"></MyCodemirror>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import {
  locust_get,
  locust_detail,
  locust_put,
  locust_del,
  locustRun,
} from "@/api/locust";
import MyCodemirror from "@/components/VueCodemirror.vue";
import { locust_create } from "../../api/locust";
import { message } from "ant-design-vue";

export default defineComponent({
  components: {
    MyCodemirror,
  },
  setup() {
    const expandedKeys = ref(["0-0", "0-1"]);
    const selectedKeys = ref();
    const content = ref("");
    const treeData = ref([
      {
        title: "locustFiles",
        key: "0-0",
        children: [],
      },
    ]);
    locust_get().then((res) => {
      content.value = res[0].content;
      selectedKeys.value = [res[0].id];
      modelRef.id = res[0].id;
      modelRef.name = res[0].name;
      for (let i = 0; i < res.length; i++) {
        treeData.value[0].children.push({
          title: res[i].name,
          key: res[i].id,
          isLeaf: true,
        });
      }
    });
    const selectedKey = (id) => {
      selectedKeys.value = [id[id.length - 1]];
      locust_detail(selectedKeys.value[0]).then((res) => {
        content.value = res.content;
        modelRef.name = res.name;
        modelRef["id"] = res.id;
        console.log(res, modelRef);
      });
    };

    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };
    const handleOk = () => {
      delete modelRef.id;
      if(modelRef.mold=='curl'){
        create()
        treeData.value[0].children.unshift({
        title: modelRef.name,
        key: treeData.value[0].children.length + 1,
        isLeaf: true
      })
      selectedKeys.value = [treeData.value[0].children.length];
      visible.value = false; 
      }
      else{
        treeData.value[0].children.unshift({
        title: modelRef.name,
        key: treeData.value[0].children.length + 1,
        isLeaf: true
      })
      selectedKeys.value = [treeData.value[0].children.length];
      visible.value = false;   
      content.value = ""
      }
    };
    const modelRef = reactive({
      mold: "file",
      content: "",
      name: "",
    });
    const create = () => {
      modelRef["create_user"] = JSON.parse(localStorage.getItem("user")).name;
      if(modelRef.mold !='curl'){
        modelRef.content = content;
      }
      console.log(modelRef);
      if (modelRef.id) {
        locust_put(modelRef).then((res) => {
          content.value = res.content;
          if (res.status == 200) {
            message.success({
              content: "操作成功！",
              duration: 5,
            });
          } else {
            message.success({
              content: "操作失败！",
              duration: 5,
            });
          }
        });
      } else {
        locust_create(modelRef).then((res) => {
          content.value = res.data.content;
          modelRef.id = res.data.id;
          if (res.code == 200) {
            message.success({
              content: "添加成功！",
              duration: 5,
            });
          } else {
            message.error({
              content: "添加失败！" +res.msg ,
              duration: 5,
            });
          }
        });
      }

      console.log(modelRef);
    };
    const del = () => {
      locust_del(modelRef.id).then((res) => {
        if (res.status == 200) {
          message.success(
            {
              content: "删除成功！",
              duration: 5,
            },
            location.reload()
          );
        } else {
          message.success({
            content: "操作失败！",
            duration: 5,
          });
        }
      });
    };
    const run = () => {
      locustRun(modelRef).then((res) => {
        if (res.status == 200) {
          message.success(
            {
              content: "运行成功！",
              duration: 5,
            },

            window.open(res.url, "_blank")
          );
        } else {
          message.success({
            content: "运行失败！",
            duration: 5,
          });
        }
      });
    };

    const options = [
      { label: "file", value: "file" },
      { label: "curl", value: "curl" },
    ];

    return {
      expandedKeys,
      selectedKeys,
      treeData,
      selectedKey,
      content,
      visible,
      showModal,
      modelRef,
      handleOk,
      create,
      del,
      run,
      options,
    };
  },
  
});
</script>