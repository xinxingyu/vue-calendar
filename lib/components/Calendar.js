var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".calendar-component[_v-19911670] {\n  width: 100%;\n  height: 100%;\n  min-width: 200px;\n  height: 36px;\n  position: relative;\n  /**\n\t * calendar's input\n\t */\n  /**\n\t * set especial style after open 'calendar'\n\t */\n  /**\n\t * calendar's data content\n\t */\n  /**\n\t * arrow icon\n\t */\n}\n.calendar-component *[_v-19911670] {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n.calendar-component span[_v-19911670],\n.calendar-component p[_v-19911670] {\n  margin: 0;\n}\n.calendar-component .calendar-input[_v-19911670] {\n  width: 100%;\n  height: 36px;\n  line-height: 33px;\n  padding: 0 12px;\n  display: -webkit-box;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  background: #FCFCFC;\n  border: 1px solid #E2E3E5;\n  transition: all .3s ease;\n  -moz-transition: all .3s ease;\n  -webkit-transition: all .3s ease;\n  -o-transition: all .3s ease;\n}\n.calendar-component .calendar-input label[_v-19911670] {\n  font-size: 12px;\n  color: #B0B0B0;\n  width: 24px;\n  margin-right: 12px;\n  -webkit-box-flex: 1.0;\n}\n.calendar-component .calendar-input .input-container[_v-19911670] {\n  height: 100%;\n  -webkit-box-flex: 1.0;\n}\n.calendar-component .calendar-input .input-container input[_v-19911670] {\n  color: #333;\n  border: none;\n  height: 100%;\n  display: block;\n  width: 100%;\n  outline: none;\n  font-size: 12px;\n  background: transparent;\n  background: red;\n}\n.calendar-component .calendar-input .input-icon input[_v-19911670] {\n  padding-right: 22px;\n  background: url(../assets/data-normal.png) no-repeat center center;\n  background-size: 15px 15px;\n  background-position: right;\n}\n.calendar-component .calendar-input .readonly[_v-19911670] {\n  cursor: pointer;\n}\n.calendar-component .calendar-open[_v-19911670] {\n  border: 1px solid #FB8A15;\n}\n.calendar-component .calendar-open .input-container input[_v-19911670] {\n  background: url(../assets/data-open.png) no-repeat center center;\n  background-size: 15px 15px;\n  background-position: right;\n}\n.calendar-component .calendar-content[_v-19911670] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 9999;\n  width: 100%;\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #E2E3E5;\n  border-top: none;\n  height: 333px;\n  transition: all .3s ease;\n  -moz-transition: all .3s ease;\n  -webkit-transition: all .3s ease;\n  -o-transition: all .3s ease;\n}\n.calendar-component .calendar-content .calendar-content-box[_v-19911670] {\n  padding: 15px;\n}\n.calendar-component .calendar-content .content-ym[_v-19911670] {\n  text-align: center;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E2E3E5;\n}\n.calendar-component .calendar-content .content-ym button[_v-19911670] {\n  outline: none;\n  border: none;\n  padding: 0px;\n  width: 18px;\n  height: 100%;\n  cursor: pointer;\n  display: inline;\n}\n.calendar-component .calendar-content .content-ym .content-ym-year[_v-19911670],\n.calendar-component .calendar-content .content-ym .content-ym-month[_v-19911670] {\n  display: inline-block;\n  vertical-align: top;\n  width: 80px;\n  height: 36px;\n  border: 1px solid #E2E3E5;\n}\n.calendar-component .calendar-content .content-ym .content-ym-year .item[_v-19911670],\n.calendar-component .calendar-content .content-ym .content-ym-month .item[_v-19911670] {\n  width: 32px;\n  height: 100%;\n  display: inline-block;\n  position: relative;\n  line-height: 36px;\n  vertical-align: top;\n  text-align: center;\n}\n.calendar-component .calendar-content .content-ym .content-ym-month[_v-19911670] {\n  margin-left: 2px;\n}\n.calendar-component .calendar-content .content-date[_v-19911670] {\n  padding-top: 16px;\n  padding-bottom: 11px;\n  border-bottom: 1px solid #E2E3E5;\n}\n.calendar-component .calendar-content .content-date table[_v-19911670] {\n  width: 100%;\n  height: 174px;\n  font-size: 12px;\n}\n.calendar-component .calendar-content .content-date table td[_v-19911670] {\n  padding: 0px;\n  text-align: center;\n}\n.calendar-component .calendar-content .content-date table thead td[_v-19911670] {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n.calendar-component .calendar-content .content-date table tbody td[_v-19911670] {\n  padding: 0px;\n  text-align: center;\n}\n.calendar-component .calendar-content .content-date table tbody td span[_v-19911670] {\n  display: inline-block;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: 1px solid transparent;\n}\n.calendar-component .calendar-content .content-date table tbody td span[_v-19911670]:hover {\n  border: 1px solid #E2E3E5;\n}\n.calendar-component .calendar-content .content-date table tbody td.disabled[_v-19911670] {\n  color: #c0c0c0;\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.calendar-component .calendar-content .content-date table tbody td.selected span[_v-19911670] {\n  background: #FB9023;\n  color: #fff;\n}\n.calendar-component .calendar-content .content-time[_v-19911670] {\n  margin: auto;\n  width: 75px;\n  height: 36px;\n  margin-top: 14px;\n  border: 1px solid #E2E3E5;\n  overflow: hidden;\n}\n.calendar-component .calendar-content .content-time .calendar-left[_v-19911670] {\n  width: 50px;\n  height: 36px;\n  padding: 10px 0;\n  padding-left: 14px;\n  float: left;\n}\n.calendar-component .calendar-content .content-time .calendar-left .time[_v-19911670] {\n  width: 16px;\n  height: 16px;\n  border: none;\n  outline: none;\n  font-size: 12px;\n}\n.calendar-component .calendar-content .content-time .calendar-left .time.foucus[_v-19911670] {\n  font-size: 12px;\n  background: #FB9023;\n  color: #fff;\n}\n.calendar-component .calendar-content .content-time .calendar-right[_v-19911670] {\n  width: 25px;\n  height: 36px;\n  margin-left: 50px;\n}\n.calendar-component .calendar-content .content-time .calendar-right button[_v-19911670] {\n  display: block;\n  width: 25px;\n  height: 18px;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n.calendar-component .calendar-content .content-time .calendar-right button.icon-arrow-top[_v-19911670] {\n  background-position: center 11px;\n}\n.calendar-component .calendar-content .content-time .calendar-right button.icon-arrow-bottom[_v-19911670] {\n  background-position: center 2px;\n}\n.calendar-component .calendar-overlay[_v-19911670] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  z-index: 9998;\n  left: 0;\n  top: 0;\n}\n.calendar-component .icon-arrow-left[_v-19911670] {\n  display: inline-block;\n  background: url(../assets/arrow-left.png) no-repeat center center;\n  background-size: 6px 10px;\n}\n.calendar-component .icon-arrow-right[_v-19911670] {\n  display: inline-block;\n  background: url(../assets/arrow-left.png) no-repeat center center;\n  background-size: 6px 10px;\n  transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -webkit-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n}\n.calendar-component .icon-arrow-top[_v-19911670] {\n  display: inline-block;\n  background: url(../assets/arrow-top.png) no-repeat center center;\n  background-size: 10px 6px;\n}\n.calendar-component .icon-arrow-bottom[_v-19911670] {\n  display: inline-block;\n  background: url(../assets/arrow-bottom.png) no-repeat center center;\n  background-size: 10px 6px;\n}\n.calendar-component.dateType .calendar-content[_v-19911670] {\n  height: 290px;\n}\n.calendar-component.dateType .content-date[_v-19911670] {\n  border-bottom: none;\n}\n.updown-enter[_v-19911670],\n.updown-leave-active[_v-19911670] {\n  height: 0px!important;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
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
			default: function _default() {
				return ['日', '一', '二', '三', '四', '五', '六'];
			}
		},
		months: {
			type: Array,
			default: function _default() {
				return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
			}
		}
	},
	data: function data() {
		return {
			show: false,
			year: 0,
			month: 0,
			day: 0,
			days: [],
			hour: '',
			minute: '',
			currentDate: '',
			foucusItem: 'hour',
			showDate: '',
			showTips: true
		};
	},

	watch: {
		defaultDate: function defaultDate() {
			this.init();
		},
		begin: function begin() {
			this.init();
		},
		end: function end() {
			this.init();
		},
		currentDate: function currentDate(val) {
			if (this.showTips) {
				this.showDate = val;
			}
		}
	},
	computed: {
		monthText: function monthText() {
			return this.month + 1;
		},
		selectedDate: function selectedDate() {
			var showtime = '',
			    dt = this.showDate ? new Date(this.showDate) : '';

			if (dt) {
				switch (this.type) {
					case 'date':
						showtime = dt.getFullYear() + this.sep + this.format(dt.getMonth() + 1) + this.sep + this.format(dt.getDate());
						break;
					case 'datetime':
						showtime = dt.getFullYear() + this.sep + this.format(dt.getMonth() + 1) + this.sep + this.format(dt.getDate()) + ' ' + this.format(parseInt(this.hour)) + ':' + this.format(parseInt(this.minute));
						break;
				}
			}
			return showtime;
		}
	},
	created: function created() {
		this.init();
		this.showTips = this.showDefault;
	},

	methods: {
		/**
   * when calendar is show, init component
   */
		init: function init() {
			var now = new Date(),
			    _this = this;

			if (this.defaultDate) {
				var type = 'string',
				    sep = '-',
				    //separator for default date
				splitDate = [];

				if (!isNaN(Number(this.defaultDate))) {
					//the default date type is Number
					type = 'number';
				} else {
					type = 'string';
					if (this.defaultDate.indexOf("-") != -1) sep = "-";
					if (this.defaultDate.indexOf(".") != -1) sep = ".";
					if (this.defaultDate.indexOf("/") != -1) sep = "/";
				}

				switch (this.type) {
					case 'date':
						if (type == 'number') {
							var d = this.defaultDate;
							if ((this.defaultDate + '').length === 10) {
								d = this.defaultDate * 1000;
							}

							var dt = new Date(d);
							this.year = dt.getFullYear();
							this.month = dt.getMonth();
							this.day = dt.getDate();
							this.hour = this.format(dt.getHours());
							this.minute = this.format(dt.getMinutes());
						} else {
							splitDate = this.defaultDate.split(sep);
							this.year = parseInt(splitDate[0]);
							this.month = parseInt(splitDate[1]) - 1;
							this.day = parseInt(splitDate[2]);
							this.hour = now.getHours();
							this.minute = now.getMinutes();
						}
						break;
					case 'datetime':
						if (type == 'number') {
							// if defaultDate is second
							var _d = this.defaultDate;
							if ((this.defaultDate + '').length === 10) {
								_d = this.defaultDate * 1000;
							}

							var _dt = new Date(_d);
							this.year = _dt.getFullYear();
							this.month = _dt.getMonth();
							this.day = _dt.getDate();
							this.hour = this.format(_dt.getHours());
							this.minute = this.format(_dt.getMinutes());
						} else {
							var _dt2 = this.defaultDate.split(" ");
							splitDate = _dt2[0].split(sep);
							this.year = parseInt(splitDate[0]);
							this.month = parseInt(splitDate[1]) - 1;
							this.day = parseInt(splitDate[2]);
							if (_dt2.length > 1) {
								var splitTime = _dt2[1].split(":");
								this.hour = this.format(splitTime[0]);
								this.minute = this.format(splitTime[1]);
							} else {
								this.hour = this.format(now.getHours());
								this.minute = this.format(now.getMinutes());
							}
						}
						break;
				}
				this.currentDate = new Date(this.year, this.month, this.day);
			} else {
				this.year = now.getFullYear();
				this.month = now.getMonth();
				this.day = now.getDate();
				this.hour = now.getHours();
				this.minute = now.getMinutes();
				this.currentDate = new Date(this.year, this.month, this.day);
			}

			this.render();
		},

		/**
   * year or month 变化时，日期面板重新渲染
   */
		render: function render() {
			var _this = this;
			var monthLen = new Date(this.year, this.month + 1, 0).getDate(),
			    //All days of this month
			firstDay = new Date(this.year, this.month, 1).getDay(),
			    //the week number that first day of this month
			lastDayOfLastMonth = new Date(this.year, this.month, 0).getDate(),
			    //last day of last month
			i = 1,
			    line = 0,
			    temp = [];

			for (; i <= monthLen; i++) {
				var dow = new Date(this.year, this.month, i).getDay(); //current week of this day

				//the first row
				//to fill last month date
				if (i == 1) {
					temp[line] = [];
					var k = lastDayOfLastMonth - firstDay + 1;
					for (var j = 0; j < firstDay; j++) {
						temp[line].push({
							// day: k,
							text: '',
							disabled: true
						});
						k++;
					}
				}

				//the middle date array
				if (!temp[line]) {
					temp[line] = [];
				}

				var options = {
					text: i,
					day: new Date(_this.year, _this.month, i),
					selected: false
				};
				if (this.begin) {
					var beginTime = void 0;
					if (typeof this.begin == 'number') {
						var d = this.begin;
						if ((this.begin + '').length === 10) {
							d = this.begin * 1000;
						}
						beginTime = Number(new Date(d));
					} else {
						var beginSplit = this.begin.split(this.sep);
						beginTime = Number(new Date(parseInt(beginSplit[0]), parseInt(beginSplit[1]) - 1, parseInt(beginSplit[2])));
					}
					if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true;
				}
				if (this.end) {
					var endTime = void 0;
					if (typeof this.end == 'number') {
						var _d2 = this.end;
						if ((this.end + '').length === 10) {
							_d2 = this.end * 1000;
						}
						endTime = Number(new Date(_d2));
					} else {
						var endSplit = this.end.split(this.sep);
						endTime = Number(new Date(parseInt(endSplit[0]), parseInt(endSplit[1]) - 1, parseInt(endSplit[2])));
					}
					if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true;
				}
				temp[line].push(options);

				//the last row, to fill next month date
				if (dow == 6) {
					line++;
				} else if (i == monthLen) {
					var _k = 1;
					for (dow; dow < 6; dow++) {
						temp[line].push({
							text: '',
							// day: k,
							disabled: true
						});
						_k++;
					}
				}
			}
			this.days = temp;
		},
		prev: function prev(type) {
			switch (type) {
				case 'year':
					//wait handle limit
					this.year = parseInt(this.year) - 1;
					this.render();
					break;
				case 'month':
					if (this.month == 0) {
						this.month = 11;
						this.year = parseInt(this.year) - 1;
					} else {
						this.month = parseInt(this.month) - 1;
					}
					this.render();
					break;
				case 'time':
					if (this.foucusItem == 'hour') {
						if (parseInt(this.hour) >= 23) {
							this.hour = '00';
						} else {
							this.hour = this.format(parseInt(this.hour) + 1);
						}
					} else if (this.foucusItem == 'minute') {
						if (parseInt(this.minute) >= 59) {
							this.minute = '00';
							this.hour = this.format(parseInt(this.hour) + 1);
						} else {
							this.minute = this.format(parseInt(this.minute) + 1);
						}
					}
					break;
			}
		},
		next: function next(type) {
			switch (type) {
				case 'year':
					//wait handle limit
					this.year = parseInt(this.year) + 1;
					this.render();
					break;
				case 'month':
					if (this.month == 11) {
						this.month = 0;
						this.year = parseInt(this.year) + 1;
					} else {
						this.month = parseInt(this.month) + 1;
					}
					this.render();
					break;
				case 'time':
					if (this.foucusItem == 'hour') {
						if (parseInt(this.hour) <= 0) {
							this.hour = '23';
						} else {
							this.hour = this.format(parseInt(this.hour) - 1);
						}
					} else if (this.foucusItem == 'minute') {
						if (parseInt(this.minute) <= 0) {
							this.minute = '59';
							this.hour = this.format(parseInt(this.hour) - 1);
						} else {
							this.minute = this.format(parseInt(this.minute) - 1);
						}
					}
					break;
			}
		},

		/**
   * add zero at the begin of date
   */
		format: function format(n) {
			return n < 10 ? '0' + n : n;
		},

		/**
   * select one day
   */
		select: function select(day) {
			this.day = day.day.getDate();
			this.currentDate = day.day;
			this.showTips = true;
		},

		/**
   * When the input box gets the focus，'foucusItem' is equal to 'type'
   * @param {type} value:'hour' or 'minute'
   */
		foucus: function foucus(type) {
			this.foucusItem = type;
		},

		/**
   * drop 'calendar' component
   */
		dropCalendar: function dropCalendar() {
			this.show = true;
		},

		/**
   * close 'calendar' component
   */
		close: function close() {
			var _this = this,
			    dt = new Date(this.currentDate),
			    now = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), this.hour, this.minute, 0).getTime();

			this.show = false;
			if (this.showTips) {
				this.onClose && this.onClose({
					timeStamp: now,
					year: dt.getFullYear(),
					month: dt.getMonth() + 1,
					day: dt.getDate(),
					hour: _this.hour,
					minute: _this.minute
				});
			} else {
				this.onClose && this.onClose({
					timeStamp: '',
					year: '',
					month: '',
					day: '',
					hour: '',
					minute: ''
				});
			}
		},
		change: function change(e, type) {
			var value = e.target.value;
			if (isNaN(Number(value)) || !value) {
				this[type] = '00';
			} else {
				this[type] = this.format(parseInt(value));
			}
		}
	}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"calendar-component\" :class=\"{dateType: type == 'date'}\" _v-19911670=\"\">\n\t<div class=\"calendar-input\" :class=\"{'calendar-open': show}\" _v-19911670=\"\">\n\t\t<label v-if=\"label\" v-text=\"label\" _v-19911670=\"\"></label>\n\t\t<p class=\"input-container\" :class=\"{'input-icon': icon}\" @click=\"dropCalendar\" _v-19911670=\"\">\n\t\t\t<input type=\"text\" :class=\"{readonly: inputType == 'readonly'}\" :readonly=\"inputType =='readonly'\" v-model=\"selectedDate\" _v-19911670=\"\">\n\t\t</p>\n\t</div>\n\t<transition name=\"updown\" _v-19911670=\"\">\n\t<div class=\"calendar-content\" v-show=\"show\" _v-19911670=\"\">\n\t\t<div class=\"calendar-content-box\" _v-19911670=\"\">\n\t\t\t<div class=\"content-ym\" _v-19911670=\"\">\n\t\t\t\t<div class=\"content-ym-year\" _v-19911670=\"\">\n\t\t\t\t\t<button class=\"icon-arrow-left\" @click=\"prev('year')\" _v-19911670=\"\"></button>\n\t\t\t\t\t<div class=\"item\" _v-19911670=\"\"><span _v-19911670=\"\">{{year}}</span></div>\n\t\t\t\t\t<button class=\"icon-arrow-right\" @click=\"next('year')\" _v-19911670=\"\"></button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"content-ym-month\" _v-19911670=\"\">\n\t\t\t\t\t<button class=\"icon-arrow-left\" @click=\"prev('month')\" _v-19911670=\"\"></button>\n\t\t\t\t\t<div class=\"item\" _v-19911670=\"\"><span _v-19911670=\"\">{{monthText}}</span></div>\n\t\t\t\t\t<button class=\"icon-arrow-right\" @click=\"next('month')\" _v-19911670=\"\"></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"content-date\" _v-19911670=\"\">\n\t\t\t\t<table cellpadding=\"0\" cellspacing=\"0\" _v-19911670=\"\">\n\t\t            <thead _v-19911670=\"\">\n\t\t                <tr _v-19911670=\"\">\n\t\t                    <td v-for=\"week in weeks\" class=\"week\" _v-19911670=\"\">{{week}}</td>\n\t\t                </tr>\n\t\t            </thead>\n\t\t\t\t\t<tbody _v-19911670=\"\">\n\t\t\t            <tr v-for=\"(item, index) in days\" _v-19911670=\"\">\n\t\t\t            \t<td v-for=\"(day, key) in item\" :class=\"{'selected': (day.day - currentDate) == 0, 'disabled': day.disabled}\" @click=\"select(day)\" _v-19911670=\"\">\n\t\t\t            \t\t<span _v-19911670=\"\">{{day.text}}</span>\n\t\t\t            \t</td>\n\t\t\t            </tr>\n\t\t\t\t\t</tbody>\n\t            </table>\n\t\t\t</div>\n\t\t\t<div class=\"content-time\" v-if=\"type == 'datetime'\" _v-19911670=\"\">\n\t\t\t\t<div class=\"calendar-left\" _v-19911670=\"\">\n\t\t\t\t\t<input type=\"text\" class=\"time\" :class=\"{'foucus': foucusItem=='hour'}\" maxlength=\"2\" v-model.number=\"hour\" @focus=\"foucus('hour')\" _v-19911670=\"\">:<!--\n\t\t\t\t--><input type=\"text\" class=\"time\" :class=\"{'foucus': foucusItem=='minute'}\" maxlength=\"2\" v-model.number=\"minute\" @focus=\"foucus('minute')\" _v-19911670=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"calendar-right\" _v-19911670=\"\">\n\t\t\t\t\t<button class=\"icon-arrow-top\" @click=\"prev('time')\" _v-19911670=\"\"></button>\n\t\t\t\t\t<button class=\"icon-arrow-bottom\" @click=\"next('time')\" _v-19911670=\"\"></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t</transition>\n\t<div class=\"calendar-overlay\" v-show=\"show\" @click=\"close\" _v-19911670=\"\"></div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".calendar-component[_v-19911670] {\n  width: 100%;\n  height: 100%;\n  min-width: 200px;\n  height: 36px;\n  position: relative;\n  /**\n\t * calendar's input\n\t */\n  /**\n\t * set especial style after open 'calendar'\n\t */\n  /**\n\t * calendar's data content\n\t */\n  /**\n\t * arrow icon\n\t */\n}\n.calendar-component *[_v-19911670] {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n.calendar-component span[_v-19911670],\n.calendar-component p[_v-19911670] {\n  margin: 0;\n}\n.calendar-component .calendar-input[_v-19911670] {\n  width: 100%;\n  height: 36px;\n  line-height: 33px;\n  padding: 0 12px;\n  display: -webkit-box;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  background: #FCFCFC;\n  border: 1px solid #E2E3E5;\n  transition: all .3s ease;\n  -moz-transition: all .3s ease;\n  -webkit-transition: all .3s ease;\n  -o-transition: all .3s ease;\n}\n.calendar-component .calendar-input label[_v-19911670] {\n  font-size: 12px;\n  color: #B0B0B0;\n  width: 24px;\n  margin-right: 12px;\n  -webkit-box-flex: 1.0;\n}\n.calendar-component .calendar-input .input-container[_v-19911670] {\n  height: 100%;\n  -webkit-box-flex: 1.0;\n}\n.calendar-component .calendar-input .input-container input[_v-19911670] {\n  color: #333;\n  border: none;\n  height: 100%;\n  display: block;\n  width: 100%;\n  outline: none;\n  font-size: 12px;\n  background: transparent;\n  background: red;\n}\n.calendar-component .calendar-input .input-icon input[_v-19911670] {\n  padding-right: 22px;\n  background: url(../assets/data-normal.png) no-repeat center center;\n  background-size: 15px 15px;\n  background-position: right;\n}\n.calendar-component .calendar-input .readonly[_v-19911670] {\n  cursor: pointer;\n}\n.calendar-component .calendar-open[_v-19911670] {\n  border: 1px solid #FB8A15;\n}\n.calendar-component .calendar-open .input-container input[_v-19911670] {\n  background: url(../assets/data-open.png) no-repeat center center;\n  background-size: 15px 15px;\n  background-position: right;\n}\n.calendar-component .calendar-content[_v-19911670] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 9999;\n  width: 100%;\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #E2E3E5;\n  border-top: none;\n  height: 333px;\n  transition: all .3s ease;\n  -moz-transition: all .3s ease;\n  -webkit-transition: all .3s ease;\n  -o-transition: all .3s ease;\n}\n.calendar-component .calendar-content .calendar-content-box[_v-19911670] {\n  padding: 15px;\n}\n.calendar-component .calendar-content .content-ym[_v-19911670] {\n  text-align: center;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E2E3E5;\n}\n.calendar-component .calendar-content .content-ym button[_v-19911670] {\n  outline: none;\n  border: none;\n  padding: 0px;\n  width: 18px;\n  height: 100%;\n  cursor: pointer;\n  display: inline;\n}\n.calendar-component .calendar-content .content-ym .content-ym-year[_v-19911670],\n.calendar-component .calendar-content .content-ym .content-ym-month[_v-19911670] {\n  display: inline-block;\n  vertical-align: top;\n  width: 80px;\n  height: 36px;\n  border: 1px solid #E2E3E5;\n}\n.calendar-component .calendar-content .content-ym .content-ym-year .item[_v-19911670],\n.calendar-component .calendar-content .content-ym .content-ym-month .item[_v-19911670] {\n  width: 32px;\n  height: 100%;\n  display: inline-block;\n  position: relative;\n  line-height: 36px;\n  vertical-align: top;\n  text-align: center;\n}\n.calendar-component .calendar-content .content-ym .content-ym-month[_v-19911670] {\n  margin-left: 2px;\n}\n.calendar-component .calendar-content .content-date[_v-19911670] {\n  padding-top: 16px;\n  padding-bottom: 11px;\n  border-bottom: 1px solid #E2E3E5;\n}\n.calendar-component .calendar-content .content-date table[_v-19911670] {\n  width: 100%;\n  height: 174px;\n  font-size: 12px;\n}\n.calendar-component .calendar-content .content-date table td[_v-19911670] {\n  padding: 0px;\n  text-align: center;\n}\n.calendar-component .calendar-content .content-date table thead td[_v-19911670] {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n.calendar-component .calendar-content .content-date table tbody td[_v-19911670] {\n  padding: 0px;\n  text-align: center;\n}\n.calendar-component .calendar-content .content-date table tbody td span[_v-19911670] {\n  display: inline-block;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: 1px solid transparent;\n}\n.calendar-component .calendar-content .content-date table tbody td span[_v-19911670]:hover {\n  border: 1px solid #E2E3E5;\n}\n.calendar-component .calendar-content .content-date table tbody td.disabled[_v-19911670] {\n  color: #c0c0c0;\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.calendar-component .calendar-content .content-date table tbody td.selected span[_v-19911670] {\n  background: #FB9023;\n  color: #fff;\n}\n.calendar-component .calendar-content .content-time[_v-19911670] {\n  margin: auto;\n  width: 75px;\n  height: 36px;\n  margin-top: 14px;\n  border: 1px solid #E2E3E5;\n  overflow: hidden;\n}\n.calendar-component .calendar-content .content-time .calendar-left[_v-19911670] {\n  width: 50px;\n  height: 36px;\n  padding: 10px 0;\n  padding-left: 14px;\n  float: left;\n}\n.calendar-component .calendar-content .content-time .calendar-left .time[_v-19911670] {\n  width: 16px;\n  height: 16px;\n  border: none;\n  outline: none;\n  font-size: 12px;\n}\n.calendar-component .calendar-content .content-time .calendar-left .time.foucus[_v-19911670] {\n  font-size: 12px;\n  background: #FB9023;\n  color: #fff;\n}\n.calendar-component .calendar-content .content-time .calendar-right[_v-19911670] {\n  width: 25px;\n  height: 36px;\n  margin-left: 50px;\n}\n.calendar-component .calendar-content .content-time .calendar-right button[_v-19911670] {\n  display: block;\n  width: 25px;\n  height: 18px;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n.calendar-component .calendar-content .content-time .calendar-right button.icon-arrow-top[_v-19911670] {\n  background-position: center 11px;\n}\n.calendar-component .calendar-content .content-time .calendar-right button.icon-arrow-bottom[_v-19911670] {\n  background-position: center 2px;\n}\n.calendar-component .calendar-overlay[_v-19911670] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  z-index: 9998;\n  left: 0;\n  top: 0;\n}\n.calendar-component .icon-arrow-left[_v-19911670] {\n  display: inline-block;\n  background: url(../assets/arrow-left.png) no-repeat center center;\n  background-size: 6px 10px;\n}\n.calendar-component .icon-arrow-right[_v-19911670] {\n  display: inline-block;\n  background: url(../assets/arrow-left.png) no-repeat center center;\n  background-size: 6px 10px;\n  transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -webkit-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n}\n.calendar-component .icon-arrow-top[_v-19911670] {\n  display: inline-block;\n  background: url(../assets/arrow-top.png) no-repeat center center;\n  background-size: 10px 6px;\n}\n.calendar-component .icon-arrow-bottom[_v-19911670] {\n  display: inline-block;\n  background: url(../assets/arrow-bottom.png) no-repeat center center;\n  background-size: 10px 6px;\n}\n.calendar-component.dateType .calendar-content[_v-19911670] {\n  height: 290px;\n}\n.calendar-component.dateType .content-date[_v-19911670] {\n  border-bottom: none;\n}\n.updown-enter[_v-19911670],\n.updown-leave-active[_v-19911670] {\n  height: 0px!important;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-19911670", module.exports)
  } else {
    hotAPI.update("_v-19911670", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}