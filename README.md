# Azure Functions Proxies Sample

## Setup steps 

1. Create a new public container in an Azure Storage account. Copy the files in the [ContentFiles](ContentFiles) folder to this container. 
1. Publish the code in GetFunctionLogo to your Function App. You can use GitHub continuous integration or publish from the [Azure Functions CLI](https://www.npmjs.com/package/azure-functions-cli) via `func azure functionapp publish <AppName>`.
1. Add a CORS setting for your storage account:
    - Add a CORS rule for your storage account domain name
    - OR delete all CORS rules in the Function App, and add a rule for `*`. 
1. Create a new proxy with route `/logo` and URL of the function `GetFunctionLogo` (including the `code` query parameter).
1. Add app settings for `FUNCTIONS_LOGO_URL` and `SERVERLESS_LOGO_URL` to point to the storage URL for `azure-functions-logo-smaller.png` and `azure-serverless.png`. The URL will be similar to `https://accountname.blob.core.windows.net/public/azure-functions-logo-smaller.png`.
1. Create a new proxy with route `/` and URL of the file `functions-rock-even-more.html` in your storage account. It will look something like `https://accountname.blob.core.windows.net/public/functions-rock-even-more.html`.
1. Navigate to the root of your Function App (https://yourappname.azurewebsites.net), and you will see the HTML page that is hosted on Azure Storage.
