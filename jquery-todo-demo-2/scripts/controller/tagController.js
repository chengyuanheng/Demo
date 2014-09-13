$(function () {
    Tag.show_all_tags();
    init_todo_left_num();
    init_todo_right_num();
    init_todo_input_box();
    init_todo_toggle_all();
});

function init_todo_toggle_all(){
    $('.todo-input-icon').bind('click', function(){
        Tag.toggle_all_tags_status();
        calculate_active_tags_count();
        calculate_completed_tags_count();
    });
}

function init_todo_left_num(){
    calculate_active_tags_count();
}

function calculate_active_tags_count(){
    $('#todo-left-num').text(Tag.calculate_active_tags_count());
}

function init_todo_right_num(){
    calculate_completed_tags_count();
}

function calculate_completed_tags_count(){
    var todo_right_num = Tag.calculate_completed_tags_count();
    $('#todo-clear-num').text('('+todo_right_num+')').parent().css('display', todo_right_num == 0 ? 'none' : 'display')
}

function init_todo_input_box(){
    $(".todo-input-box input[type='text']").bind('keypress', function(e){
        if(e.keyCode == '13' && $(".todo-input-box input[type='text']").val().trim() != ''){
            Tag.storage_new_tag();
            Tag.show_all_tags();
            $(".todo-input-box input[type='text']").val('');
            calculate_active_tags_count();
        }
    })
}

function change_tag_status(tag_id){
    Tag.change_tag_status(tag_id);

    calculate_active_tags_count();
    calculate_completed_tags_count();
}

function remove_tag(tag_id){
    Tag.remove_tag(tag_id);
    calculate_active_tags_count();
    calculate_completed_tags_count();
}

function remove_all_completed_tags(){
    Tag.remove_all_completed_tags();
    calculate_completed_tags_count();
}

function filter_tags(condition){
    Tag.filter_tags(condition)
}