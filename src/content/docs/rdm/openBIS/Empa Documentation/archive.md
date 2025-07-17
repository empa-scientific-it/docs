---
title: Archive dataset type
---

## What is the new dataset type for?

Since September 2024, openBIS instances at Empa offer a new [dataset type](https://openbis.readthedocs.io/en/20.10.x/user-documentation/general-users/data-upload.html#data-upload-via-web-ui) *archive*.
The archive dataset type implements a direct archiving policy: any data uploaded as dataset with the *archive* type will be directly [archived](https://openbis.readthedocs.io/en/20.10.x/user-documentation/general-users/data-archiving.html) instead of being stored on the DSS (data store server) storage of openBIS. This means that datasets of the type *archive* cannot be directly accessed from the ELN UI anymore but must be [unarchived](https://openbis.readthedocs.io/en/20.10.x/user-documentation/general-users/data-archiving.html#dataset-unarchiving) first. This dataset type can be used for large data that does not need to be readily available and needs to be directly stored on the Strongbox at ETH.


## Important to know

As for the regular archiving feature in openBIS, the minimum data bundle size for archival is 10 GB. If you try to archive a smaller dataset, it will be queued for archival but **only stored** when more datasets in the same space or project or collection/experiment are selected for archival, either through the choice of the *archive* dataset type or through a manual [archiving request](https://openbis.readthedocs.io/en/20.10.x/user-documentation/general-users/data-archiving.html#dataset-archiving-helper-tool) through the archive helper in the ELN UI.

## When to use archive type

Use the *archive* dataset type for any dataset that needs long-term archival but does not need to be readily available.
