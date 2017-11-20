#!/bin/bash

# extended pattern matching
shopt -s extglob

if [[ "${SOURCE}x" == "x" ]]; then
  echo "SOURCE environment variable required with path to augur-core/output/contracts"
  exit 1
fi

npx dotsunited-merge-json addresses.json $SOURCE/addresses.json | npx jq.node --color=false --json > ./updated.json
[[ $? == 0 ]] || exit $?

mv updated.json addresses.json

cat $SOURCE/contracts.json | npx jqn --color=false -j "at('contracts') | map(values) | flatten | map(mapValues(get('abi'))) | reduce(merge, {})" > ./abi.json
[[ $? == 0 ]] || exit $?

if [[ "$AUTOCOMMIT" == "true" ]]; then
  git add addresses.json abi.json
  git commit -m "Auto-updating from push to augur-core#${BRANCH} (${COMMIT})"

  case $BRANCH in
    v+([:digit:]).+([:digit:]).+([:digit:]))
      if [[ "$BRANCH" == "$TAG" ]]; then
        # Commit on a tag, this will do all the work of commiting and pushing
        # a new release
        echo "Update master of augur-contracts, and publishning new NPM version"
        git version patch
        git tag augur-core-$TAG # create a tag to match the augur-core tag
        git push && push --tags && npm publish
      fi
      ;;
    master)
      echo "Update master of augur-contracts, manual NPM release needed"
      git push
      ;;
    develop)
      echo "Updating develop branch of augur-contracts with force push"
      git checkout -b $BRANCH origin/$BRANCH
      git push --force-with-lease
      ;;
    *)
      echo "Making new branch (augur-core/${BRANCH} on augur-contracts to match ${BRANCH}"
      git checkout -b augur-core/$BRANCH
      git push origin augur-core/$BRANCH --force-with-lease
      ;;
  esac
else
  echo "Files updated, commit and push manually"
fi
