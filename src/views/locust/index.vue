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

          <a-form-item label="CURL" required v-if="modelRef.mold == 'curl'">
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

      <router-link
        :to="{ path: '/locustReport', query: { locustId: modelRef.id } }"
      >
        <a-button type="primary" style="margin-left: 10px"
          >locust报告
        </a-button>
      </router-link>
      <a-modal
        v-model:visible="runVisible"
        title="运行locust"
        @ok="runHandleOk"
      >
        <div>
          <p>默认不启动</p>
          <a-input-number id="inputNumber" v-model:value="worker" :min="1" />
          worker：填写将启动分布式，不能超过服务器最大核心数
        </div>
        <p>
          跨服务器分布式命令：locust -f xxx.py --worker --master-host=主控机器ip
        </p>
      </a-modal>
      <a-button type="primary" style="margin-left: 10px" @click="runShowModal"
        >运行</a-button
      >
      <a-modal
        v-model:visible="taskVisible"
        title="定时任务运行配置"
        @ok="taskHandleOk"
      >
        <div>
          <a-form-item label="cron表达式" :rules="[{ required: true }]">
            <a-input v-model:value="taskRef.cron" />
            <a-radio v-model:checked="checked">删除</a-radio>
          </a-form-item>
          <a-form-item label="执行时长" :rules="[{ required: true }]">
            <a-input v-model:value="taskRef.run_time" style="width: 45%" />
            例如： (300s, 20m, 3h, 1h30m)
          </a-form-item>
          <div>
            启动用户：
            <a-input-number
              id="inputNumber"
              v-model:value="taskRef.user"
              :min="1"
            />
          </div>
          <div>
            启动数/s：
            <a-input-number
              id="inputNumber"
              v-model:value="taskRef.rate"
              :min="1"
            />
          </div>
          workers：
          <a-input-number
            id="inputNumber"
            v-model:value="taskRef.workers"
            :min="1"
          />
          填写将启动分布式，不能超过服务器最大核心数
        </div>
      </a-modal>
      <a-button type="primary" style="margin-left: 10px" @click="taskShowModal"
        >定时任务</a-button
      >
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
import { useRouter } from "vue-router";
import { locustTaskGet, locustTaskDel, locustTaskPost } from "@/api/locustTask";

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
      if (modelRef.mold == "curl") {
        create();
        treeData.value[0].children.unshift({
          title: modelRef.name,
          key: treeData.value[0].children.length + 1,
          isLeaf: true,
        });
        selectedKeys.value = [treeData.value[0].children.length];
        visible.value = false;
      } else {
        treeData.value[0].children.unshift({
          title: modelRef.name,
          key: treeData.value[0].children.length + 1,
          isLeaf: true,
        });
        selectedKeys.value = [treeData.value[0].children.length];
        visible.value = false;
        content.value = "";
      }
    };
    const modelRef = reactive({
      mold: "file",
      content: "",
      name: "",
    });
    const create = () => {
      modelRef["create_user"] = JSON.parse(localStorage.getItem("user")).name;
      if (modelRef.mold != "curl") {
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
              content: "添加失败！" + res.msg,
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
    const router = useRouter();
    const run = (run_par) => {
      locustRun(run_par).then((res) => {
        if (res.status == 200) {
          message.success(
            {
              content: "运行成功！",
              duration: 5,
            },

            router.push("/locust/web")
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

    const runVisible = ref(false);
    const runShowModal = () => {
      runVisible.value = true;
    };
    const runHandleOk = () => {
      const run_par = { name: modelRef.name, workers: worker.value };
      run(run_par);
      runVisible.value = false;
    };
    const worker = ref();
    const taskVisible = ref(false);
    const taskShowModal = () => {
      locustTaskGet({ locust_id: modelRef.id }).then((res) => {
        if (res.status == 200) {
          taskRef.id = res[0].id;
          taskRef.cron = res[0].cron;
          taskRef.user = res[0].run_param.user;
          taskRef.rate = res[0].run_param.rate;
          taskRef.run_time = res[0].run_param.run_time;
          taskRef.workers = res[0].run_param.workers;
          console.log(res);
        }
      });
      console.log(taskRef);
      taskVisible.value = true;
    };
    const taskHandleOk = () => {
      if (checked.value == true) {
        locustTaskDel(taskRef.id).then((res) => {
          if (res.code == 200) {
            message.success({
              content: "删除成功！",
              duration: 5,
            });
          } else {
            message.success({
              content: "删除失败！",
              duration: 5,
            });
          }
        });
      } else {
        if (taskRef.id) {
          locustTaskDel(taskRef.id);
        }
        taskRef.name = modelRef.name;
        taskRef.locust_id = modelRef.id;
        locustTaskPost({ locust: modelRef.id, run_param: taskRef }).then(
          (res) => {
            if (res.code == 200) {
              message.success({
                content: "成功！",
                duration: 5,
              });
            } else {
              message.success({
                content: "失败！",
                duration: 5,
              });
            }
          }
        );
      }
      checked.value = false;
      taskVisible.value = false;
    };
    const taskRef = reactive({
      name: modelRef.name,
      user: "",
      rate: "",
      run_time: "",
      workers: null,
      cron: "",
    });
    const checked = ref(false);
    return {
      checked,
      taskRef,
      taskVisible,
      taskShowModal,
      taskHandleOk,
      worker,
      runVisible,
      runShowModal,
      runHandleOk,
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