var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        title: 'Unknown',
        author: 'Unknown',
        status: 'Unknown',
    },
	parse: function( response ) {
		response.id = response._id;
		return response;
	}
});