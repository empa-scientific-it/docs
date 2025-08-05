---
title: CSCS Updates
---

## 16 Jan 2025

From [CSCS News feed](https://user.cscs.ch/news/):

> As previously announced to Piz Daint users mailing list, Piz Daint (Cray XC) compute nodes have been reserved at midnight of January 15, to prevent jobs from running. Access to the login nodes of the Cray XC will remain available until January 31, to provide users with a final opportunity to copy relevant and necessary data from the Home and Scratch filesystems. The access to the login nodes of the Cray XC will be closed on January 31 (EOB).

## 1 Jul 2024

CSCS is currently working hard to migrate their hardware, which will soon affect us. Please begin preparing for this transition.

Currently, we utilize two main resources: the `mc` and `hybrid` partitions on the Piz Daint supercomputer.
These resources will be phased out by the end of Q3 2024. Unfortunately, CSCS has not provided exact dates, as this largely depends on the deployment of new resources.

We need to be ready to migrate our software to the new machines: Eiger (replacing Daint multi-core) and Alps (replacing Daint hybrid). Please check the pricing on the [following web page](https://2go.cscs.ch/offering/swiss_academia/institutional_customers/).

### Regarding the Migration

The migration to Eiger can happen immediately, provided the machine is operational.
We have agreed with CSCS that each project will receive _200 node hours for free_.
Please use these resources to test your software.
The migration to Alps will take a little longer.
However, once the nodes become available, we will also receive some free hours to test the software.
We aim to complete the migration by the end of Q3 2024 (end of September).

### What does this mean in practice?

If you are ready to migrate your mc partition to Eiger, please [let us know](mailto:compute@empa.ch), and we will take the necessary steps.
Otherwise, please use the free 200 node hours to test your software and inform us as soon as you are ready.
As soon as Alps is available, we will notify you so you can proceed with that transition as well.
