var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template( $( '#bookTemplate' ).html() ),

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );

        return this;
    },
	events: {
        'click .delete': 'deleteBook',
		'click .edit': 'editBook'
    },

    deleteBook: function() {
        this.model.destroy();
        this.remove();
    },
	
	editBook: function(e) {
	e.preventDefault();

		var formData = {};

		$( '#addBook div' ).children( 'input' ).each( function( i, el ) {
			if( $( el ).val() != '' )
			{
				formData[ el.id ] = $( el ).val();
			}
		});
		formData['status'] = $( '#status').val();
		this.model.save(formData);
		this.render();
	}
	
});