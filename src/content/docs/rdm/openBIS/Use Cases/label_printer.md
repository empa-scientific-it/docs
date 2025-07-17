---
title: Inventory with printed QR-code labels
---

If you have a sample or chemical inventory in the lab, labeling the samples or chemicals with bar-/QR-codes and reading the labels with mobile devices (e.g. [ipads](./ipads.md), tablet or smartphone) helps managing the inventory. 
If you use an [ELN/LIMS like openBIS](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/general-overview.html) where you have a digital [inventory](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/inventory-of-materials-and-methods.html#), you can track and update your inventory easily online. 

The picture below shows how the samples or chemicals in the physical inventory are labeled with QR-codes, then scanned via [ipads](./ipads.md) and then the information about the inventory item is directly displayed via link in the ELN browser of openBIS.

![picture of openBIS digital inventory](src/assets/openBIS/Bild/openBIS_digital_inventory.png)

## How to digitalize your lab inventory

If you like to digitalize your inventory like in the picture above, you need to:

- label your inventory items with bar- or QR-codes, which requires a [label printer](#label-printers) and you need to [enable bardcodes in openBIS](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/barcodes.html#id1).
- [Scan your bar-/QR-code](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/barcodes.html#scan-barcodes-from-mobile-devices) with with a mobile device like an [ipad](./ipads.md), tablet or smartphone.

### Label printers
There are at the moment 2 versions of label printers in use:

1. **label printer from Brother (QL-820NWB)**. It is cheap at around 200 CHF and is suitable for the following purposes:
   - **labels don't have to last 10 years**
   - Only a few people work with the labels
   - It was easy to connect **without IT support**
   - a quick and inexpensive solution
1. **Label Printer from Zebra Technologies**. Two possible options are the [ZD621t 300 dpi USB, RS232, LAN, BT](https://www.brack.ch/zebra-technologies-etikettendrucker-zd621t-300-dpi-usb-1208057) for around 600 CHF or the [ZT231 300dpi TT/USB/RS-232/BT/LAN](https://www.brack.ch/zebra-technologies-etikettendrucker-zt231-300dpi-tt-usb-rs-232-bt-lan-1451808) for around 1'000 CHF (**relevant is the 300dpi**). Suitable for the following purposes:
   - Labels are available for a lot of applications e.g. Liq N2, Chemicals, Hard adhesive etc. Important for **possible preservation for more than 10 years** is the thermal transfer and that the film contains wax (Used in many professional laboratories e.g. medical, pharmaceutical research, shipping etc.)
   - **Professional programme called "NiceLabel" available** for creating label designs.
   - **Can be connected to the Empa network**. **ICT provides support** for the connection, i.e. printing from various PCs (official solution with service agreement with ICT)
   - Matthias Rösslein can provide support to set everything up, please contact him via [e-mail](mailto:matthias.roesslein@empa.ch).

## Benefit of digitalizing the lab inventory

You can store and manage information about chemicals, samples and instrument in openBIS [tables](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/additional-functionalities.html#tables) and upload [existing Excel tables into openBIS](../3_Use_Cases_of_labs/Table_Excel_into_openBIS.md). These are possible benefits:

- **higher sustainability and lower costs**, as the easy retrieval of laboratory inventory information prevents, for example, chemicals from being reordered, even though they are still available; 
- **time saving**, by enabling digital search of the inventories for, e.g., locating items, which should, in turn, simplify the labs logistics and maintenance; 
- **enhanced, accelerated and simplified material/instrument information retrieval** by the synergistic use of other tools integrated in the openBIS ecosystem, e.g., **[ipads](./ipads.md), QR-/bar-codes scanners and printers**. 

A chemial inventory table in openBIS, can contain information about:

- **location, linked to [openBIS' storage manager](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/managing-storage-of-samples.html)**, which helps managing the locations of any kind of inventory items 
- **links to webpages of the manufacturers/suppliers**, e.g., for ordering online or contacting the customer support service 
- **[e-mail links](./property_email.md)** to the Lab's responsible contact people
- **registration/modification dates**, of which you can look up the [history of changes](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/additional-functionalities.html#entity-history)

Example picture:
![Chemical inventory](src/assets/openBIS/Bild/Chemical_inventory.png)

