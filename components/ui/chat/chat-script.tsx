import Script from "next/script";

const ChatScript = () => <Script 
id="crisp"
strategy="lazyOnload"
>
{`window.$crisp=[];window.CRISP_WEBSITE_ID="bb64e0e3-2be0-4cd5-b626-67f4285361fa";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
</Script>

export default ChatScript