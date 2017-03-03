# calendar

> calendar component for vue2.0

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

##DEMO
```javascript

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

```

### API
* 属性说明

|属性|说明|类型|默认值|是否必传|
|---|----|---|-----|-------|
|type|data:只有日期；datatime:日期和时间|String|默认datatime|否|
|label|input左侧的label|String|默认无|否|
|showDefault|是否显示默认值|Boolean|默认：true|否|
|defaultDate|默认日期时间，支持两种格式：1.时间戳；2.字符串'2017-01-01 12:20'|Number or String|无默认值|否|
|begin|允许选择的最早的时间，格式同defaultDate|Number or String|无默认值|否|
|end|允许选择的最晚的时间，格式同defaultDate|Number or String|无默认值|否|
|onClose|当组件关闭时触发的回调|Function|-|否|

### 版本升级
#### 0.0.1
