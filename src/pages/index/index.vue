<template>
    <div>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-cell-group>
            <van-field label="用户名" placeholder="请输入用户名" error @change="onChange" id="username" />
            <van-field label="手机号" placeholder="请输入手机号" error @change="onChange" id="phone" />
            <van-field label="密码" placeholder="请输入密码" type="password" required @change="onChange" id="password" />
            <view class="extra-box">
                <van-field center clearable label="短信验证码" placeholder="请输入短信验证码" use-button-slot @change="onChange" id="code">
                    <van-button slot="button" size="small" type="primary" @click="onClickSend">发送验证码</van-button>
                </van-field>
            </view>
            <van-button type="primary" size="large" @click="onSubmitForm">登录</van-button>
        </van-cell-group>
        <a href="/pages/home/main" class="counter">跳转Vuex示例页面</a>
    </div>
</template>
<script>
import card from "@/components/card"
import WeValidator from "we-validator"
import utils from "@/utils"

export default {
    components: {
        card
    },
    data() {
        return {
            formData: {
                "username": null,
                "phone": null,
                "password": null,
                "code": null,
            }
        }
    },
    created() {
        this.initValidator()
    },

    methods: {
        onClickSend() {
            // 单独验证字段
            if (!this.validatorInstance.checkFields(this.formData, ["phone"])) return;

            console.log("开始发送验证码");
        },

        onSubmitForm(e) {
            console.log(this.formData)
            // 验证全部字段
            if (!this.validatorInstance.checkData(this.formData)) return;
            // ajax操作

            if (!utils.get("X-Token")) {
                this.login()
            }

            const url = "../logs/main"
            if (mpvuePlatform === "wx") {
                mpvue.switchTab({ url })
            } else {
                mpvue.navigateTo({ url })
            }
        },
        initValidator() { // 验证规则 固定结构
            this.validatorInstance = new WeValidator({
                rules: {
                    phone: {
                        required: true,
                        mobile: true
                    },
                    code: {
                        required: true
                    },
                    username: {
                        rangeChinese: [2, 8]
                    }
                },
                messages: {
                    phone: {
                        required: "请输入手机号",
                        mobile: "手机号格式不正确"
                    },
                    code: {
                        required: "请输入验证码"
                    },
                    username: {
                        rangeChinese: "姓名只能输入 {0} - {1} 位汉字"
                    }
                }
            });
        },
        onChange(e) { // 监听字段 固定写法 
            this.formData[e.target.id] = e.mp.detail
        },
        async login() {
            let res = await apiUser.login(this.formData);
            utils.set("X-Token", res.data.token)
            console.log(res);
        }
    },
}
</script>
<style>
.search {
    display: none;
}

form button {
    padding: 4px 20px;
    font-size: 12px;
}
</style>