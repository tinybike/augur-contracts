#!/bin/bash

# extended pattern matching
shopt -s extglob

if [[ "${SOURCE}x" == "x" ]]; then
  echo "SOURCE environment variable required with path to augur-core/output/contracts"
  exit 1
fi

npx dotsunited-merge-json addresses.json $SOURCE/addresses.json | npx jq.node --color=false --json > ./updated.json
[[ $? == 0 ]] || exit 1

mv updated.json addresses.json

cat $SOURCE/contracts.json | npx jqn --color=false -j "at('contracts') | map(values) | flatten | map(mapValues(get('abi'))) | reduce(merge, {})" > ./abi.json
[[ $? == 0 ]] || exit 1

if [[ "$AUTOCOMMIT" == "true" ]]; then
  git add addresses.json abi.json
  git commit -m "Auto-updating from push to augur-core#${BRANCH} (${COMMIT})"

  case $BRANCH in
    master | v+([0-9]).+([0-9]).+([0-9])?(-+([0-9])))
      # Commit on a tag, this will do all the work of commiting and pushing
      # a new release
      echo "Update master of augur-contracts, and publishing new NPM version"
      npm version --force prerelease
      git push && git push --tags && npm publish --tag dev
      ;;
    develop)
      echo "Updating develop branch of augur-contracts with force push"
      git checkout -B $BRANCH origin/$BRANCH
      git push --force-with-lease
      ;;
    *)
      echo "Making new branch (augur-core/${BRANCH}) on augur-contracts to match ${BRANCH}"
      git checkout -B augur-core/$BRANCH
      git push origin augur-core/$BRANCH --force-with-lease
      ;;
  esac
else
  echo "Files updated, commit and push manually"
fi
