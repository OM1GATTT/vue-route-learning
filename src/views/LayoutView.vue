<template>
    <header>
        <nav>

            <div class="nav-logo">
                <img class="logo" src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"
                    alt="logo">
            </div>

            <div class="nav-index">
                <RouterLink to="/home">首页</RouterLink>
                <RouterLink to="/vip">会员</RouterLink>
                <RouterLink to="/it">IT技术</RouterLink>
            </div>

            <div class="nav-serach">
                <input type="text" class="serach" placeholder="搜索">
                <span class="iconfont"
                    style="position: relative; left: -35px; top: 2px; color: #969696; font-size: 18px;">&#xe62d;</span>
            </div>

            <div class="nav-cj">
                <img src="../assets/抽奖.png" alt="">
            </div>

            <div class="nav-Aa">
                <img src="../assets/Aa.png" alt="">
            </div>

            <div class="nav-case">
                <RouterLink to="/login" class="login">登录</RouterLink>
                <RouterLink to="/reg"><button class="loginBt">注册</button></RouterLink>
            </div>

            <div class="nav-wz">
                <img src="../assets/写文章.png" alt="">
            </div>
        </nav>
    </header>
    <container>
        <RouterView></RouterView>
    </container>
</template>

<script setup>

</script>

<style scoped>
header {
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #c8c8c8;
}

nav {
    position: relative;
    width: 100%;
    font-size: 14px;
    text-align: center;
    display: flex;
    margin: 0 auto;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    font-size: 18px;
    text-decoration: none;
    color: #000;
}

nav a.router-link-exact-active {
    color: #ea6f5a;
}

.logo {
    width: 55px;
    height: 30px;
    margin-top: 16px;
}

.serach {
    padding: 0 40px 0 20px;
    width: 165px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
}

.nav-logo {
    position: relative;
    left: 120px;
}

.nav-index {
    position: relative;
    left: 280px;
}

.nav-serach {
    position: relative;
    left: 520px;
    top: -2px;
}

.nav-cj {
    position: relative;
    left: 530px;
    top: 3px;
}

.nav-cj img {
    width: 110px;
    height: auto;
}

.nav-Aa {
    position: relative;
    left: 580px;
    top: 11px;
}

.nav-Aa img {
    width: 40px;
    height: auto;
}

.nav-case {
    position: relative;
    left: 600px;
}

.login {
    font-size: 16px;
    color: #969696;
}


.loginBt {
    /* margin-top: 20px; */
    width: 80px;
    padding: 9px 18px;
    font-size: 17px;
    border: 1px solid #ea6f5a;
    border-radius: 25px;
    background: #fff;
    color: #ea6f5a;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
}

.nav-wz {
    position: relative;
    left: 607px;
    top: 4px;
}

.nav-wz img {
    width: 110px;
}
</style>