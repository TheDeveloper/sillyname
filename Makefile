REPORTER ?= list
# Flags and arguments for node. Could be "debug" to trigger interactive debug session, or '--debug-brk'
NODE_FLAGS ?=

.SILENT:

default: test

test:
	NODE_ENV='test' ./node_modules/mocha/bin/mocha \
    $(NODE_FLAGS) \
		--reporter $(REPORTER) \
		test/index

.PHONY: test

