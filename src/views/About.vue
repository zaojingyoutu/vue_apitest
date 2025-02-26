<template>
  <div style="display: flex;">
    <div class="dir" style="width: 15%; text-align: left;overflow: auto;height: 98vh;">
      <a-directory-tree v-model:expandedKeys="expandedKeys" v-model:selectedKeys="selectedKeys" :tree-data="treeData" :load-data="onLoadData"
        style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; ">
        <template #title="{ key: treeKey, title, caseId, project_id }">
          <a-dropdown :trigger="['contextmenu']">
            <span @click="(caseId ? detail(caseId, project_id, title,treeKey) : null)"
              style="display: inline-block;width: 100%;">{{ title }}</span>
            <template #overlay>
              <a-menu @click="({ key: menuKey }) =>{ onContextMenuClick(treeKey, menuKey)}">
                <a-menu-item key="1">新增</a-menu-item>
                <a-menu-item key="2">删除</a-menu-item>
                <a-menu-item key="3">复制</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </a-directory-tree>
    </div>
    <div class="apiDetail" style="width: 80%">
      <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit" hide-add>
        <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
          <apiDetail :parameter="pane.content" v-if="show" />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>

</template>
<script>
import { defineComponent, watch, ref, reactive } from 'vue';
import { project_get } from "@/api/project";
import { cases_get, cases_module, cases_create, cases_del } from "@/api/cases";
import apiDetail from "@/components/apiDetail.vue";
import { message } from "ant-design-vue";


export default defineComponent({
  components: { apiDetail },
  setup() {
    const treeData = ref([]);
    const selectedKeys = ref([]);
    const apiDetailList = ref([]);
    const apiParameter = reactive({
    });
    const show = ref(false)
    project_get().then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        treeData.value.push({
          title: res.data[i].name,
          key: res.data[i].id,
          children: [],
          isLeaf: false
        })
      }
    })

    const getCases = (treeNode, parameter) => {
      cases_get(parameter).then((res) => {
        res.data.forEach(element => {
          if (element.module == null || treeNode.type == 'module') {
            treeNode.dataRef.children.push({
              title: element.name,
              key: `${element.project}-case-${element.id}`,
              project_id: element.project,
              isLeaf: true,
              caseId: element.id
            })
          }
        });
        treeData.value = [...treeData.value];
      })
    }

    const casesModule = (projectId, treeNode) => {
      cases_module({ "project_id": projectId }).then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          treeNode.dataRef.children.push({
            title: res.data[i].module,
            key: `${projectId}-module-${i}`,
            type: 'module',
            project_id: projectId,
            children: [],
            isLeaf: false
          })
        }
        treeData.value = [...treeData.value];
      })
    }

    const detail = (caseId, project_id, name,treeKey) => {
      selectedKeys.value = [treeKey]
      apiDetailList.value.push({
        project_id: project_id,
        id: caseId
      })
      apiParameter.project_id = project_id
      apiParameter.id = caseId
      show.value = true
      add(apiParameter, name)
    }

    const copy = (record) => {
      const recordCopy = JSON.parse(JSON.stringify(record));
      delete recordCopy["project__name"];
      recordCopy["name"] = recordCopy["name"] + "-copy";
      cases_create(recordCopy).then((res) => {
        if (res.code == 200) {
          message.success({
            content: "复制成功！",
            duration: 5,
          });
          // cases_get(par).then((res) => {
          //   data.value = res.data;
          //   total.value = res.total;
          // });
        } else {
          message.success({
            content: "复制失败！",
            duration: 5,
          });
        }
      });
    };

    const deletes = (caseId) => {
      cases_del(caseId).then((res) => {
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
    };

    //获取父级treeData的key
    const getParentKey = (key, treeData) => {
      let parentKey;
      for (let i = 0; i < treeData.length; i++) {
        const node = treeData[i];
        if (node.children) {
          if (node.children.some((item) => item.key === key)) {
            parentKey = node.key;
            return parentKey;
          } else { if(node.children.length>0){
            parentKey = getParentKey(key, node.children)
          }  
       }
        }
      }
      return parentKey;
    }

    //treeData添加数据
    const addTreeData = (parameter, treeData) => {
      
      if (treeData.length == 0) {
        treeData.push({
          title: parameter.name,
          key: parameter.id,
          children: [],
          isLeaf: false
        })
      } else {
        treeData.forEach(element => {
          if (element.key == parameter.parentKey) {
            element.children.push({
              title: parameter.name,
              key: parameter.key,
              isLeaf: true
            })
            return
          } else {
            //element存在children并且children不为空递归
            if(element?.children && element?.children.length > 0){
            addTreeData(parameter, element.children)}
          }
        })
      }

    }
    //treeData添加删,除递归删除最多3层
    const delTreeData = (parameterKey, treeData) => {
      for (let i = 0; i < treeData.length; i++) {
        if (treeData[i].key == parameterKey) {
          treeData.splice(i, 1)
          return
        } else {
          delTreeData(parameterKey, treeData[i].children)
        }
      }
    }
    const onLoadData = treeNode => {
      return new Promise(resolve => {

        let parameter = { "project_id": treeNode.key }
        if (treeNode.type) {
          parameter.module = treeNode.title
          parameter.project_id = treeNode.project_id
        }
        setTimeout(() => {
          if (!treeNode.type) {
            casesModule(parameter.project_id, treeNode)
          }
          getCases(treeNode, parameter)
          resolve();
        }, 1000);
      });
    };

    const onContextMenuClick = (treeKey, menuKey) => {
      const projectId = treeKey.split('-')[0]
      const model = treeKey.split('-')[1]
      const caseId = treeKey.split('-')[2]
      if (menuKey == 1) {
        const parentKey = getParentKey(treeKey, treeData.value)
        //新增case,添加treeData
        apiParameter.project_id = projectId
        apiParameter.id = undefined
        show.value = true
        add(apiParameter, "New Case")
        console.log(3434343434, parentKey)
        const addTreeKey = treeKey + Math.floor(Math.random() * 1000)
        addTreeData({ key:addTreeKey , name: "New Case", parentKey: parentKey }, treeData.value)
        selectedKeys.value = [addTreeKey]
      } else if (menuKey == 2) {
        //删除case,跟新treeData
        if (model == 'case') {
          deletes(caseId)
          delTreeData(treeKey, treeData.value)
        }

      } else if (menuKey == 3) {
        copy(treeKey.split('-')[1])
      }
    };
    const expandedKeys = ref([]);
    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });

    const panes = ref([])
    const activeKey = ref();
    const add = (apiParameter, name) => {
      activeKey.value = `newTab${apiParameter.id}`;
      //如果panes.value中不存在相同的title就push
      if (panes.value.findIndex(pane => pane.title === name) === -1) {
        panes.value.push({
          title: name,
          content: apiParameter,
          key: activeKey.value,
          closable: true
        });
      }
      //如果存在就跳到对应的tab
      if (panes.value.findIndex(pane => pane.title === name) !== -1) {
        activeKey.value = panes.value.find(pane => pane.title === name).key;
      }

    };
    const remove = targetKey => {
      let lastIndex = 0;
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      panes.value = panes.value.filter(pane => pane.key !== targetKey);
      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey.value = panes.value[lastIndex].key;
        } else {
          activeKey.value = panes.value[0].key;
        }
      }
    };
    const onEdit = (targetKey, action) => {
      if (action === 'add') {
        add();
      } else {
        remove(targetKey);
      }
    };


    return {
      treeData,
      onContextMenuClick,
      expandedKeys,
      onLoadData,
      detail,
      apiParameter,
      panes,
      activeKey,
      onEdit,
      show,
      deletes,
      selectedKeys
    };
  },
});
</script>
<style></style>