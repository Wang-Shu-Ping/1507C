<template>
    <table >
        <thead class="title_wrap">
            <tr>
                <th v-for="(item,index) in title" :key="index">{{item}}</th>
            </tr>
        </thead>
        <slot></slot>
    </table>
</template>
<script>
export default {
    props:{
        title:{
            required:true,
            type:Array
        }
    }
};
</script>
<style scoped>
    *{margin: 0;padding:0}
</style>
