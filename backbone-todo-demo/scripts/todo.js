$(function(){

  var Todo = Backbone.Model.extend({   

    defaults: function(){
      return{
        context:  null,
        active: true,
        filter: true
      };
    },

    toggle: function(){
      this.save({active: !this.get('active')});
    }

  });

  var TodoList = Backbone.Collection.extend({    

    model: Todo,
    
    localStorage: new Backbone.LocalStorage('todo_list'),

    active: function(){
      return this.where({active: true});
    },

    completed: function(){
      return this.where({active: false});
    },

    show: function(){
      return this.where({filter: true});
    },

  });

  var Todos = new TodoList;


  var TodoView = Backbone.View.extend({

    template: _.template($('#todo-template').html()),

    events:{
      "click .todo-item-active" : 'toggleActive', 
      'click .todo-item-remove' : 'removeOne'
    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },


    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    toggleActive: function(){
      this.model.toggle();
    },

    removeOne: function(){
      this.model.destroy();
    }

  });

  var AppView = Backbone.View.extend({

   el: $('.todo-wrapper'),

   initialize: function() {
    this.input = this.$(".todo-input");
    this.leftItem = this.$('#todo-left-num');
    this.clearNum = this.$('#todo-clear-num');

    this.listenTo(Todos, 'add', this.addOne);
    this.listenTo(Todos, 'all', this.render);
    this.listenTo(Todos, 'reset', this.addAll);

    Todos.fetch();
   },

   events: {
    'keypress .todo-input': 'createOne',
    'click .filter' : 'filter',
    'click .todo-input-icon' : 'toggleAll',
    'click #clear_all_completed_todo' : 'clearAllCompleted'
   },

   createOne: function(e){     
      if(e.keyCode != '13') return;
      if(!this.input.val()) return;
      Todos.create({context: this.$('.todo-input').val()});    
      this.input.val('');
   },

   addOne: function(todo){
    var view = new TodoView({model: todo});
    this.$('.todo-list-box').children().append(view.render().el);
   },

   addAll: function(todo){
    alert('hello');
    Todos.each(this.addOne, this);
   },

   render: function(){

    this.leftItem.text(Todos.active().length)
    this.clearNum.text('('+Todos.completed().length+')')
    
   },

   filter: function(e){

    if($(e.currentTarget).text() == 'Active'){
      

    };

    if($(e.currentTarget).text() == 'Completed'){
  
    }
      
   },

   toggleAll: function(){

    var completedNum = Todos.completed().length

    Todos.each(function(todo){
      todo.save({'active': completedNum == 0 ? false : true});
    })

   },

   clearAllCompleted: function(){
    _.invoke(Todos.completed(),'destroy');
    return false;
   }
  });
  
  var appview = new AppView;  

});