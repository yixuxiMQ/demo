;(function(){
    function Tab(tabDOM, tabContent, opt){
        this.tabContent = tabContent;
        this.tabDOM = tabDOM;
        this.tabList = [...opt.tabs];
        this.line = opt.line;
        this.data = opt.data;
    }

    Tab.prototype.init = function(){
        this.tabContent.innerHTML = this.data[0].innerHTML;
        this.bindEvent();
    }

    Tab.prototype.bindEvent = function(){
        this.tabDOM.addEventListener('click', this.tabClick.bind(this), false);
    }

    Tab.prototype.tabClick = function(ev){
        let e = ev || window.event,
            target = e.target || e.srcElement;

        if(target.tagName.toLowerCase() === 'a'){
            this.tabList.forEach((item, index) => {
                item.className = '';

                // 确定点击元素
                if(item === target.parentNode){
                    item.className = 'active';
                    this.line.style.left = 100 / this.tabList.length * index + '%'

                    // 添加数据
                    this.tabContent.innerHTML = this.data[index].innerHTML;
                }

            })            
        }
        
    }



    window.Tab = Tab;
})();