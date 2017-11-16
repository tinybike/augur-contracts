#!/bin/bash

npx dotsunited-merge-json addresses.json $SOURCE/addresses.json | npx jq.node --color=false --json > ./updated.json
mv updated.json addresses.json

cat $SOURCE/contracts.json | npx jqn --color=false -j "at('contracts') | map(values) | flatten | map(mapValues(get('abi'))) | reduce(merge, {})" > ./abi.json

if [[ "$SKIP_COMMIT" == "true" ]]; then
  echo "Files updated, commit and push manually"
else
  git add addresses.json abi.json
  git commit -m "Auto-updating from push to augur-core#${BRANCH} (${COMMIT})"

  case $BRANCH in
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
fi
