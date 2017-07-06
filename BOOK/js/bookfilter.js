		app.filter("statusText",function(){
				return function(str){
					return str=="true"?"有库存":"暂无此书";
				}
			})
			app.filter("statusColor",function(){
				return function(str){
					return str=="true"?"text-primary":"text-danger";
				}
			})
			app.filter("unique",function(){
				return function(collection, keyname){
					  var output = [], 
          				keys = [];
          				
      angular.forEach(collection, function(item) {
          var key = item[keyname];
		          if(keys.indexOf(key) === -1) {
		              keys.push(key);
		              output.push(item);
		          }
		      });
		      
		      return output;

				}
			})
