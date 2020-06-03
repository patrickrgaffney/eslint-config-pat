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
