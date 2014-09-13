
var Tag = function(){

    var random_generate_tag_id = function(){
        return parseInt(Math.random(1)*10000000000000000);
    };

    var generate_new_tag = function(){
        return { tag_id: random_generate_tag_id(),
                 tag_context: $(".todo-input-box input[type='text']").val(),
                 is_completed: 'false'
        };
    };

    var storage_new_tag = function(){
        var tags = JSON.parse(localStorage.getItem('tags')) || [];
        new_tag = generate_new_tag();
        tags.push(new_tag);
        localStorage.setItem("tags",JSON.stringify(tags));
    };

    var show_all_tags = function(){
        var tags = JSON.parse(localStorage.getItem('tags')) || [];
        show_tags(tags)
    };

    var show_tags = function(tags){
        $('.todo-list').empty();
        $.each(tags,function(index,value){
            $('.todo-list').append(tag_list(value));
            init_tag_list_style(value);
        });
    };

    var tag_list = function(value){
        return "<li class='todo-list-item' id="+value['tag_id']+">" +
               "<a class='todo-item-active' onclick='change_tag_status("+value['tag_id']+")'></a>" +
               "<span class='todo-item-content'>"+value['tag_context']+"</span>" +
               "<a class='todo-item-remove' onclick='remove_tag("+value['tag_id']+")'></a></li>"
    };

    var calculate_active_tags_count = function(){
        var tags = JSON.parse(localStorage.getItem('tags')) || [];
        var tags_count = 0;

        $.each(tags,function(index,value){
            if(value['is_completed'] == 'false'){
                tags_count++;
            }
        });
        return tags_count;
    };

    var calculate_completed_tags_count = function(){
        var tags = JSON.parse(localStorage.getItem('tags')) || [];
        var tags_count = 0;

        $.each(tags,function(index,value){
            if(value['is_completed'] == 'true'){
                tags_count++;
            }
        });
        return tags_count;
    };

    var change_tag_status = function(tag_id){
        var tags = JSON.parse(localStorage.getItem('tags')) || [];
        $.each(tags,function(index,value){
            if(value['tag_id'] == tag_id){
                value['is_completed'] = (value['is_completed'] == 'true' ? 'false' : 'true');
                init_tag_list_style(value);
            }
        });
        localStorage.setItem("tags",JSON.stringify(tags));
    };

    var init_tag_list_style = function(value){
        if(value['is_completed'] == 'false'){
            $('#'+value['tag_id']).find('span').removeClass('completed');
            $('#'+value['tag_id']).find('a').first().css('backgroundImage',"url(images/check.png)");
        }else{
            $('#'+value['tag_id']).find('span').addClass('completed');
            $('#'+value['tag_id']).find('a').first().css('backgroundImage',"url(images/check-hover.png)");
        }
    };

    var remove_tag = function(tag_id){
        var tags = JSON.parse(localStorage.getItem('tags')) || [];
        $.each(tags,function(index,value){
            if(value['tag_id'] == tag_id){
                $('#'+tag_id).remove();
                tags.splice(index,1);
                localStorage.setItem("tags",JSON.stringify(tags));
                return false;
            }
        });
    };

    var remove_all_completed_tags = function(){
        var tags = JSON.parse(localStorage.getItem('tags')) || [];
        var delete_index = [];
        $.each(tags,function(index,value){
            if(value["is_completed"] == "true"){
                $('#'+value['tag_id']).remove();
                delete_index.push(index);
            }
        });
        $.each(delete_index.reverse(),function(index,value){
            tags.splice(value,1);
            localStorage.setItem("tags",JSON.stringify(tags));
        });
    };

    var filter_tags = function(condition){
        $('.todo-list').empty();
        var tags = JSON.parse(localStorage.getItem('tags')) || [];

        $.each(tags,function(index,value){
            if(condition == '' || value["is_completed"] == condition){
                $('.todo-list').append(tag_list(value));
                init_tag_list_style(value);
            }
        });
    };

    var toggle_all_tags_status = function(){
        $('.todo-list').empty();
        var tags = JSON.parse(localStorage.getItem('tags')) || [];
        var is_completed = 'false';

        $.each(tags,function(index,value){
            if(value["is_completed"] == 'false'){
                is_completed = 'true';
                return false
            }
        });
        change_all_tags_status(tags, is_completed)
    };

    var change_all_tags_status = function(tags, is_completed){
        $.each(tags,function(index,value){
            value['is_completed'] = is_completed;
            localStorage.setItem("tags",JSON.stringify(tags));
            $('.todo-list').append(tag_list(value));
            init_tag_list_style(value);
        });
    };

    return {
        storage_new_tag: storage_new_tag,
        show_all_tags: show_all_tags,
        calculate_active_tags_count: calculate_active_tags_count,
        calculate_completed_tags_count: calculate_completed_tags_count,
        change_tag_status: change_tag_status,
        remove_tag: remove_tag,
        remove_all_completed_tags: remove_all_completed_tags,
        filter_tags: filter_tags,
        toggle_all_tags_status: toggle_all_tags_status
    };
}();