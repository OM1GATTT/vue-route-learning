<template>
    <div class="container">

        <div style="flex: 2;">
            <img class="logo" src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="logo">
        </div>

        <div class="sign-container">
            <div style="display: flex;">

                <div style="flex: 3; text-align: right;">
                    <img class="left-pic" src="../assets/简书登录页.png">
                </div>

                <div class="right-div" style="flex: 1; text-align:left">

                    <h4 class="title">
                        <RouterLink class="signin" to="/login">登录</RouterLink>
                        <RouterLink class="active" to="/reg">注册</RouterLink>

                    </h4>
                    <form action="">

                        <div style="position: relative;">
                            <input class="inputValue" type="text" placeholder="你的昵称">
                            <i class="ic"><span class="iconfont">&#xe603;</span></i>
                        </div>

                        <div style="position: relative;">
                            <input class="inputValue" type="password" placeholder="手机号">
                            <i class="ic"><span class="iconfont">&#xe634;</span></i>
                        </div>

                        <div style="position: relative;">
                            <input class="inputValue" type="password" placeholder="设置密码">
                            <i class="ic"><span class="iconfont">&#xe61d;</span></i>
                        </div>




                        <RouterLink class="herfReg" to="/login">
                            <button class="loginBt">注册</button>
                        </RouterLink>

                    </form>

                    <div>
                        <img src="../assets/底部截图2.png" alt="">
                    </div>
                </div>
                <div style="flex: 2;"></div>
            </div>
        </div>

        <div style="flex: 2;">

        </div>
    </div>
</template>

<script setup>

</script>


<style scoped>
.container {
    background-color: #f1f1f1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.logo {
    width: 100px;
    height: 46px;
    margin: 40px;
}

.sign-container {
    flex: 2;
    text-align: center;
    font-size: 18px;
}

.left-pic {
    width: 370px;
    height: 480px;
}

.right-div {
    width: 400px;
    background: #fff;
    padding: 40px 40px 30px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    border-radius: 4px;
}

.title {
    width: 200px;
    height: 20px;
    color: #969696;
    margin: 0 auto 50px;
    text-align: center;

}

.signin {
    text-decoration: none;
    padding: 10px;
    font-weight: 700;
    color: #969696;
}

.active {
    text-decoration: none;
    padding: 10px;
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
}

.inputValue {
    height: 35px;
    width: 90%;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0, 0%, 71%, .1);
    vertical-align: middle;
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #969696;
}

.ic {
    position: absolute;
    top: 8px;
    left: 10px;
    font-size: 18px;
}

.checkBox {
    float: left;
    margin: 15px 0;
    font-size: 14px;
}

.question {
    float: right;
    position: relative;
    margin: 15px 0;
    font-size: 14px;
}

.loginBt {
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
}

.loginBt:hover {
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #00bb29;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
}

.herfReg {
    text-decoration: none;
    color: #fff;
}
</style>