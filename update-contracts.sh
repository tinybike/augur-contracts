#!/bin/bash

npx dotsunited-merge-json $1/addresses.json addresses.json > ./addresses.json
cat $1/contracts.json | npx jqn --color=false -j "at('contracts') | map(values) | flatten | map(mapValues(get('abi'))) | reduce(merge, {})" > ./abi.json

git add addresses.json abi.json
git commit -m "Auto-updating from push to augur-core#${BRANCH} (${COMMIT})"

case $BRANCH
  "master")
    echo "Update master of augur-contracts, manual NPM release needed"
    git push
    ;;
  "develop")
    echo "Updating develop branch of augur-contracts with force push"
    git checkout -b $BRANCH origin/$BRANCH
    git push --force-with-lease
    ;;
  *)
    echo "Making new branch on augur-contracts to match ${BRANCH}"
    git checkout -b core_branch_$BRANCH
    git push --force-with-lease
    ;;
esac
