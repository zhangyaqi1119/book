angular.module("Register",[])
 .controller('register', function($scope) {
    $scope.user1 = '';
    $scope.username = '';
    $scope.email = '';
    $scope.pas1 = '';
    
})
 
	.controller("main",function($scope,$http){
	$http.get("books.json")
	.success(function(res){
		$scope.myStyle = function(){
			return {
				background:"#"+Math.round(Math.random()*16777215).toString(16)
			}
		}
		$scope.x=8;
		$scope.y=0;
		    $scope.username = '';
   			 $scope.email = '';
			$scope.books=res;
			$scope.getArr=function(m){
				return new Array(Math.ceil(m));
			}
			$scope.changePage=function(i){
				$scope.y=$scope.x*i;
			}
				$scope.hideFun = function($event){
					    bootbox.confirm({
			        message: "确认要删除这一行吗?",
			        buttons: {
			            confirm: {
			                label: 'Yes',
			                className: 'btn-success'
			            },
			            cancel: {
			                label: 'No',
			                className: 'btn-danger'
			            }
			        },
			        callback: function (result) {
			            console.log('This was logged in the callback: ' + result);
			            if(result===true){
			            	angular.element($event.target).parent().parent().remove();
			            }
			            if(result===false){
			            	bootbox.alert("啊~~~~~哦 点错了吧!");
			            }
			        }
			    });
				
				}

})

})
		.controller("detail",function($scope,$http,$routeParams){
//				$routeParams  接受参数

				$http.get("books.json")
				.success(function(res){
						$scope.x=6;
						$scope.y=0;
//						$scope.books=res;
//					console.log(res[1].Id)
						$scope.arr1=[];
					for (let i=0;i<res.length;i++) {
						if(res[i].Category==$routeParams.Category){
							$scope.thisCategory=res[i];
							$scope.arr1.push($scope.thisCategory);
						}
					}
					for (let i=0;i<res.length;i++) {
						if(res[i].Id==$routeParams.Id){
							$scope.thisbook=res[i];
							return;
							console.log($scope.thisbook)
						}
					}
//					console.log($scope.arr1)
				})
				
				
				
			})

			.controller("home", function($scope,$http){
//				$scope.xiugai="读书心得"
//		
				$http.get("books.json")
				.success(function(res){
					$scope.books=res;
					console.log($scope.books)
				})
				
				var navs=document.querySelectorAll(".navs li");
	var cont=document.querySelectorAll(".cont>div");
	for (let i=0;i<navs.length;i++) {
		navs[i].onclick=function(){
			for (var j=0;j<navs.length;j++) {
				navs[j].className=""
			cont[j].className=""
			}
			this.className="active"
			cont[i].className="active"
		}
	}
	var input1 = document.getElementById("upload"); 
if(typeof FileReader==='undefined'){ 
     //result.innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
     input1.setAttribute('disabled','disabled'); 
}else{ 
     input1.addEventListener('change',readFile,false); 
     /*input1.addEventListener('change',function (e){
     	console.log(this.files);//上传的文件列表
     },false); */
}
function readFile(){ 
	var file = this.files[0];//获取上传文件列表中第一个文件
	if(!/image\/\w+/.test(file.type)){
	//图片文件的type值为image/png或image/jpg
		alert("文件必须为图片！");
		return false; 
	} 
	// console.log(file);
	var reader = new FileReader();//实例一个文件对象
	reader.readAsDataURL(file);//把上传的文件转换成url
	//当文件读取成功便可以调取上传的接口
	reader.onload = function(e){ 
		// console.log(this.result);//文件路径
		// console.log(e.target.result);//文件路径
		/*var data = e.target.result.split(',');
		var tp = (file.type == 'image/png')? 'png': 'jpg';
		var imgUrl = data[1];//图片的url，去掉(data:image/png;base64,)
		//需要上传到服务器的在这里可以进行ajax请求
		// console.log(imgUrl);
		// 创建一个 Image 对象 
		var image = new Image();
		// 创建一个 Image 对象 
		// image.src = imgUrl;
		image.src = e.target.result;
		image.onload = function(){
			document.body.appendChild(image);
		}*/

		var image = new Image();
		// 设置src属性 
		image.src = e.target.result;
		var max=100;
		// 绑定load事件处理器，加载完成后执行，避免同步问题
		image.onload = function(){ 
			// 获取 canvas DOM 对象 
			var canvas = document.getElementById("cvs"); 
			// 如果高度超标 宽度等比例缩放 *= 
			/*if(image.height > max) {
				image.width *= max / image.height; 
				image.height = max;
			} */
			// 获取 canvas的 2d 环境对象, 
			var ctx = canvas.getContext("2d"); 
			// canvas清屏 
			ctx.clearRect(0, 0, canvas.width, canvas.height); 
			// 重置canvas宽高
			/*canvas.width = image.width;
			canvas.height = image.height;
			if (canvas.width>max) {canvas.width = max;}*/
			// 将图像绘制到canvas上
			// ctx.drawImage(image, 0, 0, image.width, image.height);
			ctx.drawImage(image, 0, 0, 200, 200);
			// 注意，此时image没有加入到dom之中
		};  
	}
};
	
			
			
			
			} )
