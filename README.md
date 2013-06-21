# Checkoff

This is a learning project, intended to explore fully client-side web
applications and hashing out patterns and best practices. The goal is to learn
how to make web applications that can deliver an experience just as rich and
responsive as a native app by handling as much of the logic as possible on the
device itself.

This app will eventually be backend agnostic, but it is being built initially
in Django because that is what we are most familiar with. For now, we're using
Backbone augmented with additional tools along with Handlebars for templating.


## Project Setup

From the root project directory:

    $ mkvirtualenv checkoff
    $ pip install -r requirements.txt
    $ npm install -g grunt-cli
    $ npm install

At this point, you can fire up runserver. It will fire up Grunt as a child
process to watch JavaScript templates and Less styles, and set up a livereload
server to automatically refresh as you save files.


## Config

The configuration relies somewhat on environment variables. Add the following
to your $VIRTUALENV/bin/postactivate:

    # Config Vars
    export DEBUG=True
    export DATABASE_URL=postgres://checkoff:mypassword@localhost:5432/checkoff

This will use the user 'checkoff' with 'mypassword' on the 'checkoff' database.

Make sure to add the inverse to postdeactivate:

    # Unset config vars
    unset DEBUG
    unset DATABASE_URL
