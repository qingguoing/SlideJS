var Animation = (function() {
    var Slide = function(config) {
        this.config = typeof config === 'object' ? config : {};
        this.targetElement = this.config.target || 'slide';
        // show slide marker
        this.showMarker = this.config.showMarker || false;
        this.mark = this.config.marker || false;
        this.marker = this.config.setClass && this.config.setClass.marker || '';
        this.active = this.config.setClass && this.config.setClass.active || '';
        this.unactive = this.config.setClass && this.config.setClass.unactive || '';
        // show left and right controller
        this.showController = this.config.showController || false;
        this.controllerPrev = this.config.setClass && this.config.setClass.controllerPrev || '';
        this.controllerNext = this.config.setClass && this.config.setClass.controllerNext || '';

        this.miliTime = this.config.miliTime || 50;
        this.aboutTime = this.config.aboutTime || 5000;
        this.currentTimer = null;
        this.timer = null;
        this.speed = 0;
        this.nextPic = 0;

        this.init();
        this.handleEvent();
    };

    Slide.prototype = {
        init: function() {
            this.oTarget = document.getElementById(this.targetElement);
            this.oUl = this.oTarget.getElementsByTagName('ul')[0];
        	var oULi = this.oUl.getElementsByTagName('li');
            this.width = oULi[0].offsetWidth;
            this.number = oULi.length;
            this.oUl.style.width = this.number * this.width + 'px';            
            
            // marker
            if (this.showMarker) {
                var oOl = document.createElement('ol'),
                    oOlis = [];

                oOl.className = this.marker;
               	
                for (var i = 1; i <= this.number; i++) {
	                this.mark ? oOlis.push('<li class="' + this.unactive + '">' + i + '<\/li>') : oOlis.push('<li class="' + this.unactive + '">' + "" + "<\/li>");
	            }
		            
		        oOl.innerHTML = oOlis.join('');
		        this.oTarget.appendChild(oOl);
		        
		        this.oOli = oOl.getElementsByTagName('li');
		        this.oOli[0].className = this.active;
            }
            
            console.log(this.showController);
            // controller
            if(this.showController) {
            	this.oPrev = document.createElement('span');
            	this.oNext = document.createElement('span');
            	this.oPrev.className = this.controllerPrev;
            	this.oNext.className = this.controllerNext;
            	
            	this.oTarget.appendChild(this.oPrev);
            	this.oTarget.appendChild(this.oNext);
            }
        },
        
        handleEvent: function() {
        	var that = this;
        	this.currentTimer = setInterval(function() {
        		that.next();
        	}, this.aboutTime);
        	
        	// initialize the addEvent function
        	this.addEvent();
        	
        	this.addEvent(this.oTarget, 'mouseover', function() {
        		clearInterval(that.currentTimer);
        	});

			this.addEvent(this.oTarget, 'mouseout', function() {
        		that.currentTimer = setInterval(function() {
        			that.next();
        		}, that.aboutTime);
        	});
        	
        	if (this.showMarker) {
        		for (var i = 0; i < this.number; i++) {
        			var element = this.oOli[i];
        			(function(i) {
        				that.addEvent(element, 'mouseover', function() {
        					that.go(i);
        				});
        			})(i);
        		}
        	}
        	
        	if (this.showController) {
        		this.addEvent(this.oPrev, 'click', function() {
        			that.prev();
        		});
        		
        		this.addEvent(this.oNext, 'click', function() {
        			that.next();
        		});
        	}
        },
        
        prev: function() {
        	this.nextPic--;
        	if (this.nextPic < 0) {
        		this.nextPic = this.number - 1;
        	}
        	this.go(this.nextPic);
        },
        
        next: function() {
        	this.nextPic++;
        	if (this.nextPic >= this.number) {
        		this.nextPic = 0;
        	}
        	this.go(this.nextPic);
        },
        
        go: function(index) {
        	var that = this,
        		left = -index * this.width;
        	
        	if (this.showMarker) {
        		for (var i = 0; i < this.number; i++) {
        			i === index ? this.oOli[i].className = this.active : this.oOli[i].className = this.unactive;
        		}
        	}
        	
        	if (this.timer) {
        		clearInterval(this.timer);
        	}
        	
        	this.timer = setInterval(function() {
        		that.move(left);
        	}, this.miliTime);
        },
        
        move: function(left) {
        	this.oUl.style.left = this.speed + 'px',
        	leftOffset = this.oUl.offsetLeft;
        	this.speed += (left - leftOffset) / 3;
        	
        	if (Math.abs(left - leftOffset) === 0) {
        		this.oUl.style.left = left + 'px';
        		clearInterval(this.timer);
        		this.timer = null;
        	}
        },
        
        addEvent: function(ele, type, fn) {
        	if (window.addEventListener) {
        		this.addEvent = function(ele, type, fn) {
        			return ele.addEventListener(type, fn, false);
        		};
        	}
        	
        	if (window.attachEvent) {
        		this.addEvent = function(ele, type, fn) {
        			ele.attachEvent('on' + type, fn);
        		};
        	}
        }
    };
    
    return {
    	slide: function(config) {
    		new Slide(config);
    	}
    }
})();
