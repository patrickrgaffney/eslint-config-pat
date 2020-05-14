#!/usr/bin/env bash

#
# USAGE: sh test.sh
#
# Run some chicken tests against each config
# to ensure they're working properly.
#

# List of peer dependencies from package.json in the
# following format: "package-name@semver".
DEPS=$(jq -rc '.peerDependencies | to_entries | map("\(.key)@\(.value|tostring|split(">=")|last)")|.[]' < package.json)

echo "Installing eslint dependencies"
# shellcheck disable=SC2086
npm i --no-save $DEPS &>/dev/null

# Run a test for each directory in tests/*.
for test in tests/*; do
  name=$(basename "$test")
  echo "Running \"$name\" test"

  if ! ./node_modules/.bin/eslint "$test"/*; then
    echo "Failed to lint using \"$name\" config"
    exit 1
  else
    echo "✅ \"$name\" config"
  fi
done

echo "All configs used successfully"

# # "pat" config
# if ! eslint --fix tests/js/pat.js; then
#   echo "Failed to lint using the 'pat' config"
#   exit 1
# fi

# # "pat/node" config
# if ! eslint --fix tests/node/pat_node.js; then
#   echo "Failed to lint using the 'pat/node' config"
#   exit 1
# fi

# # "pat/react" config
# if ! eslint --fix tests/react/pat_react.js; then
#   echo "Failed to lint using the 'pat/react' config"
#   exit 1
# fi

# # "pat/mocha" config
# if ! eslint --fix tests/mocha/pat_mocha.js; then
#   echo "Failed to lint using the 'pat/mocha' config"
#   exit 1
# fi

# echo "All configs used successfully"
