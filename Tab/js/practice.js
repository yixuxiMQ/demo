;(function(){
    const Tab = function(tabDOM, tabContent, opt){
        this.tabDOM = tabDOM;
        this.tabContent = tabContent;
        this.tabList = opt.tabs;
        this.data = opt.data;
        this.line = opt.line;
        this.tabClick = this.tabClick.bind(this);
    }

    Tab.prototype.init = function(){
        // 页面初始化就要显示内容
        this.tabContent.innerHTML = this.data[0].innerHTML;
        this.bindEvent();
    }

    Tab.prototype.bindEvent = function(){
        this.tabDOM.addEventListener('click', this.tabClick, false);
    }

    Tab.prototype.tabClick = function(ev){
        let e = ev || window.event,
            target = e.target || srcElement;

        // 点击后a的效果
        if(target.tagName.toLowerCase() === 'a'){//确保点击到的元素是a元素
            this.tabList.forEach((item, index) => {
                item.className = ''
                

                if(item === target.parentNode){//找到点击到的元素的父元素
                    item.className = 'active';
                    this.line.style.left = 100 / this.tabList.length * index + '%';

                    //添加数据
                    this.tabContent.innerHTML = this.data[index].innerHTML;
                }
            })

        }
    }


    window.Tab = Tab;
})();