#!/bin/sh

set -x

DATABASE_URL=postgres://postgres@127.0.0.1:4321/bestorank raco north migrate $*
