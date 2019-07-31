<!--HTML页面代码部分-->
<template>
	<div> 
		<div>{{msg}}</div> 
		<label>直接输出的模式：</label>
		<div> {{htmlText}} </div>
		<label>解析后输出的模式：</label>
		<div v-html="htmlText"></div>
		<br/>
		<button v-on:click="greet">Greet</button>
		<br/>
		<input v-model="message" placeholder="编辑">
		<p>Message is:{{ message }}</p>
		<P>复选框：</p>
		<input type="checkbox" id="name1" value="唱歌" v-model="checkedNames">
		<label for="name1">唱歌</label>
		<input type="checkbox" id="name2" value="跳舞" v-model="checkedNames">
		<label for="name2">跳舞</label>
		<input type="checkbox" id="name3" value="游泳" v-model="checkedNames">
		<label for="name3">游泳</label>
		<br/>
		<span>CHecked hobbies:{{ checkedNames }}</span>
		<br/>
		<div>
        <select v-model="selected" mutiple style="width:100px;">
            <option disabled value="">请选择</option>
            <option>学生</option>
            <option>工作</option>
            <option>其他</option>
        </select>
		</div>
		<br/>
		<span>Seleced:{{ selected }}</span>
	</div>
</template>
<script>
//逻辑部分代码
export default {
	data(){
		return {
			//定义相关变量
			msg: 'helloWorld',
			htmlText: '<div style="font-size: 30px;color: red;">helloWord</div>',
			message: '',
			checkedNames: [],
			selected: []
		}
	},
	methods: {
		greet: function (event) {
			alert(this.message+'!')
			if(event){
				alert(even.target.tagName)
			}
		}
	}
}
</script>