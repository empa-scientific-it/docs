---
title: Introduction
---

This section contains advice and information about programming applications connecting or using openBIS. It is mostly a collection of reference material and code snippets that could prove useful in your development work.

## Internal gitlab group

We maintain a [gitlab group](https://gitlab.empa.ch/openbis-tools) with various tools for openBIS. Please check it out, you might find a project covering your needs or at least inspiration for your own project. If you want to contribute with your project, please feel free to add your project there.

## Test instances

If you need a test instance to develop software for openBIS, we recommend to use [Docker](https://www.docker.com/). See the guide [here](docker.md) on how to get started.

If you have an empty test instance and would like to set it up programmatically, check out our [instance-io](https://gitlab.empa.ch/openbis-tools/instance-io) project on gitlab.

## Dynamic properties

### What are dynamic properties

OpenBIS offers the [dynamic property](https://openbis.readthedocs.io/en/latest/user-documentation/general-admin-users/properties-handled-by-scripts.html#dynamic-properties) function, these are object (or collection) properties that are computed from other properties using a jython or a java function.

### Computation model

Dynamic properties are computed whenever other properties of an object are updated. The computation happens asynchronously, so if there is a high load on the openBIS instance it might take a while until the new value is calculated. There are some other pitfalls regarding the computation of properties, as mentioned by Juan Fuentes, the head developer of openBIS:

>Dynamic properties are stored on the database as values so they don't need to get re-evaluated every time.
All dynamic properties of an object are 'scheduled' to be re-evaluated after any property of the object gets updated.
So if you update 1000 samples using a batch, all these get 'scheduled' and eventually will show correct values, but this is far from immediate.
If you update a single sample when the system is IDLE it may look instant because it gets updated the next second, but this can take minutes or hours depending how BUSY the system is.
Another thing to take in count is that updating the properties of a children object DOES NOT schedule the update of the parent automatically.


If you want properties of parents to be updated at every calculation, you can check this [repository](https://gitlab.empa.ch/openbis-tools/abt207-dynamic-properties).

A more robust alternative is to ask the instance owner (ETH SIS) to setup a [maintenance task](https://openbis.readthedocs.io/en/latest/system-admin-documentation/advanced-features/maintenance-tasks.html#MaintenanceTasks-DynamicPropertyEvaluationMaintenanceTask) on your instance called `DynamicPropertyEvaluationMaintenanceTask`. The task  will run at regular intervals and update the values of all dynamic properties. 

### Special cases

Here we list some specific example of how dynamic properties were used at Empa to solve problems in the labs.

#### Spreadsheet Widget

If you need to handle properties associated with the spreadsheet ELN widget, check our documentation [page](../property_spreadsheet.md).

#### Clickable email link

If you want to have an email address appearing as a clickable `mailto:` url, check our documentation [page](../property_email.md).
