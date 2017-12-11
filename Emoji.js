// 表情包数据
var aEmoji1 = [
	"./EmojiImg/1.gif",
	"./EmojiImg/2.gif",
	"./EmojiImg/3.gif",
	"./EmojiImg/4.gif",
	"./EmojiImg/5.gif",
	"./EmojiImg/6.gif",
	"./EmojiImg/7.gif",
	"./EmojiImg/8.gif",
	"./EmojiImg/9.gif",
	"./EmojiImg/10.gif",
]

var aEmoji2 = [
	"./EmojiImg/11.gif",
	"./EmojiImg/12.gif",
	"./EmojiImg/13.gif",
	"./EmojiImg/14.gif",
	"./EmojiImg/15.gif",
	"./EmojiImg/16.gif",
	"./EmojiImg/17.gif",
	"./EmojiImg/18.gif",
	"./EmojiImg/19.gif",
	"./EmojiImg/20.gif",
]


/**
 * [Emoji 表情包插件]
 * @Author   张旭东
 * @DateTime 2017-11-22T21:22:53+0800
 * @version  [version]
 * @param    {[object]}  area      [表情栏区域]
 * @param    {[object]}  inputArea [表情输入区域]
 */
function Emoji(area,inputArea){
	
	this.oEmoji_div = $("<div>");//显示的表情框
	this.oEmoji_div.addClass('emoji_div')
	this.oEmoji_divImg = $("<div>");//图片框
	this.oEmoji_divImg.addClass('oEmoji_divImg')
	this.oEmoji_divBtn = $("<div>");//按钮框
	this.oEmoji_divBtn.addClass('oEmoji_divBtn') 
	this.oEmoji_divBtn1 = $("<button>表情1</button>");//表情按钮1
	this.oEmoji_divBtn2 = $("<button>表情2</button>");//表情按钮2
	
	var oEmoji_div = this.oEmoji_div;
	var oEmoji_divImg = this.oEmoji_divImg

	this.oEmoji_divBtn.append(this.oEmoji_divBtn1)
	this.oEmoji_divBtn.append(this.oEmoji_divBtn2)
	this.oEmoji_div.append(this.oEmoji_divImg)
	this.oEmoji_div.append(this.oEmoji_divBtn)
	area.append(this.oEmoji_div);
	//打印初始默认的表情
	this.firstEmoji = function(){
		oEmoji_divImg.html('');
		printEmoji(aEmoji1)
	}
	// 选择表情包1
	this.oEmoji_divBtn1.click(function(e){	
		e.stopPropagation();  //阻止冒泡事件  
		oEmoji_divImg.html('');
		printEmoji(aEmoji1)
	})
	//选择表情包2
	this.oEmoji_divBtn2.click(function(e){	
		e.stopPropagation(); //阻止冒泡事件 
		oEmoji_divImg.html('');
		printEmoji(aEmoji2)
	})
	//打印表情
	function printEmoji(aEmoji){
		$.each(aEmoji,function(i,item){
			var oImg = $("<img>");
			oImg.attr({"src": item});
			oImg.addClass('emojiImg')
			oImg.click(function(){   //继承了表情按钮的事件，选择图片后，表情栏消失
				var cloneImg = $(this).clone();//克隆表情
				cloneImg.removeClass('emojiImg')//移除图片伪类
				inputArea.append(cloneImg);//打印表情
			})
			oEmoji_divImg.append(oImg);
		})
	}
}
