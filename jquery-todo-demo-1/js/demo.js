$(document).ready(function () {
    var tags_group = JSON.parse(localStorage.getItem('my_tags')) || [];
    $.each(tags_group,function(index,value){
        append_new_tag(index,value);
    });
    $(".tags_num").text(tags_group.length+" items");
});

function append_new_tag(index,new_tag){
    var new_html = "<div class = 'tag_list form-control "+new_tag["tag_status"]+"'id ="+index+">"+new_tag["tag_name"]+
                   "<button class = 'change_status_btn btn btn-danger btn-xs pull-right' onclick="+"delete_the_tag('"+new_tag["tag_name"]+"')>delete</button>"+
                   "<button class = 'change_status_btn btn btn-success btn-xs pull-right' onclick="+"change_tag_status('completed',"+index+")>completed</button>"+
                   "<button class = 'change_status_btn btn btn-primary btn-xs pull-right' onclick="+"change_tag_status('active',"+index+")>active</button></div>";
    $("#show_tags").append(new_html)
}

function storage_tag(){
    if (event.keyCode == 13){
        var can_append = true;
        var new_tag = $("#my_tag input").val();
        var tags_group = JSON.parse(localStorage.getItem('my_tags')) || [];
        $.each(tags_group,function(index,tag){
           if(tag["tag_name"] == new_tag){
            alert("标签名字重复，请重新添加");
            can_append = false;
           }
        });
        if(can_append){
            append_new_tag(tags_group.length,{tag_name:new_tag,tag_status:"none"});
            tags_group.push({tag_name:new_tag,tag_status:"none"});
            localStorage.setItem("my_tags",JSON.stringify(tags_group));
            $(".tags_num").text(tags_group.length+" items");
            $("#my_tag input").val("");
        }
    }
}

function change_tag_status(status,index){
    var tags_group = JSON.parse(localStorage.getItem('my_tags')) || [];
    tags_group[index]["tag_status"]=status
    localStorage.setItem("my_tags",JSON.stringify(tags_group));
    window.location.reload();
}

function filter_tags(filter_condition){
    var tags_group = JSON.parse(localStorage.getItem('my_tags')) || [];
    var filter_tags_group = [];
    if(filter_condition == "all"){
        filter_tags_group = tags_group;
    }else{
        $.each(tags_group,function(index,tag){
            if(tag["tag_status"] == filter_condition){
                filter_tags_group.push(tag);
            }
        });
    }
    show_tags(filter_tags_group)
}

function show_tags(tags_group){
    $("#show_tags").slideUp().fadeIn().children().remove();
    $.each(tags_group,function(index,value){
        append_new_tag(index,value);
    });
    $(".tags_num").text(tags_group.length+" items");
}

function delete_the_tag(tag_name){
    var tags_group = JSON.parse(localStorage.getItem('my_tags')) || [];
    var tag_num;
    $.each(tags_group,function(index,tag){
        if(tag["tag_name"]==tag_name){
          tag_num = index
        }
    });
    tags_group.splice(tag_num,1);
    localStorage.setItem("my_tags",JSON.stringify(tags_group));
    window.location.reload();
}

function delete_completed_tags(){
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
    window.location.reload();
}
