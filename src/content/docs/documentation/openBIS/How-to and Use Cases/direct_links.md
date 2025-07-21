---
title: Creating direct links to page
---

## Motivation
Sometimes, you want to create a direct link to a specific openBIS page for users to easily access a feature.
Normally, if the users click on that link, they would be first directed to the login page, which could prove confusing for beginners.

In this  step-by-step guide, we show how to generate a link to a specific page which directly sends users to the AAI SSO page and doesn't display the initial login screen.

## Steps
The steps to follow are documented here:

### Use the link creator from Switch

To generate the correct link with redirection to the SSO page, you can use this [tool](https://help.switch.ch/aai/guides/discovery/login-link-composer/) from Switch.

### Find the correct URLs

The tool requires three inputs:

1. **Service Provider Session Initiator Handler URL**: this is the link to the login page of the openBIS instance you want to connect to.
For the test server, this is `https://openbis-empa-test.ethz.ch/Shibboleth.sso/Login`.
For another instance, replace `<placeholder`> in `https://<placeholder>.ethz.ch/Shibboleth.sso/Login` with your instance URL.

1. **Service Provider Target URL**: this is the URL of the page you want to be displayed to the users.
In our case, we want the users to go to `{% raw %} https://openbis-empa-test.ethz.ch/openbis/webapp/eln-lims/?menuUniqueId={%22type%22:%22SPACE%22,%22id%22:%22PUBLICATIONS%22}&viewName=showSpacePage&viewData=%22PUBLICATIONS%22 {% endraw %}` which is the openBIS ELN-LIMS page for the `PUBLICATIONS` space.

1. **Identity Provider entityID**: the URL to the identity provider used to authenticate users into openbis.
For empa, this is **always**: `https://aai.empa.ch/idp/shibboleth`

### Generate the link

Once you entered all three inputs, you can press the `Compose login link` button.
This will generate the link in the form underneath the button.

By pressing on the **access** link under **Test link** you can try the link in your browser.



