// 阻止用户打开右键菜单
window.onload=function(){
    document.body.oncontextmenu=function(e){
         e.preventDefault();
    }
}