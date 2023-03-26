<template>
    <div class="container">
        <div class="left">
            <ul>
                <li>
                    <RouterLink to="/it/backend">后端</RouterLink>
                </li>
                <li>
                    <RouterLink to="/it/frontend">前端</RouterLink>
                </li>
            </ul>
        </div>
        <div class="right">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    margin-right: 15px;
    margin-left: 335px;
    padding-left: 15px;
    padding-right: 5px;
    padding-top: 20px;
}

.left {
    float: left;
    width: 250px;
}

.right {
    float: left;
}
</style>