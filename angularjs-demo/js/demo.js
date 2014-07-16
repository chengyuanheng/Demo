function MyTagController($scope){

    function init(){
        $scope.tags_group = JSON.parse(localStorage.getItem('my_tags')) || [];
    }
    init();

    $scope.storage_tag = function(new_tag){
        if (event.keyCode == 13){
            var can_append = true;
            var tags_group = JSON.parse(localStorage.getItem('my_tags')) || [];
            $.each(tags_group,function(index,tag){
                if(tag["tag_name"] == new_tag){
                    alert("标签名字重复，请重新添加");
                    can_append = false;
                }
            });
            if(can_append){
                tags_group.push({tag_name:new_tag,tag_status:"none"});
                localStorage.setItem("my_tags",JSON.stringify(tags_group));
                $scope.new_tag = '';
                init();
            }
        }
    }

    $scope.change_tag_status = function(status,index){
        var tags_group = JSON.parse(localStorage.getItem('my_tags')) || [];
        tags_group[index]["tag_status"]=status
        localStorage.setItem("my_tags",JSON.stringify(tags_group));
        init();
    };


    $scope.filter_tags = function(filter_condition){
        if(filter_condition =='all'){
            $scope.status = ''
        }else{
            $scope.status = filter_condition;
        }
    };

    $scope.delete_the_tag = function(tag_name){
        var tags_group = JSON.parse(localStorage.getItem('my_tags')) || [];
        var tag_num;
        $.each(tags_group,function(index,tag){
            if(tag["tag_name"]==tag_name){
                tag_num = index
            }
        });
        tags_group.splice(tag_num,1);
        localStorage.setItem("my_tags",JSON.stringify(tags_group));
        init();
    };

    $scope.delete_completed_tags = function(){
        var tags_group = JSON.parse(localStorage.getItem('my_tags')) || [];
        var delete_index = [];
        $.each(tags_group,function(index,tag){
            if(tag["tag_status"] == "completed"){
                delete_index.push(index);
            }
        });
        $.each(delete_index.reverse(),function(index,value){
            tags_group.splice(value,1);
        });
        localStorage.setItem("my_tags",JSON.stringify(tags_group));
        init();
    }

}
