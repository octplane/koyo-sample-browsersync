# bestorank

## Setup

### Requirements

* You need [Racket] since this is a Racket application.
* You need [node] and [nvm] to build the assets.
* You need [honcho] to run the local development server.  This means
  you also need a relatively recent version of [Python].
* You need access to a couple local [Postgres] databases.  One named
  `bestorank` and the other `bestorank_tests`.  The latter is
  exercised by unit tests.
* Finally, you need to have an [argon2] shared library installed.  On
  macOS, you can install it with `brew install argon2`.  This is used
  to securely hash passwords.

### First-time Setup

    $ nvm use && npm install
    $ pip install -r requirements.txt
    $ raco pkg install bestorank/                                    # install and build the application and its deps
    $ raco north migrate -f -u postgres://127.0.0.1/bestorank        # migrate the local database
    $ raco north migrate -f -u postgres://127.0.0.1/bestorank_tests  # migrate the tests database

### Development environment

Copy `.env.default` to `.env`.  [honcho] will automatically load the
variables defined in this file into the environment of the
subprocesses defined in the `Procfile` whenever it is run.

## Running the app locally

    $ nvm use
    $ honcho -f Procfile.dev


[Postgres]: https://www.postgresql.org/
[Python]: https://python.org/
[Racket]: https://racket-lang.org/
[argon2]: https://www.argon2.com/
[honcho]: https://pypi.org/project/honcho/
[node]: https://nodejs.org/en/
[nvm]: https://github.com/nvm-sh/nvm
