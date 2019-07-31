<!--HTML页面代码部分-->
<template>
	<div> 
		<label>数字1:</label>
		<input v-model="int1"/>
		<br/>
		<br/>
		<label>数字2:</label>
		<input v-model="int2"/>
		<br/>
		<label>展示JavaScript表达式，您输入的数字加和为</label>
		{{parseInt(int1)+parseInt(int2)}}
	</div>
</template>
<script>
//逻辑部分代码
export default {
	data(){
		return {
			//定义相关变量
			int1:0,
			int2:0
		}
	}
}
</script>