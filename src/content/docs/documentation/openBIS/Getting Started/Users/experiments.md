---
title: Working with experiments
---

## OpenBIS the ELN-LIMS

As a user working with experiments, you will be most likely working with the Lab Notebook section and using the inventory to reference sample and protocols/SOP's.

## Workflow for laboratory experiments

A typical workflow from an experimentalist may be divided into the following steps:

* Acquisition of information
* Planning of experiments - formulation of hypothesis
* Preparing for experiments and lab work
* Analysis of products from experimental work
* Analysis and interpretation of data derived from analysis of products and processes
* Publishing and Archiving

### Before the actual experimental work

Two [Object types](https://openbis.readthedocs.io/en/latest/user-documentation/general-admin-users/admins-documentation/new-entity-type-registration.html) are present in every openBIS instance.
They are called [Experimental Step and Entry](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/lab-notebook.html#register-experimental-steps).
The Entry type looks like a Word document and has similar features.
Copy paste from word files in to an Entry does work, as long as it doesn't contain pictures.
[Embed images](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/lab-notebook.html#embed-images-in-text-fields) using drag and drop, or the insert image feature from the text editor.

As an example, you could create a [Collection or Default Experiment](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/lab-notebook.html#register-experiments) to register a group of entries with different hypothesis and links to papers etc.
To test this hypothesis, you create experimental series for hypothesis testing.
You can link the corresponding Entry with [parent-children relationships](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/lab-notebook.html#add-parents-and-children-to-experimental-steps) to the associated experiments and later you will be able to trace back the reasons of the lab work.

### Working with protocols and templates to prepare for experimental work

[Protocols](https://openbis.readthedocs.io/en/latest/user-documentation/advance-features/openbis-data-modelling.html#protocols) are used as a general term to describe a workflow that always stays the same within some experimental series, e.g. Standard Operation Protocol (SOP), Method.
OpenBIS Protocols are connected to the Experimental Steps via [Parent-Child relations](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/lab-notebook.html#add-parents-and-children-to-experimental-steps).
[Templates](https://openbis.readthedocs.io/en/latest/user-documentation/general-admin-users/admins-documentation/create-templates-for-objects.html) help to prefill Experimental Steps with values that stay always the same throughout a series of experiments.

Protocols and templates have to be prepared before the Experimental work.
Protocols need [enabling in the settings](https://openbis.readthedocs.io/en/latest/user-documentation/general-admin-users/admins-documentation/customise-inventory-of-protocols.html#enable-protocols-in-settings).
Templates are registered directly in the settings, therefore this has to be done by an Admin.
Otherwise, the instance admin should give to a user the Admin role for the space settings - see [openBIS roles](https://openbis.readthedocs.io/en/latest/user-documentation/general-admin-users/admins-documentation/user-registration.html#openbis-roles) for help.
Once the protocols and/or templates are prepared, experimental information needed for the practical work can be filled out.

### Experimental work

Working with a [Electronic Lab Notebook (ELN)](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/lab-notebook.html) is very similar to working with a paper notebook.
In the case of a paper notebook, the values to be used for an experiment would also be written down first, along with the chemicals/apparatus/methods etc. to be used.
The same is prepared for an ELN, simply on the PC, with the help of protocols and templates.
Then, when working in the lab, the actual values are added and experimental observations are listed.

It's possible to work with openBIS on tablets and iPads.
[Scientific IT](../../../../index.md) distributed already several of them amongst Empa labs and [provided a short starting guide](../../3_Use_Cases_of_labs/ipads.md).
If you are interested to get an iPad, contact your instance admin or contact us via [email](mailto:openbis-support@empa.ch).

### Analyzing data stored in openBIS

Two [tools for data analysis](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/tools-for-analysis-of-data-stored-in-openbis.html) are available in openBIS:
- [Jupyter](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/tools-for-analysis-of-data-stored-in-openbis.html#jupyter-notebooks) is directly implemented in openBIS and can be operated from the ELN UI.
- To access the data with [MATLAB](https://sissource.ethz.ch/hluetcke/matlab-openbis), it has to be locally installed on your device but it's available from the [DSM Software shop](https://www.empa.ch/group/s601/scientific-applications?inheritRedirect=true) which is available on every Empa computer.

Furthermore, it's possible to download all data from openBIS for external processing.
Data and metadata can be [exported](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/data-export.html#export-to-file/).
You can export the tables in openBIS by clicking on the button above of the table called `Export`.
You can [browse entries by type](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/additional-functionalities.html#browse-entries-by-type) and export them by using the export button at the top of the table.
Individual data files [attached](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/data-upload.html#data-upload-via-web-ui) to objects or collections are downloaded directly when clicked.

### Data evaluation and interpretation

There are different features in openBIS to display the data that is recorded.
Most of them are listed [here](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/additional-functionalities.html):

* Check out Parent-Child Relations from your objects using the [hierarchy graph](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/additional-functionalities.html#visualise-relationships).
* Display your data in the [table](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/additional-functionalities.html#tables) using different filters and search options.
* Group together objects from different sources in one table by using [advanced search options](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/search.html#advanced-search).
* Use the [MATLAB toolbox](https://sissource.ethz.ch/hluetcke/matlab-openbis) or [Jupyter](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/tools-for-analysis-of-data-stored-in-openbis.html#jupyter-notebooks).
* For external processing, use [Export data to file](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/data-export.html#export-to-file) to export all the metadata and/or data from objects, or use the export function that can be found on the top of every [table](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/additional-functionalities.html#tables), choosing only the relevant information.
* Use [pyBIS](https://pypi.org/project/PyBIS/) to interact with openBIS.

### Publishing and archiving

OpenBIS offers the function to directly [export to zenodo](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/data-export.html#export-to-zenodo).
Zenodo is a [FAIR](https://about.zenodo.org/principles/) repository accepted by funding agencies to publish research data.
Read more about Zenodo [here](https://about.zenodo.org/).

Another nice feature of openBIS is the simple [archiving feature](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/data-archiving.html).
Data can be easily stored, but also retrieved just with a click of the mouse.
It only takes a few hours until the data is available again.
