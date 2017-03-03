<template>
	<div class="calendar-component" :class="{dateType: type == 'date'}">
		<div class="calendar-input" :class="{'calendar-open': show}">
			<label v-if="label" v-text="label"></label>
			<p class="input-container" :class="{'input-icon': icon}" @click="dropCalendar">
				<input type="text" :class="{readonly: inputType == 'readonly'}" :readonly="inputType =='readonly'" v-model="selectedDate">
			</p>
		</div>
		<transition name="updown">
		<div class="calendar-content" v-show="show">
			<div class="calendar-content-box">
				<div class="content-ym">
					<div class="content-ym-year">
						<button class="icon-arrow-left" @click="prev('year')"></button>
						<div class="item"><span>{{year}}</span></div>
						<button class="icon-arrow-right" @click="next('year')"></button>
					</div>
					<div class="content-ym-month">
						<button class="icon-arrow-left" @click="prev('month')"></button>
						<div class="item"><span>{{monthText}}</span></div>
						<button class="icon-arrow-right" @click="next('month')"></button>
					</div>
				</div>
				<div class="content-date">
					<table cellpadding="0" cellspacing="0">
			            <thead>
			                <tr>
			                    <td v-for="week in weeks" class="week">{{week}}</td>
			                </tr>
			            </thead>
						<tbody>
				            <tr v-for="(item, index) in days">
				            	<td
									v-for="(day, key) in item"
									:class="{'selected': (day.day - currentDate) == 0, 'disabled': day.disabled}"
									@click="select(day)"
									>
				            		<span>{{day.text}}</span>
				            	</td>
				            </tr>
						</tbody>
		            </table>
				</div>
				<div class="content-time" v-if="type == 'datetime'">
					<div class="calendar-left">
						<input
							type="text"
							class="time"
							:class="{'foucus': foucusItem=='hour'}"
							maxlength="2"
							v-model.number="hour"
							@focus="foucus('hour')">:<!--
					--><input
							type="text"
							class="time"
							:class="{'foucus': foucusItem=='minute'}"
							maxlength="2"
							v-model.number="minute"
							@focus="foucus('minute')"/>
					</div>
					<div class="calendar-right">
						<button class="icon-arrow-top" @click="prev('time')"></button>
						<button class="icon-arrow-bottom" @click="next('time')"></button>
					</div>
				</div>
			</div>
		</div>
		</transition>
		<div class="calendar-overlay" v-show="show" @click="close"></div>
	</div>
</template>

<script>
export default {
	props: {
		/**
		 * input 的类型
		 * 1. input    输入模式
		 * 2. readonly 只读模式
		 * 3. TODO .....
		 */
		inputType: {
			type: String,
			default: 'readonly'
		},
		label: {
			type: String
		},
		icon: {
			type: Boolean,
			default: true
		},
		showDefault: {
			type: Boolean,
			default: true
		},
		defaultDate: {
			type: [Number, String],
			default: ''
		},
		/**
		 * type
		 * 1. date      date
		 * 2. datetime  date and time
		 */
		type: {
			type: String,
			default: 'datetime'
		},
		/**
		 * separator for date
		 */
		sep: {
			type: String,
			default: '-'
		},
		begin: {
			type: [Number, String],
			default: ''
		},
		end: {
			type: [Number, String],
			default: ''
		},
		onClose: {
			type: Function
		},
		weeks: {
			type: Array,
            default:function(){
                return ['日', '一', '二', '三', '四', '五', '六']
            }
		},
		months:{
            type: Array,
            default:function(){
                return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
            }
        }
	},
	data(){
		return {
			show: false,
			year: 0,
			month: 0,
			day: 0,
			days: [],
			hour: '',
			minute:'',
			currentDate: '',
			foucusItem: 'hour',
			showDate: '',
			showTips: true
		}
	},
	watch: {
		defaultDate(){
			this.init()
		},
		begin(){
			this.init()
		},
		end(){
			this.init()
		},
		currentDate(val){
			if(this.showTips){
				this.showDate = val
			}
		}
	},
	computed: {
		monthText(){
			return this.month + 1
		},
		selectedDate(){
			let showtime = '',
				dt = this.showDate ? new Date(this.showDate) : ''

			if(dt){
				switch(this.type){
					case 'date':
						showtime = dt.getFullYear() + this.sep + this.format(dt.getMonth()+1) + this.sep + this.format(dt.getDate())
						break;
					case 'datetime':
						showtime = dt.getFullYear() + this.sep + this.format(dt.getMonth()+1) + this.sep + this.format(dt.getDate()) + ' ' + this.format(parseInt(this.hour)) + ':' + this.format(parseInt(this.minute))
						break;
				}
			}
			return showtime
		},
	},
	created(){
		this.init()
		this.showTips = this.showDefault
	},
	methods: {
		/**
		 * when calendar is show, init component
		 */
		init(){
			let now = new Date(),
				_this = this

			if(this.defaultDate){
				let type = 'string',
					sep = '-', //separator for default date
					splitDate = []

				if(!isNaN(Number(this.defaultDate))){//the default date type is Number
					type = 'number'
				}else{
					type = 'string'
					if (this.defaultDate.indexOf("-") != -1) sep = "-"
	                if (this.defaultDate.indexOf(".") != -1) sep = "."
	                if (this.defaultDate.indexOf("/") != -1) sep = "/"
				}

				switch(this.type){
					case 'date':
						if(type == 'number'){
							let d = this.defaultDate;
							if((this.defaultDate + '').length === 10){
								d = this.defaultDate * 1000;
							}

							let dt = new Date(d)
							this.year = dt.getFullYear()
							this.month = dt.getMonth()
							this.day = dt.getDate()
							this.hour = this.format(dt.getHours())
							this.minute = this.format(dt.getMinutes())
						}else{
							splitDate = this.defaultDate.split(sep)
							this.year = parseInt(splitDate[0])
							this.month = parseInt(splitDate[1]) - 1
							this.day = parseInt(splitDate[2])
							this.hour = now.getHours()
							this.minute = now.getMinutes()
						}
						break;
					case 'datetime':
						if(type == 'number'){
							// if defaultDate is second
							let d = this.defaultDate;
							if((this.defaultDate + '').length === 10){
								d = this.defaultDate * 1000;
							}

							let dt = new Date(d)
							this.year = dt.getFullYear()
							this.month = dt.getMonth()
							this.day = dt.getDate()
							this.hour = this.format(dt.getHours())
							this.minute = this.format(dt.getMinutes())
						}else{
							let dt = this.defaultDate.split(" ")
							splitDate = dt[0].split(sep)
							this.year = parseInt(splitDate[0])
							this.month = parseInt(splitDate[1]) - 1
							this.day = parseInt(splitDate[2])
							if(dt.length > 1){
		                        let splitTime = dt[1].split(":")
		                        this.hour = this.format(splitTime[0])
		                        this.minute = this.format(splitTime[1])
		                    }else{
								this.hour = this.format(now.getHours())
		                        this.minute = this.format(now.getMinutes())
							}
						}
						break;
				}
				this.currentDate = new Date(this.year, this.month, this.day)
			}else{
				this.year = now.getFullYear()
				this.month =  now.getMonth()
				this.day = now.getDate()
				this.hour = now.getHours()
				this.minute = now.getMinutes()
				this.currentDate = new Date(this.year, this.month, this.day)
			}

			this.render()
		},
		/**
		 * year or month 变化时，日期面板重新渲染
		 */
		render(){
			let _this = this
			let monthLen = new Date(this.year, this.month+1, 0).getDate(), //All days of this month
				firstDay = new Date(this.year, this.month, 1).getDay(), //the week number that first day of this month
				lastDayOfLastMonth = new Date(this.year, this.month, 0).getDate(), //last day of last month
				i = 1,
				line = 0,
				temp = []

			for(; i <= monthLen; i++){
				let dow = new Date(this.year, this.month, i).getDay() //current week of this day

				//the first row
				//to fill last month date
				if(i == 1){
                    temp[line] = []
                    let k = lastDayOfLastMonth - firstDay + 1
                    for (let j = 0; j < firstDay; j++) {
                        temp[line].push({
                            // day: k,
                            text: '',
                            disabled: true
                        })
                        k++;
                    }
                }

				//the middle date array
				if(!temp[line]){
					temp[line] = []
				}

				let options = {
					text: i,
			   		day: new Date(_this.year,_this.month, i),
			   		selected: false,
				}
				if(this.begin){
					let beginTime;
					if(typeof this.begin == 'number'){
						let d = this.begin;
						if((this.begin + '').length === 10){
							d = this.begin * 1000;
						}
						beginTime = Number(new Date(d))
					}else{
						let beginSplit = this.begin.split(this.sep);
					 	beginTime = Number(new Date(
							parseInt(beginSplit[0]),
							parseInt(beginSplit[1]) - 1,
							parseInt(beginSplit[2])
						))
					}
					if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
				}
				if(this.end){
					let endTime;
					if(typeof this.end == 'number'){
						let d = this.end;
						if((this.end + '').length === 10){
							d = this.end * 1000;
						}
						endTime = Number(new Date(d))
					}else{
						let endSplit = this.end.split(this.sep);
						endTime = Number(new Date(
							parseInt(endSplit[0]),
							parseInt(endSplit[1]) - 1,
							parseInt(endSplit[2])
						))
					}
					if (endTime <  Number(new Date(this.year, this.month, i))) options.disabled = true
				}
				temp[line].push(options)

				//the last row, to fill next month date
				if(dow == 6){
					line++
				}else if(i == monthLen) {
					let k = 1
					for (dow; dow < 6; dow++) {
						temp[line].push({
							text: '',
							// day: k,
							disabled: true
						})
						k++
					}
				}
			}
			this.days = temp
		},
		prev(type){
			switch (type) {
				case 'year':
					//wait handle limit
					this.year = parseInt(this.year) - 1
					this.render()
					break;
				case 'month':
					if(this.month == 0){
						this.month = 11
						this.year = parseInt(this.year) - 1
					}else{
						this.month = parseInt(this.month) - 1
					}
					this.render()
					break;
				case 'time':
						if(this.foucusItem == 'hour'){
							if(parseInt(this.hour) >= 23){
								this.hour = '00'
							}else{
								this.hour = this.format(parseInt(this.hour) + 1)
							}
						}else if(this.foucusItem == 'minute'){
							if(parseInt(this.minute) >= 59){
								this.minute = '00'
								this.hour = this.format(parseInt(this.hour) + 1)
							}else{
								this.minute = this.format(parseInt(this.minute) + 1)
							}
						}
					break;
			}
		},
		next(type){
			switch (type) {
				case 'year':
					//wait handle limit
					this.year = parseInt(this.year) + 1
					this.render()
					break;
				case 'month':
					if(this.month == 11){
						this.month = 0
						this.year = parseInt(this.year) + 1
					}else{
						this.month = parseInt(this.month) + 1
					}
					this.render()
					break;
				case 'time':
						if(this.foucusItem == 'hour'){
							if(parseInt(this.hour) <= 0){
								this.hour = '23'
							}else{
								this.hour = this.format(parseInt(this.hour) - 1)
							}
						}else if(this.foucusItem == 'minute'){
							if(parseInt(this.minute) <= 0){
								this.minute = '59'
								this.hour = this.format(parseInt(this.hour) - 1)
							}else{
								this.minute = this.format(parseInt(this.minute) - 1)
							}
						}
					break;
			}
		},
		/**
		 * add zero at the begin of date
		 */
        format(n) {
            return n < 10 ? '0' + n : n
        },
		/**
		 * select one day
		 */
		select(day){
			this.day = day.day.getDate()
			this.currentDate = day.day
			this.showTips = true
		},
		/**
		 * When the input box gets the focus，'foucusItem' is equal to 'type'
		 * @param {type} value:'hour' or 'minute'
		 */
		foucus(type){
			this.foucusItem = type
		},
		/**
		 * drop 'calendar' component
		 */
		dropCalendar(){
			this.show = true
		},
		/**
		 * close 'calendar' component
		 */
		close(){
			let _this = this,
				dt = new Date(this.currentDate),
				now = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),this.hour,this.minute,0).getTime()

			this.show = false
			if(this.showTips){
				this.onClose && this.onClose({
					timeStamp: now,
					year: dt.getFullYear(),
					month: dt.getMonth() + 1,
					day: dt.getDate(),
					hour: _this.hour,
					minute: _this.minute
				})
			}else{
				this.onClose && this.onClose({
					timeStamp: '',
					year: '',
					month: '',
					day: '',
					hour: '',
					minute: ''
				})
			}

		},
		change(e, type){
			let value = e.target.value
			if(isNaN(Number(value)) || !value){
				this[type] = '00'
			}else{
				this[type] = this.format(parseInt(value))
			}
		}
	}
}
</script>

<style lang="less" scoped>
.calendar-component{
	width: 100%;
	height: 100%;
	min-width: 200px;
	height: 36px;
	position: relative;
	*{
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
	}
	span, p{
		margin: 0;
	}
	/**
	 * calendar's input
	 */
	.calendar-input{
		width: 100%;
		height: 36px;
		line-height: 33px;
		padding: 0 12px;
		display: -webkit-box;
		-webkit-align-items: center;
		-webkit-box-align: center;
		background: #FCFCFC;
		border: 1px solid #E2E3E5;
		transition: all .3s ease;
		-moz-transition: all .3s ease;
		-webkit-transition: all .3s ease;
		-o-transition: all .3s ease;

		label{
			font-size: 12px;
			color: #B0B0B0;
			width: 24px;
			margin-right: 12px;
			-webkit-box-flex: 1.0;
		}
		.input-container{
			height: 100%;
	        -webkit-box-flex: 1.0;
	        input{
	            color: #333;
	            border: none;
	            height: 100%;
	            display: block;
	            width: 100%;
	            outline: none;
	            font-size: 12px;
	            background: transparent;
				background: red;
	        }
		}
		.input-icon{
			input{
				padding-right: 22px;
				background: url(../assets/data-normal.png) no-repeat center center;
				background-size: 15px 15px;
				background-position: right;
			}
		}
		.readonly{
			cursor: pointer;
		}
	}
	/**
	 * set especial style after open 'calendar'
	 */
	.calendar-open{
		border: 1px solid #FB8A15;
		.input-container{
			input{
				background: url(../assets/data-open.png) no-repeat center center;
				background-size: 15px 15px;
				background-position: right;
			}
		}
	}
	/**
	 * calendar's data content
	 */
	.calendar-content{
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 9999;
		width: 100%;
		overflow: hidden;
		background: #fff;
		border: 1px solid #E2E3E5;
		border-top: none;
		height: 333px;
		transition: all .3s ease;
		-moz-transition: all .3s ease;
		-webkit-transition: all .3s ease;
		-o-transition: all .3s ease;
		.calendar-content-box{
			padding: 15px;
		}
		.content-ym{
			text-align: center;
			padding-bottom: 20px;
			border-bottom: 1px solid #E2E3E5;
			button{
				outline: none;
				border: none;
				padding: 0px;
				width: 18px;
				height: 100%;
				cursor: pointer;
				display: inline;
			}
			.content-ym-year,.content-ym-month{
				display: inline-block;
			    vertical-align: top;
				width: 80px;
				height: 36px;
				border: 1px solid #E2E3E5;
				.item{
					width: 32px;
					height: 100%;
				    display: inline-block;
				    position: relative;
				    line-height: 36px;
				    vertical-align: top;
				    text-align: center;
				}
			}
			.content-ym-month{
				margin-left: 2px;
			}
		}
		.content-date{
			padding-top: 16px;
			padding-bottom: 11px;
			border-bottom: 1px solid #E2E3E5;
			table{
				width: 100%;
				height: 174px;
				font-size: 12px;
				td{
					padding: 0px;
					text-align: center;
				}
				thead{
					td{
						width: 24px;
						height: 24px;
						cursor: pointer;
					}
				}
				tbody{
					td{
						padding: 0px;
						text-align: center;
						span{
							display: inline-block;
							text-align: center;
							width: 24px;
							height: 24px;
							line-height: 24px;
							cursor: pointer;
							border-radius: 50%;
							border: 1px solid transparent;
						}
						span:hover{
							border: 1px solid #E2E3E5;
						}
						&.disabled{
							color: #c0c0c0;
						    pointer-events:none !important;
						    cursor: default !important;
						}
						&.selected{
							span{
								background: #FB9023;
								color: #fff;
							}
						}
					}
				}
			}
		}
		.content-time{
			margin: auto;
			width: 75px;
			height: 36px;
			margin-top: 14px;
			border: 1px solid #E2E3E5;
			overflow: hidden;
			.calendar-left{
				width: 50px;
				height: 36px;
				padding: 10px 0;
				padding-left: 14px;
				float: left;
				.time{
					width: 16px;
					height: 16px;
					border: none;
				    outline: none;
					font-size: 12px;
					&.foucus{
						font-size: 12px;
						background: #FB9023;
						color: #fff;
					}
				}
			}
			.calendar-right{
				width: 25px;
				height: 36px;
				margin-left: 50px;
				button{
					display: block;
					width: 25px;
					height: 18px;
					border: none;
					padding: 0;
					margin: 0;
					cursor: pointer;
					&.icon-arrow-top{
						background-position: center 11px;
					}
					&.icon-arrow-bottom{
						background-position: center 2px;
					}
				}
			}
		}
	}
	.calendar-overlay{
		position: fixed;
		width: 100%;
		height: 100%;
		background: transparent;
		z-index: 9998;
		left: 0;
		top: 0;
	}

	/**
	 * arrow icon
	 */
	.icon-arrow-left{
		display: inline-block;
		background: url(../assets/arrow-left.png) no-repeat center center;
		background-size: 6px 10px;
	}
	.icon-arrow-right{
		display: inline-block;
		background: url(../assets/arrow-left.png) no-repeat center center;
		background-size: 6px 10px;
		transform:rotate(180deg);
		-ms-transform:rotate(180deg);
		-moz-transform:rotate(180deg);
		-webkit-transform:rotate(180deg);
		-o-transform:rotate(180deg);
	}
	.icon-arrow-top{
		display: inline-block;
		background: url(../assets/arrow-top.png) no-repeat center center;
		background-size: 10px 6px;
	}
	.icon-arrow-bottom{
		display: inline-block;
		background: url(../assets/arrow-bottom.png) no-repeat center center;
		background-size: 10px 6px;
	}

	&.dateType{
		.calendar-content{
			height: 290px;
		}
		.content-date{
			border-bottom: none;
		}
	}
}
.updown-enter, .updown-leave-active{
	height: 0px!important;
}
</style>
