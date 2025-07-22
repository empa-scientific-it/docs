---
title: iPad instructions
---

## Set up at Empa
iPads (or tablets) at Empa are managed as **_bring your own device_** because there is not yet an ICT service available for them at Empa. 
This means there is no integration into the Empa network and no login via Empa credentials or Mobile Device Management available. 
There are workarounds available and if you haven't been an iPad user yet, the following instructions will help you.

If you do not have an ipad in your lab please contact us via [e-mail](mailto:openbis-support@empa.ch) and we will help with information about:

- Payment is done via lab budget.
- Ordering goes via ICT form, this helps with security measures and more services in the future.
- ICT delivers the ipads.

If you have more inputs for apps or workarounds which we do not mention in the instructions, please share them with us via [e-mail](mailto:openbis-support@empa.ch).

## iPad versions

At present the followoing ipad versions are known to be in usage at Empa labs:

- [iPad Air (4th Generation)](https://support.apple.com/kb/SP828?viewlocale=en_US&locale=de_DE)
  - Released September 2020
  - Supports [Apple Pencil 2nd generation](https://support.apple.com/kb/SP786?viewlocale=en_US&locale=de_CH)
  - Colored space grey with a black cover
- [iPad (10th Generation)](https://www.apple.com/ipad-10.9/specs/)
  - Released October 2022
  - Supports [Apple Pencil 1st generation](https://support.apple.com/kb/SP740?viewlocale=en_US&locale=de_CH)
  - Blue iPad with a blue cover
  
![Currently Two iPads available](src/assets/openBIS/Bild/iPads_Overview.png)

## Starting information

1. Check figure 1 below to know **how to turn the ipad on**, **how to exit sleep mode**, **find the control center** and more.

   ![Short Manual on how to operate the iPad](src/assets/openBIS/Bild/homescreen3.png)

1. If you need a **keyboard or screen foils**, you can check the internet for options. This will be the lab's responsibility.

1. **Create shortcuts** from webpages on the home screen for easy access, check figure 3 below: Shortcuts for [openBIS ELN UI of your lab](/documentation/openbis/pages_for_labs/); the Empa Outlook webapp; Polybox; etc. 

  ![Some Explanation on the homescreem](src/assets/openBIS/Bild/Homescreen_Overview.png)

1. **Clean up the homescreen** by clicking on the homescreen until the icons wiggle and then uninstall the apps you dislike.
1. Don't forget to [keep your ipad updated](https://support.apple.com/en-us/HT204204) to the latest version. This is important for security.

## Internet configuration

### Set up Wi-Fi

1. **Go to the settings** [view figure 3, point 1](#starting-information) to access Wi-Fi settings.
1. **Create a Wi-Fi login** depending on the number of ipad users:
   - **Single user**: Use your empa credentials to log in (_firstname.surname @ empa.ch_) with
     - Eduroam login: keeps you always logged in
     - Ee-guest login: You have only timely limited access
   - **Multi-user**: You can sponsor a guest account, view instructions [here](https://www.empa.ch/group/s604/neues-wlan?inheritRedirect=true). 
     - Use Guest type "x\_Date\_from\_date" to have up to 365 days of usage.
     - If you use ee-guest login, you have to log in from time to time. You can use the already installed app Notes and change the widget to a larger view, the notes are then displayed [view figure 3, point 3](#starting-information)

![How it looks to sponsor a guest account from empa](src/assets/openBIS/Bild/Sponsoring_Guest_account.png)

### Set up internet browser
To have easy access to webpages, create a [shortcut on the Homescreen](https://www.macrumors.com/how-to/add-a-web-link-to-home-screen-iphone-ipad/), view also [view figure 3, point 2](#starting-information).

If you work with several people, you might want to use a browser, or a setting, that doesn't remember logins, or keeps a history for safety reasons. There are the following options:

-  Use the browser [safari in private mode](https://support.apple.com/en-il/guide/ipad/ipad8ea0fc1a/ipados)
-  Use a browser like [duckduckgo](https://apps.apple.com/us/app/id663592361). This browser provides an easy delete function and it can be set to delete everything (clear cookies, empty cache, log out) after some idle time. 


## Apps and features
If you want to download apps, you have to create an **[Apple ID](https://www.macrumors.com/guide/apple-id/)**.

- **Speech to text**, you can [dictate your notes](https://support.apple.com/en-in/HT208343), but this has to be [enabled:](https://support.apple.com/de-ch/guide/iphone/iph2c0651d2/ios) You go to Settings \> Keyboards \> Enable dictation. Languages can be changed at the same place.
- **To share data for collaboration** use existing cloud services in ETH Domain like [Polybox](https://www.empa.ch/group/s601/polybox) from ETHZ or [Switch Drive](https://www.empa.ch/group/s601/switchdrive) which is supported by Empa.
- **For scribbling and sketching like on paper**, use apps like [notes writer](https://apps.apple.com/de/app/notes-writer-notizen-pdf/id1423643723) that can secure access to your notes with passwords. Famous note taking apps for apple are also [notability](https://apps.apple.com/ch/app/notability/id360593530) or [goodnotes](https://apps.apple.com/ch/app/goodnotes-5/id1444383602).
- **For flow charts**, use apps like that: [Diagramm notepad 3](https://apps.apple.com/ch/app/diagramme-notepad-3/id1387425355).
- **For image editing**, use apps like [Affinity](https://affinity.serif.com/de/photo/ipad/) or [Pixelmator](https://www.pixelmator.com/pro/).
- **With the front and back camera on the ipad**, you can take pictures and add them to your notes or attend video conferences.
- **Use spreadsheet editors** like [Collabora Office](https://www.collaboraoffice.com/solutions/collabora-office-android-ios/) or directly work in Polybox, which is also using Collabora.


## openBIS usage with ipad

- Use the **apple pencil** to 
  - fill out the textboxes with handwriting
  - use the iPad like a paper notebook, where you can scribbling, sketching, mind mapping, brainstorming. Afterwards, you can upload these files as [attachment to your experiments](/documentation/openbis/empa-specific/data_upload) in openBIS and they won't get lost.
- Take pictures with **ipad camera** (e.g. comes in very handy with the notes on your fume hood)
  - directly in openBIS via the [data type _Multiline Varchar_](https://openbis.readthedocs.io/en/latest/uncategorized/register-master-data-via-the-admin-interface.html#data-types-available-in-openbis).
  - upload them to openBIS as [attachment](/documentation/openbis/empa-specific/data_upload).
- Use a **spreadsheet editor like [Collabora Office](https://www.collaboraoffice.com/solutions/collabora-office-android-ios/)** to make calculations like in Excel or to update tables in openBIS (e.g. collections) via XLS Batch [register](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/inventory-of-materials-and-methods.html#batch-register-entries-in-several-collections/) or [update](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/inventory-of-materials-and-methods.html#batch-update-entries-in-a-collection).
- You can [scan barcodes/QR from mobile devices like ipads](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/barcodes.html#scan-barcodes-from-mobile-devices) and manage and track your chemical or material inventory online. Check our documentation about [label printers for bar-/QR-codes](/documentation/openbis/how-to-and-use-cases/label_printer/).
