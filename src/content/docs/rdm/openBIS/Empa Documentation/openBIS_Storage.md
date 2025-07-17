---
title: openBIS Storage
---

There are different types of Storgage in openBIS.
The overall data storage can be seen under Utilities, Other Tools, Show available storage space.

This shows two different paths:

* /data/id_sis_rp_openbis_empa: Active Storage on openBIs
* /data/id-sis-rp-empa-openbis-scratch: Scratch storage

![Overview of Storage](src/assets/openBIS/Bild/Overall-Storage.png)

## Active Storage on openBIS
Active openBIS storage is the same for all instances at Empa.
This storage is intended for active data, i.e. data from ongoing projects.
Currently, there is 8.0 TB of available storage for all Empa.
This could be increased if needed, but please note that storage is charged.
Once a project or similar has been completed, the datasets must be archived in order to free up space.

## Long term Storage on Tape
There are different ways on how to archive Datasets ([archiving datasets](https://openbis.readthedocs.io/en/latest/system-documentation/configuration/archiving-datasets.html#eln-lims) or [Empas archiving datasettype](../2_Empa_Documentation/archive.md)).
Datasets in openBIS can be archived from the ELN interface.
The data that is archived will be stored on tape on ETH and will no longer add to the active storage in openBIS.


>More information will follow soon:
> - How long will it be stored on tape
> - How expensive is storage, resp. what's the limit
> - What backup policy is followed
> - How long does it take to retrieve the data


## Scratch openBIS
When data is retrieved from the archive, it is added to the scratch storage.
Currently, 50 TB is available to all Empa users.
Once the data has been retrieved, it will be added to the scratch folder.
If the scratch folder is full, the oldest datasets will be deleted.
Archived data will remain on tape, even after it has been retrieved.

## Storage Size and Status of Datasets
Datasets can either be attached to Collections/Default Experiments or to Objects.
(Via [ELN interface](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/data-upload.html#data-upload-via-web-ui) or via [Empa-Dropbox mechanism](../2_Empa_Documentation/Data_Upload/uploading_large_data.md))
To check the Datasets, the respecting openBIS-entity needs to be opened and when scrolled further down, there will be the section for Datasets.
In the displayed table, all the information is available, like the archive status and the size.
![Overview of Datasets](src/assets/openBIS/Bild/DataSet_Attached_OpenBIS.png)

!!! note
    If you attach a dataset to a collection and the collection is using the "List View" you will not see the attached dataset.
    The dataset will only show, if `Edit` is clicked, it will change to the "Form View" and more information is available. Documentation see here: [List vs Form View in Collections](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/inventory-of-materials-and-methods.html#customise-collection-view).
    
