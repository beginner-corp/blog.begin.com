(function(){
    // Scroll active sidebar link into view
    document
       .querySelector('a.active')
       .scrollIntoView({
         behavior: 'smooth',
         block:  'center'
        })

    // Toggle sidebar on mobile
    let menuButton = document
       .getElementById('menu-button')
    let sidebar = document
       .getElementById('sidebar')
    let main = document
       .getElementById('main')

    main.onclick = function hideSidebar() {
      sidebar.classList.remove('open')
    }

    menuButton.onclick = function toggleSidebar() {
      sidebar.classList.toggle('open')
    }

    // Show percentage of page read on desktop
    let bar = document.querySelector('.indicator')
    let isDesktop = window.innerWidth > 768

    if (isDesktop) {
      // If we want this to work on mobile
        // we need to add a second function
        // for handling window.onscroll
      let el = main
      bar.style.width = getScrollPercent(el)
      el.onscroll = setReadPercent.bind(null, el)
    }

    function setReadPercent(el) {
      bar.style.width = `${getScrollPercent(el)}%`
    }

    function getScrollPercent(el) {
      let body = document.body
      let scrollTop = 'scrollTop'
      let scrollHeight = 'scrollHeight'
      let currentTop = el[scrollTop] || body[scrollTop]
      let currentHeight = (el[scrollHeight] || body[scrollHeight]) - body.clientHeight
      return Math.floor((currentTop / currentHeight) * 100)
    }


    const copyButton = document.getElementById('copy-button')
    copyButton.onclick = copyTextHandler
   
    const codeBlock = document.getElementById('code');
    const copySuccess = document.getElementById('copy-success');
    
  
    const copyTextHandler = () => {
      const text = codeBlock.innerText;
  
      navigator.clipboard.writeText(text).then(
        () => {
          copySuccess.classList.add('show-message');
          setTimeout(() => {
            copySuccess.classList.remove('show-message');
          }, 2500);
        },
        () => {
          console.log('Error writing to the clipboard');
        }
      );
    };
    
    copyButton.addEventListener('click', copyTextHandler);
 }())
