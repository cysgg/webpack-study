// 入口文件
import $ from 'jquery'
import './css/index.css'
import './css/index.less'

$(
    function(){
        $('li:odd').css('backgroundColor','green')
        $('li:even').css('backgroundColor',()=>{
            return '#' + 'D97634'
        })
    }
)