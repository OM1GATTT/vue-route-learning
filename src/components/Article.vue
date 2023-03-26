<template>
    <div class="content">

        <div class="title">
            {{ items[id].title }}
        </div>

        <div class="info">
            {{ items[id].info }}
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
})
const items = reactive([
    {
        id: 0,
        title: "三毛的侄女真给我留言了",
        info: "今天无意间点开小某书，发现了一条评论：“谢谢爱三毛的你”。 虽然平时也会看一下评论区的留言，但是很少会关注评论者的账号。今天在看到这条评论后，我..."
    },
    {
        id: 1,
        title: "幼儿园两千多的工资能干啥？",
        info: "这两天去妇幼保健院去办理入职体检就花了191块，天天出门都在花钱，最基本的就是公交车费，一个来回就是六块钱，唉，我还没有有正式上班呢，再说了，幼..."
    },
    {
        id: 2,
        title: "病中，病中",
        info: "第七天了还是在反复发烧中，可能和第一天到第四天一边阳一边还要照顾两个娃，也没有机会躺下来有关系。这病毒惯会见缝插针，专挑人抵抗力弱的时候出现。一..."
    }
])
</script>

<style scoped>
.content {
    line-height: 20px;
    font-size: 17px;
    width: 580px;
    height: 132px;
    position: relative;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
}

.title {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
}

.info {
    color: #999;
    font-size: 13px;
}
</style>