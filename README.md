# Checkoff

## Project Setup

From the root project directory:

    $ npm install -g grunt-cli
    $ npm install
    $ grunt

This fires up a static server that offers up 'static/index.html' file, or
delivers static files with common file extensions defined in the Gruntfile. It
will watch for changes and automatically reload the site in the browser,
without needing you to hit "refresh".

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
