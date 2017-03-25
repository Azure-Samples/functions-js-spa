module.exports = function (context, req) {

    const logoUrlFunctions = process.env.FUNCTIONS_LOGO_URL;
    const logoUrlServerless = process.env.SERVERLESS_LOGO_URL;

    const imageId = Math.floor(Math.random() * 3);
    context.log(imageId);

    var imageResult = `<pre>
<font face="consolas" color="#4674B5">             <font color="#FFFF00">%%%</font><font color="#FFC000">%%%</font>         <br>            <font color="#FFFF00">%%%</font><font color="#FFC000">%%%</font>          <br>       @   <font color="#FFFF00">%%%</font><font color="#FFC000">%%%</font>    @      <br>     @@   <font color="#FFFF00">%%%</font><font color="#FFC000">%%%</font>      @@    <br>  @@@    <font color="#FFFF00">%%%</font><font color="#FFC000">%%%%%%%%</font>    @@@ <br>@@      <font color="#FFFF00">%%%%%%%</font><font color="#FFC000">%%%</font>        @@<br>  @@         <font color="#FFFF00">%</font><font color="#FFC000">%%%</font>       @@  <br>    @@      <font color="#FFFF00">%</font><font color="#FFC000">%%</font>       @@    <br>      @@    <font color="#FFFF00">%</font><font color="#FFC000">%</font>      @@      <br>           <font color="#FFFF00">%</font><font color="#FFC000">%</font>               <br>           <font color="#FFC000">%               </font> 
</font></pre>`;

    if (imageId == 1) {
        imageResult = `<img width="250px" src="${logoUrlFunctions}"></img>`;
    }
    else if (imageId == 2) {
        imageResult = `<img width="400px" src="${logoUrlServerless}"></img>`;
    }

    res = {
        headers: {
            "Content-Type": "text/html"
        },
        body: imageResult
    };

    context.done(null, res);
};