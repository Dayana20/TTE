var input = '';

console.log(this.input);

function getCharacter0(someForm) {
    input=document.getElementById('image1').value;
    console.log(this.input);

    // https://stackoverflow.com/questions/19211768/saving-a-javascript-variable-for-later-usage
    // save data value
    localStorage.setItem("name", this.input);
    // alert(input);
}

function getCharacter1(someForm) {
    input=document.getElementById('image2').value;
    console.log(this.input);

    // save data value
    localStorage.setItem("name", this.input);
    // alert(input);
}

function getCharacter2(someForm) {
    input=document.getElementById('image3').value;
    console.log(this.input);

    // save data value
    localStorage.setItem("name", this.input);
    // alert(input);
}


var name = localStorage.getItem("name");
var elem = document.getElementById('img1');

if(elem){
    console.log("setting up");
    // later use if statement to do varied images of same character
    // retrieve data value
    document.getElementById("img1").src =this.name;
    document.getElementById("img2").src =this.name;
    document.getElementById("img3").src =this.name;
    document.getElementById("img4").src =this.name;
}

console.log("finished switching images");

function changeText(id) {
    if(id=="food"){
        document.getElementById("message").innerHTML = "This is Encebollado! Traditional Guayaquileño Food";
    }
    else if(id=="food1"){
        document.getElementById("message").innerHTML = "Anything With Green Plantain Is Traditional Food";
    }
    else if(id=="food2"){
        document.getElementById("message").innerHTML = "New Years? Lets Burn Things";
    }
    else{ // if(id=="food3"){
        document.getElementById("message").innerHTML = "Don't Go Outside If You Don't Want To End Up In A Strangers Pool";
    }

    // alert(id);
}

let count = 1;
function showImg() {
    if(count%2!=0){
        document.getElementById("parallax2").style.backgroundImage = "none";
        document.getElementById("p2_img1").style.display = "block";
        document.getElementById("p2_img2").style.display = "block";
        document.getElementById("p2_img3").style.display = "block";
        document.getElementById("p2_img4").style.display = "block";
    } else{
        document.getElementById("parallax2").style.backgroundImage = "url(images/guiti_pool.jpg)";
        document.getElementById("parallax2").style.border = "none";
        document.getElementById("p2_img1").style.display = "none";
        document.getElementById("p2_img2").style.display = "none";
        document.getElementById("p2_img3").style.display = "none";
        document.getElementById("p2_img4").style.display = "none";
    }
    count+=1;
    // console.log(count%2);
}








// try this
const button = document.querySelector('.js-toggle-button');
const menu = document.querySelector('.js-menu');
const links = document.querySelectorAll('.js-link');

const showTextTransitioner = transitionHiddenElement({
  element: document.querySelector('.js-show-text'),
  visibleClass: 'is-shown',
});

const hideTextTransitioner = transitionHiddenElement({
  element: document.querySelector('.js-hide-text'),
  visibleClass: 'is-shown',
})

const transitionDelay = 0.025;
const transitionLength = 0.2;
const itemLength = 6;
const staggeredTransitionLength = (transitionDelay * (itemLength - 1)) + transitionLength;

const menuTransitioner = transitionHiddenElement({
  element: document.querySelector('.js-menu'),
  visibleClass: 'is-open',
  waitMode: 'timeout',
  timeoutDuration: staggeredTransitionLength * 1000
})

button.addEventListener('click', () => {
  toggleMenu();
});

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    toggleMenu();
  });
});

const toggleMenu = () => {
  showTextTransitioner.toggle();
  hideTextTransitioner.toggle();
  menuTransitioner.toggle();
}

/** 
 * Library code
 * Using https://www.npmjs.com/package/@cloudfour/transition-hidden-element
 */

function transitionHiddenElement({
  element,
  visibleClass,
  waitMode = 'transitionend',
  timeoutDuration,
  hideMode = 'hidden',
  displayValue = 'block'
}) {
  if (waitMode === 'timeout' && typeof timeoutDuration !== 'number') {
    console.error(`
      When calling transitionHiddenElement with waitMode set to timeout,
      you must pass in a number for timeoutDuration.
    `);

    return;
  }

  // Don't wait for exit transitions if a user prefers reduced motion.
  // Ideally transitions will be disabled in CSS, which means we should not wait
  // before adding `hidden`.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    waitMode = 'immediate';
  }

  /**
   * An event listener to add `hidden` after our animations complete.
   * This listener will remove itself after completing.
   */
  const listener = e => {
    // Confirm `transitionend` was called on  our `element` and didn't bubble
    // up from a child element.
    if (e.target === element) {
      applyHiddenAttributes();

      element.removeEventListener('transitionend', listener);
    }
  };

  const applyHiddenAttributes = () => {
    if(hideMode === 'display') {
      element.style.display = 'none';
    } else {
      element.setAttribute('hidden', true);
    }
  }

  const removeHiddenAttributes = () => {
    if(hideMode === 'display') {
      element.style.display = displayValue;
    } else {
      element.removeAttribute('hidden');
    }
  }

  return {
    /**
     * Show the element
     */
    show() {
      /**
       * This listener shouldn't be here but if someone spams the toggle
       * over and over really fast it can incorrectly stick around.
       * We remove it just to be safe.
       */
      element.removeEventListener('transitionend', listener);

      /**
       * Similarly, we'll clear the timeout in case it's still hanging around.
       */
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      removeHiddenAttributes();

      /**
       * Force a browser re-paint so the browser will realize the
       * element is no longer `hidden` and allow transitions.
       */
      const reflow = element.offsetHeight;

      element.classList.add(visibleClass);
    },

    /**
     * Hide the element
     */
    hide() {
      if (waitMode === 'transitionend') {
        element.addEventListener('transitionend', listener);
      } else if (waitMode === 'timeout') {
        this.timeout = setTimeout(() => {
          applyHiddenAttributes();
        }, timeoutDuration);
      } else {
        applyHiddenAttributes();
      }

      // Add this class to trigger our animation
      element.classList.remove(visibleClass);
    },

    /**
     * Toggle the element's visibility
     */
    toggle() {
      if (this.isHidden()) {
        this.show();
      } else {
        this.hide();
      }
    },

    /**
     * Tell whether the element is hidden or not.
     */
    isHidden() {
      /**
       * The hidden attribute does not require a value. Since an empty string is
       * falsy, but shows the presence of an attribute we compare to `null`
       */
      const hasHiddenAttribute = element.getAttribute('hidden') !== null;

      const isDisplayNone = element.style.display === 'none';

      const hasVisibleClass = [...element.classList].includes(visibleClass);

      return hasHiddenAttribute || isDisplayNone || !hasVisibleClass;
    },

    // A placeholder for our `timeout`
    timeout: null
  };
}