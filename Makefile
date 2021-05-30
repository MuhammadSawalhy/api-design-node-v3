
SRC = ./src
SRC_JS := $(wildcard $(SRC)/**/*.js)
SRC_DIRS != find $(SRC) -type d

DIST = ./dist
DIST_JS := $(patsubst $(SRC)/%, $(DIST)/%, $(SRC_JS))
DIST_DIRS := $(patsubst $(SRC)/%, $(DIST)/%, $(SRC_DIRS))

.PHONY: default clean files all

default: files start

files: $(DIST_DIRS) $(DIST_JS)

$(DIST_DIRS):
	mkdir -p $@

$(DIST_JS): $(DIST)/%.js: $(SRC)/%.js
	yarn babel $< --out-file $@

all:
	yarn babel ./src --out-dir ./dist

start:
	node $(DIST)

clean:
	rm -rf $(DIST)
