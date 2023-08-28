document.addEventListener('DOMContentLoaded', () => {
        const circleEye = document.querySelector('.eye-container svg');
        const menuItems = circleEye.querySelectorAll('.menu-item');
        const labelContainer = document.querySelector('#label-content-container');
        let width = window.innerWidth;
        
        const handleMouseEnter = (label) => {
            //let headline = document.querySelectorAll("[data-label='" + label + "']")[0].getAttribute("data-headline")
            circleEye.setAttribute('data-label', label);
            labelContainer.style = ""
            if(label == "osapiens-hub") {
                labelContainer.style = "top:20%;left:50%;bottom:auto;"
            }
            if(label == "csrd") {
                labelContainer.style = "top:40%;left:50%;bottom:auto;"
            }
            if(label == "..."){
                label = "upcoming"
            }
            
            labelContainer.innerHTML = "<img src='https://uploads-ssl.webflow.com/649ab92d7c6425f3fae9d205/" +  label + ".jpeg'>";
            labelContainer.style.opacity = 1;
           
        };

        const handleMouseLeave = () => {
            circleEye.removeAttribute('data-label');
            labelContainer.innerHTML = '';
            labelContainer.style.opacity = 0;
        };
        
        const handleClick = (URL)=>{
                    // Move to the URL (go to the page)
                    window.location.href = URL;
                }

        const handleMouseMove = (event) => {
            const eyeContainerPosition = circleEye.getBoundingClientRect();
            const mousePosition = {x: event.clientX, y: event.clientY};
            const centerX = eyeContainerPosition.left + eyeContainerPosition.width / 2;
            const centerY = eyeContainerPosition.top + eyeContainerPosition.height / 2;
            if(width > 645){
            labelContainer.setAttribute('class', mousePosition.x > centerX ? 'right' : 'left');
            if (mousePosition.y > centerY + 50) {
                labelContainer.setAttribute('class', 'bottom');
            }
            } else {
                labelContainer.setAttribute('class', 'bottom');
            }
        
        };

        menuItems.forEach((menuItem) => {
            const label = menuItem.getAttribute('data-label');
            const URL = menuItem.getAttribute('data-link');
            if(label != "") {
                
            menuItem.addEventListener('mouseenter', () => handleMouseEnter(label));
            }
            menuItem.addEventListener('click', () => handleClick(URL));
            menuItem.addEventListener('mouseleave', handleMouseLeave);
        });

        circleEye.addEventListener('mouseleave', handleMouseLeave);
        circleEye.addEventListener('mousemove', handleMouseMove);
    });
         
    /*
    document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".eye-container svg"),t=e.querySelectorAll(".menu-item"),n=document.querySelector("#label-content-container"),o=()=>{e.removeAttribute("data-label"),n.innerHTML="",n.style.opacity=0};t.forEach(t=>{const a=t.getAttribute("data-label");""!=a&&t.addEventListener("mouseenter",()=>(t=>{e.setAttribute("data-label",t),n.style="","The multi-tenant HUB technology platform osapiens HUB offers 8 independant osapiens solutions (os) and uses powerful enginges, such as iPaaS, IoT, KI, to integrate, process and analyze big data to enable you with an automated & simplified supply chain management."==t&&(n.style="top: 20%; left: 50%;"),"Many companies need to develop a sustainability strategy and report on those topics to comply with the   European Corporate Sustainability Reporting Directive (CSRD). Our solution supports you with it - from materiality assessment to target setting to ESG disclosure."==t&&(n.style="top: 40%; left: 50%;"),n.innerHTML=t,n.style.opacity=1})(a)),t.addEventListener("mouseleave",o)}),e.addEventListener("mouseleave",o),e.addEventListener("mousemove",t=>{const o=e.getBoundingClientRect(),a=t.clientX,s=t.clientY,i=o.left+o.width/2,l=o.top+o.height/2;n.setAttribute("class",a>i?"right":"left"),s>l+50&&n.setAttribute("class","bottom")})});
         */
