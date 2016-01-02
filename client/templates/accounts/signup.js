Template.signup.events({
    'submit form': function(event) {
        event.preventDefault();
        
        var username = $("[name=username]").val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var error = '';

        Accounts.createUser({
            username: username,
            email: email,
            password: password
        });

        alert('Register successfull! Waiting response form admin.');

        Router.go('/admin');

    }
});

Template.signup.helpers({
    error: function() {
        return Session.get('error');
    }
});
