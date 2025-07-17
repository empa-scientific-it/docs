---
title: Data upload to openBIS
---

OpenBIS offers multiple options to upload data:

1. **Via the ELN web UI for data files < 10 GB**: ETH Documentation can be found [here](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/data-upload.html#data-upload-via-web-ui).
2. **Via the default _eln-lims-dropbox_ mechanism for data files > 10 GB**: Check our Empa internal documentation [here](./uploading_large_data.md), which is different to the ETH documentation, because at Empa the so called _eln-lims-dropbox folder_ is located on special lab folders on the `N:`drive.
3. **Via python script to the session workspace**: Data can be uploaded through a REST endpoint to be later used for creation of datasets or ELN entries. Check our Empa Gitlab repository where we prepared an example of this process [on our GitLab](https://gitlab.empa.ch/openbis-tools/upload-to-eln-workspace).
4. **Via custom dropbox plugins**: You can develop a custom plugin that processes the data uploaded through the `N:` drive and automatically creates openBIS entities (spaces, projects, objects and datasets) once the data is on the openBIS server. For information on this option, check the specific [page](dropbox.md). This option is particularly interesting for automated upload  of experimental data that is generated periodically and should be uploaded with a consistent metadata structure.
