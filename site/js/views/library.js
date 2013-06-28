var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    initialize: function() {
		this.collection = new app.Library();
		this.collection.fetch({reset: true});
	},

    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },
		
    renderBook: function( item ) {
        var bookView = new app.BookView({
            model: item
        });
        this.$el.append( bookView.render().el );
    },
	events:{
    'click #add':'addBook',
	'click #find':'findBook',
	'click #findAll':'render'
	},
	
	findBook: function( e ){
		var formData = {};

		$( '#addBook div' ).children( 'input' ).each( function( i, el ) {
			if( $( el ).val() != '' )
			{
				formData[ el.id ] = $( el ).val();
			}
		});
		this.collection.each(function( item ){
			if(formData['title'] == item.get('title')){
				 this.renderBook( item );
			}
		}, this);
	},	

	addBook: function( e ) {
		e.preventDefault();

		var formData = {};

		$( '#addBook div' ).children( 'input' ).each( function( i, el ) {
			if( $( el ).val() != '' )
			{
				formData[ el.id ] = $( el ).val();
			}
		});
		formData['status'] = $('#status').val();
		this.collection.create( formData );
	},
});