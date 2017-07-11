# Azure Functions Proxies Sample

This sample demonstrates a simple single page application that is hosted on Azure Storage. The site returns a different Azure Functions logo whenever the site is refreshed. The SPA calls APIs that are served from Azure Functions. Proxies are used to route the site root to the SPA and also provide access to the `GetFunctionLogo` function.

## Setup steps 

1. Create a new public container in an Azure Storage account. Copy the files in the [ContentFiles](ContentFiles) folder to this container. 

1. Add a CORS setting for your storage account:
    - Add a CORS rule for your storage account domain name
    - OR delete all CORS rules in the Function App, and add a rule for `*`. 

1. Deploy to Azure

    [![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://portal.azure.com/#create/Microsoft.Template/uri/)

   - For the `storageUrlAndContainer` parameter, use the path to your storage account, including the container name, such as `https://accountname.blob.core.windows.net/ContentFiles`.
   - For `repoUrl`, use the path to your fork of the sample.

Navigate to the root of your Function App (https://yourappname.azurewebsites.net/), and you will see the HTML page that is hosted on Azure Storage.
