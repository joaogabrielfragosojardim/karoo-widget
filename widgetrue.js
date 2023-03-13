(function () {
    var div_completo = document.createElement('div');
    div_completo.setAttribute("id", "div-completo");
    document.documentElement.appendChild(div_completo);

    var div_complete = document.getElementById("div-completo");

    var div_iframe = document.createElement('div');
    div_iframe.setAttribute("id", "div-frame");

    div_complete.appendChild(div_iframe);
    var div_frame = document.getElementById("div-frame");

    var iframe_element = document.createElement('iframe');
    iframe_element.setAttribute("id", "iframe-temp");
    iframe_element.setAttribute("frameBorder", "0");
    iframe_element.setAttribute("allowTransparency", "false");
    iframe_element.setAttribute("scrolling", "no");
    iframe_element.setAttribute("style", "display: block; position: fixed; right: 15px; bottom: 15px; width: 400px; height: 600px; z-index: 99; border-radius: 8px; pointer-events: none")

    var host_name = _kwp.host + "?account=" + _kwp.conta + (_kwp.color ? ("&color=" + _kwp.color) : '')
    iframe_element.setAttribute("src", host_name)
    var screenHeight = window.screen.height;
    div_frame.appendChild(iframe_element);
    document.body.append(div_completo);
    window.addEventListener("message", (event) => {
        // Normally you would check event.origin
        // To verify the targetOrigin matches
        // this window's domain
        // event.data contains the message sent
        if (event.origin == "https://widget.karoo.com.br" || event.origin == "http://localhost:3000" || event.origin == "https://widget-karoo-qa.alterdatasoftware.com.br") {
            if (!event.data.open) {
                iframe_element.setAttribute("width", "58px")
                iframe_element.setAttribute("height", "56px")
                iframe_element.setAttribute("bottom", "15px")
                iframe_element.setAttribute("right", "15px")
            } else {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    iframe_element.setAttribute("width", "100vw")
                    iframe_element.setAttribute("height", "100vh")
                    iframe_element.setAttribute("bottom", "0")
                    iframe_element.setAttribute("right", "0")
                    iframe_element.setAttribute("borderRadius", "0px")

                } else {
                    iframe_element.width = "450px"
                    iframe_element.height = screenHeight > 768 ? "80%" : "90%"
                    iframe_element.maxHeight = "600px"
                }
            }
        } else {
            return;
        }


    });

})();
