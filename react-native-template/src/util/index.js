export default {
    /**
     * JavaScript Prototype Enhance
     */
    Enhance() {
        // 数字四舍五入
        Number.prototype.round = function(n = 2) {
            const base = Math.pow(10, n);
            return Math.round(this * base) / base;
        }
    },

    /**
     * 格式化当前时间
     */
    formatTime(date) {
        if (typeof date === 'number') {
            date = new Date(date);
        }
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        var hour = date.getHours() - 8;
        var minute = date.getMinutes();
        var second = date.getSeconds();

        if (year === 1970) {
            if (hour === 0) {
                return [minute, formatNumber(second)].join(':');
            }
            return [hour, minute, second].map(formatNumber).join(':');
        }

        return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':');
    }

    // 格式化：timestamp=> 中文时间

    formatLocalTime(date) {
        var today = false;
        if (typeof date === 'number') {
            if (Date.now() - date < 86400000) {
                today = true;
            }
            date = new Date(date);
        }
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        // TODO: 注意处理时区问题
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        if (year === 1970) {
            if (hour === 0) {
                return [minute, formatNumber(second)].join(':');
            }
            return [hour, minute, second].map(formatNumber).join(':');
        }

        if (today) {
            return '今天' + [hour, minute].map(formatNumber).join(':');
        }
        return formatNumber(month) + '月' + formatNumber(day) + '日 ' + [hour, minute].map(formatNumber).join(':');
    },

    formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    },

    /**
     * 限制字符串长度，超出变为省略号
     */
    cutString(str, len) {
        if (!str) return str;

        var str_len = 0,
            a;
        var str_cut = new String();
        for (var i = 0; i < str.length; i++) {
            a = str.charAt(i);
            str_len++;
            if (escape(a).length > 4) {
                str_len++;
            }
            str_cut = str_cut.concat(a);
            if (str_len > len) {
                str_cut = str_cut.concat('...');
                return str_cut;
            }
        }
        if (str_len <= len) {
            return str;
        }
    },

    // https://devework.com/weixin-weapp-auth-failed.html
    // 是否为空对象
    isEmptyObject(e) {
        var t;
        for (t in e)
            return !1;
        return !0
    },


    square(x, y, x1, y1) {
        return (x - x1) * (x - x1) + (y - y1) * (y - y1);
    },

    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    posToColor(pos) {
        var color = 'black';
        switch (pos) {
            case '0':
                color = 'white';
                break;
            case '1':
                color = 'red';
                break;
            case '2':
                color = 'yellow';
                break;
            case '3':
                color = 'blue';
                break;
            case '4':
                color = 'green';
                break;
            case '5':
                color = 'black';
                break;
            default:
                break;
        }
        return color;
    },

    memorySizeOf(obj) {
        var bytes = 0;

        function sizeOf(obj) {
            if (obj !== null && obj !== undefined) {
                switch (typeof obj) {
                    case 'number':
                        bytes += 8;
                        break;
                    case 'string':
                        bytes += obj.length * 2;
                        break;
                    case 'boolean':
                        bytes += 4;
                        break;
                    case 'object':
                        var objClass = Object.prototype.toString.call(obj).slice(8, -1);
                        if (objClass === 'Object' || objClass === 'Array') {
                            for (var key in obj) {
                                if (!obj.hasOwnProperty(key)) continue;
                                sizeOf(obj[key]);
                            }
                        } else bytes += obj.toString().length * 2;
                        break;
                }
            }
            return bytes;
        };

        // function formatByteSize(bytes) {
        // 	if (bytes < 1024) return bytes + " bytes";
        // 	else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KiB";
        // 	else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MiB";
        // 	else return (bytes / 1073741824).toFixed(3) + " GiB";
        // };

        return sizeOf(obj);
    },

    formatDateTime(myDate) {
        myDate.getYear(); //获取当前年份(2位)
        myDate.getFullYear(); //获取完整的年份(4位,1970-????)
        myDate.getMonth(); //获取当前月份(0-11,0代表1月)
        myDate.getDate(); //获取当前日(1-31)
        myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
        myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
        myDate.getHours(); //获取当前小时数(0-23)
        myDate.getMinutes(); //获取当前分钟数(0-59)
        myDate.getSeconds(); //获取当前秒数(0-59)
        myDate.getMilliseconds(); //获取当前毫秒数(0-999)
        myDate.toLocaleDateString(); //获取当前日期
        var mytime = myDate.toLocaleTimeString(); //获取当前时间
        return myDate.toLocaleString(); //获取日期与时间
    },

    textIsEmpty(str) {
        if (str == "" || str == null) return true;
        var regu = "^[ ]+$";
        var re = new RegExp(regu);
        return re.test(str);
    },

    calculateCurveWidths(maxWidth, minWidth, velocityFilterWeight, startPoint, endPoint, lastVelocity) {
        const velocity = (velocityFilterWeight * velocityFrom(endPoint, startPoint)) +
            ((1 - velocityFilterWeight) * lastVelocity);

        const newWidth = Math.max(maxWidth / (velocity + 1), minWidth);

        const widths = {
            width: newWidth,
            velocity: velocity,
        };
        return widths;
    },


    distanceTo(end, start) {
        return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
    },

    distanceSquare(end, start) {
        return Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2);
    },


    velocityFrom(end, start) {
        return (end.time !== start.time) ? distanceTo(end, start) / (end.time - start.time) : 0;
    }
}