#lang info

(define collection "tests")

(define deps '())
(define build-deps '("base"
                     "component-lib"
                     "db-lib"
                     "koyo-lib"
                     "threading-lib"
                     "rackunit-lib"

                     "bestorank"))

(define update-implies '("bestorank"))
