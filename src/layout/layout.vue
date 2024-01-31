<template>
    <a-layout>
        <a-layout-sider
                breakpoint="lg"
                collapsed-width="0"
                @collapse="onCollapse"
                @breakpoint="onBreakpoint"
        >
            <div class="logo"/>

            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <img style="height: 60px;width: 200px"
                     src="./../../public/R.jpeg">
                <a-menu-item key="1">
                    <table-outlined/>
                    <span class="nav-text">
             <router-link to="/project" style="color: white"> 项目管理</router-link>
          </span>
                </a-menu-item>
                <a-menu-item key="2">
                    <api-outlined />
                    <span class="nav-text"><router-link to="/api" style="color: white"> 接口管理</router-link></span>
                </a-menu-item>
                <!-- <a-menu-item key="3">
                    <table-outlined/>
                    <span class="nav-text"><router-link to="/case" style="color: white"> 测试用例</router-link></span>
                </a-menu-item> -->
                <a-menu-item key="4">
                    <eye-outlined/>
                    <span class="nav-text"><router-link to="/variate_list"
                                                        style="color: white"> 变量管理</router-link></span>
                </a-menu-item>
                <a-menu-item key="5">
                    <calendar-outlined/>
                    <span class="nav-text"><router-link to="/testplan" style="color: white"> 测试计划</router-link></span>
                </a-menu-item>
                <a-menu-item key="6">
                    <user-outlined/>
                    <span class="nav-text"><router-link to="/userList" style="color: white"> 用户管理</router-link></span>
                </a-menu-item>
                <a-menu-item key="7">
                    <tool-outlined />
                    <span class="nav-text"><router-link to="/tools" style="color: white"> 常用工具</router-link></span>
                </a-menu-item>
                
                <a-sub-menu key="sub1">
                    <template #icon>
                            <code-sandbox-outlined/>
                        </template>
                    <template #title>locust</template>
                    <a-menu-item key="8">
                        <code-sandbox-outlined/>
                        <span class="nav-text"><router-link to="/locust" style="color: white"> locust脚本</router-link></span>
                    </a-menu-item>
                    <a-menu-item key="11">
                        <fund-outlined />
                        <span class="nav-text"><router-link to="/locust/web" style="color: white"> locust web</router-link></span>
                    </a-menu-item>
                    <a-menu-item key="12">
                        <fund-outlined />
                        <span class="nav-text"><router-link to="/locustReport" style="color: white"> locust报告</router-link></span>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <code-outlined />
                    <span class="nav-text"><router-link to="/customFun" style="color: white"> 内置方法</router-link></span>
                </a-menu-item>                
                <a-menu-item key="10">
                    <message-outlined />
                    <span class="nav-text"><router-link to="/chat" style="color: white"> AiChat</router-link></span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="{ background: '#fff', padding: 0 }">
                <!--        <router-link to="/login" @click="clear">退出</router-link>-->
                <div style="right: 3%;position: absolute">
                    <a-dropdown>
                        <template #overlay>
                            <a-menu @click="handleMenuClick">
                                <a-menu-item key="1">设置</a-menu-item>
                                <a-menu-item key="2">退出</a-menu-item>
                            </a-menu>
                        </template>
                        <a-button>
                            <user-outlined/>
                            ...
                            <DownOutlined/>
                        </a-button>
                    </a-dropdown>
                </div>


            </a-layout-header>

            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div :style="{ padding: '10px', background: '#fff', minHeight: '91vh'}">

                    <router-view></router-view>
                </div>
            </a-layout-content>
            <div class="ai" style="z-index: 999;position: fixed;right: 20px;bottom: 6%;"> 
                <AiChat />
            </div>
            <!-- <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer> -->
        </a-layout>
    </a-layout>
</template>
<script>
    import {
        UserOutlined,
        CalendarOutlined,
        TableOutlined,
        EyeOutlined,
        CodeSandboxOutlined,
        MessageOutlined,
        CodeOutlined,
        ToolOutlined,
        ApiOutlined,
        FundOutlined

    } 
    from '@ant-design/icons-vue';
    import {defineComponent, ref} from 'vue';
    import {useRoute} from 'vue-router';
import AiChat from "@/components/aiFloating.vue";

    export default defineComponent({
        components: {
            UserOutlined,
            CalendarOutlined,
            TableOutlined,
            EyeOutlined,
            CodeSandboxOutlined,
            MessageOutlined,
            CodeOutlined,
            ToolOutlined,
            ApiOutlined,
            FundOutlined,
            AiChat
        },

        setup() {
            const onCollapse = (collapsed, type) => {
                console.log(collapsed, type);
            };

            const onBreakpoint = broken => {
                console.log(broken);
            };

            const handleMenuClick = e => {
                if (e.key == 2) {
                    localStorage.clear();
                    window.location.href = "/login";
                }
            };
            const selectedKeys = ref(['1']);
            let route = useRoute();
            let path = {
                '/project': '1',
                "/case": "2",
                "/variate_list": "3",
                "/testplan": "4",
                "/userList": "5",
                "/tools": "6",
                "/filesList": "7"
            }
            selectedKeys.value = [path[route.path]]




            return {
                selectedKeys,
                onCollapse,
                onBreakpoint,
                // clear,
                handleMenuClick,

            };
        },

    });
</script>
<style>
    #components-layout-demo-responsive .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }

    .site-layout-sub-header-background {
        background: #fff;
    }

    .site-layout-background {
        background: #fff;
    }

    #nav-text {
        color: white
    }

    [data-theme='dark'] .site-layout-sub-header-background {
        background: #141414;
    }
</style>