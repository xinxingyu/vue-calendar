<template>
  <div id="app">
	<section>
		<span class="lable">不显示默认时间</span>
		<calendar
			class="calendar"
			:label="'开始'"
			:show-default="false"
			:default-date="calendar1.defaultDate"
			:on-close="calendarClose"
			>
		</calendar>
	</section>
	<section>
		<span class="lable">显示自带时间</span>
		<calendar
			class="calendar"
			:label="'结束'"
			:default-date="calendar2.defaultDate"
			:on-close="calendarClose"
			>
		</calendar>
	</section>
	<section>
		<span class="lable">自定义默认时间</span>
		<calendar
			class="calendar"
			:default-date="calendar3.defaultDate"
			:on-close="calendarClose"
			>
		</calendar>
	</section>
	<section>
		<span class="lable">纯日期</span>
		<calendar
			class="calendar"
			type="date"
			:label="'日期'"
			:default-date="calendar4.defaultDate"
			:on-close="calendarClose"
			>
		</calendar>
	</section>
	<section>
		<span class="lable">时间范围</span>
		<calendar
			class="calendar"
			type="date"
			:label="'范围'"
			:begin="calendar5.begin"
			:end="calendar5.end"
			:default-date="calendar5.defaultDate"
			:on-close="calendarClose"
			>
		</calendar>
	</section>
  </div>
</template>

<script>
import calendar from 'components/calendar'
// import calendar from '../lib/components/calendar'

export default {
	components: {
		calendar,
	},
	data () {
		return {
			calendar1: {
				defaultDate: ''
			},
			calendar2: {
				defaultDate: ''
			},
			calendar3: {
				defaultDate: (new Date(2015,1,2,12,10,22)).getTime()
			},
			calendar4: {
				defaultDate: '2013-1-2 10:20'
			},
			calendar5: {
				defaultDate: '2016-1-11 10:20',
				begin:'2016-1-2 10:20',
				end: '2016-1-20 10:20'
			},
		}
	},
	methods: {
		calendarClose(res){
			console.log(res);
		}
	}
}
</script>

<style lang="less">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 14px;
	box-sizing: border-box;
	.lable{
		display: inline-block;
		width: 100px;
	}
	.calendar{
		display: inline-block;
		width: 200px;
		margin-bottom: 20px;
	}
}
</style>
