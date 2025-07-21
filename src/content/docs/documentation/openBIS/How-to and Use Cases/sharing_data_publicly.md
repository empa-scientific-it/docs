---
title: Sharing data publicly with openBIS
---

If you publish a paper and therefore also need to publish the corresponding research data publicly according to funding agencies (e.g. on [Zenodo](https://zenodo.org/)) and if you used openBIS for your research management, you have the option to put your openBIS data connected to the results in the paper on a public openBIS instance.

## What are the benefits of sharing in a public openBIS?

Usually you would just upload your research data to a public FAIR repository like Zenodo after finishing your research project, but this means that you loose the [data model](https://openbis.readthedocs.io/en/20.10.x/user-documentation/advance-features/openbis-data-modelling.html) structures and [hierarchy](https://openbis.readthedocs.io/en/20.10.x/user-documentation/general-users/additional-functionalities.html#visualise-relationships) connections that you built in openBIS. If you now [export](https://openbis.readthedocs.io/en/20.10.x/user-documentation/general-users/data-export.html) all the paper related research data from your lab openBIS and [import](https://openbis.readthedocs.io/en/20.10.x/user-documentation/general-admin-users/admins-documentation/import-openbis-exports.html) it to our public `data-repo` openBIS, you will be able to share a link to your data and its structure in this public openBIS and therefore allow people to browse through the structure and understand it better.

You can have a look at an example (at the moment still a test and blank) in this `data-repo` openBIS by accessing this [link](https://openbis-empa-data-repo.ethz.ch/openbis/webapp/eln-lims/?user=test_user&pass=password).

## How to set up your data in the public `data-repo` openBIS?

1. Contact us via [email](mailto:openbis-support@empa.ch) to get access rights to this `data-repo`openBIS by providing the following information:
   - Name(s) of the Empa person(s) connected to the paper who need to upload data to this `data-repo`openBIS
   - Name of your paper which will then become the [Space](https://openbis.readthedocs.io/en/20.10.x/user-documentation/general-admin-users/admins-documentation/space-management.html) name in openBIS
   - Send us a link to the data in your lab openBIS (just copy the webbrowser link when you open it in openBIS) that you would like to publish so we can set up a suited data model structure in the `data-repo`openBIS

2. We set up your access to the `data-repo`openBIS. 
   - What is done on our side: 
     - At the moment we need to set up an edu-id login for the Empa person to access the `data-repo`openBIS. For this we add the Empa person directly in the Admin interface using the Empa email as username and replacing @ with AT (this email must be entered as main email in edu-id). When created, give this Empa user the Admin role to the needed spaces of the paper and also the OBSERVER role for the ELN_SETTINGS Space which is needed if one is not instance admin.
     - We need to create the user related to the paper which is used in the openBIS link sharing, create a user based on file authentication, view [documentation](https://openbis.readthedocs.io/en/latest/user-documentation/general-admin-users/admins-documentation/user-registration.html) how. This means that default roles will be assigned to this user and we need to remove them from the admin UI, only leaving the OBSERVER role for the ELN_SETTINGS Space as this user should not change anything. In addition we need to add the OBSERVER role for the desired Spaces.

3. Now you can access the [ELN UI](https://openbis-empa-data-repo.ethz.ch/openbis/webapp/eln-lims/) and [Admin UI](https://openbis-empa-data-repo.ethz.ch/openbis/webapp/openbis-ng-ui/#/) of this `data-repo`openBIS
4. We will help you to [export](https://openbis.readthedocs.io/en/20.10.x/user-documentation/general-users/data-export.html) all paper related research data from your lab openBIS and [import](https://openbis.readthedocs.io/en/20.10.x/user-documentation/general-admin-users/admins-documentation/import-openbis-exports.html) it into the created Space(s) in the public `data-repo` openBIS
5. We will send you a link which you can use for sharing your data in the `data-repo` openBIS. **IMPORTANT:** You still need to publish your research results from the paper first in a FAIR data repository like [Zenodo](https://zenodo.org/) and only post a link there to the data in the `data-repo` openBIS. You cannot use the `data-repo` openBIS as FAIR data repository because it is not FAIR as it is not findable on the internet and you need a link to access it. 
   - For our internal information:
     - The link will look like `https://openbis-empa-data-repo.ethz.ch/openbis/webapp/eln-lims/?user=test_user&pass=password` where test_user is the user named after the paper and password is the password used when creating this user via file authentication in the ELN.

