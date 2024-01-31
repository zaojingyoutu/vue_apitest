<template>
    <div >
        <div style="margin-right: 100%;margin-top: 5px;">
            <a-button type="primary" @click="showCreate">Create</a-button>
            <a-modal v-model:visible="uploadFiles" title="添加文件" @ok="uploadFilesOk">
                <uploads></uploads>
            </a-modal>
        </div>
        <div class='filesTabels' @scroll="handleScroll($event)">
            <a-table :columns="columns" :data-source="data" :pagination="false">
                <template #bodyCell="{ record,column,text  }">
                    <template v-if="column.dataIndex === 'server_filename' & record.category===3 ">
                        <a>{{ text }}</a>
                        <a-image
                                :width="20"
                                :height="20"
                                :src="record.thumbs.url3"
                        />
                    </template>
                    <template v-if="column.dataIndex === 'server_filename' & record.category===2 ">
                        <a @click="showModal(record.fs_id)">{{ text }}</a>
                        <a-modal v-model:visible="visible" title="播放" @ok="handleOk">
                            <audio :src="filesUrl" controls="" preload="auto" autoplay="autoplay" ref="audio"></audio>
                        </a-modal>
                    </template>
                </template>

            </a-table>
        </div>
    </div>
</template>
<script>
import {defineComponent, ref} from 'vue';
import {message} from "ant-design-vue";
import {files_get} from '@/api/upfiles';
import uploads from "@/components/uploads.vue"

const columns = [
    {
        title: 'Name',
        width: '20%',
        dataIndex: 'server_filename',
        key: 'server_filename',

    }, {
        title: 'real_category',
        width: '20%',
        dataIndex: 'real_category',
        key: 'real_category',

    }, {
        title: 'size',
        dataIndex: 'size',
        key: 'size',
        width: '20%',
    }, {
        title: 'fs_id',
        dataIndex: 'fs_id',
        key: 'fs_id',
        width: '20%',
    },
    {
        title: 'Action',
        key: 'operation',
        width: 120,
    }];


export default defineComponent({
    components: {
        uploads,
      },

    setup() {
        const data = ref();
        const visible = ref(false);
        const uploadFiles = ref(false);

        const showModal = (record) => {
            files_get({"fs_id": record}).then((res) => {
                if (res.code == 200) {
                    filesUrl.value = res.data[0]
                } else {
                    message.error({
                            content: "获取url失败！",
                            duration: 5
                        }
                    );
                }
            });
            visible.value = true;
        };

        const handleOk = () => {
            visible.value = false;
        };
        const uploadFilesOk = () => {
            uploadFiles.value = false;
        };
        const filesUrl = ref();
        var current = 1

        files_get({"current": current, "pageSize": 20}).then((res) => {
            data.value = res.data.list;
        });
        const handleScroll = (e) => {
            if (e.srcElement.scrollTop + e.srcElement.offsetHeight >= e.srcElement.scrollHeight) {
                current += 1
                files_get({"current": current, "pageSize": 10}).then((res) => {
                    if (res.data.list.length > 0) {
                        for (let i in res.data.list) {
                            data.value.push(res.data.list[i])
                        }
                    }
                });
            }

        }

        const showCreate = () => {
            uploadFiles.value = true;
        };


        return {
            filesUrl,
            visible,
            uploadFiles,
            uploadFilesOk,
            showModal,
            handleOk,
            data,
            handleScroll,
            columns,
            showCreate
        }
    }

});
</script>
<style>
    .filesTabels {
        overflow: scroll;
        height: 100vh;
    }
</style>

