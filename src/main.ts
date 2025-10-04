import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import './styles/style.css'
import { buttonListenerBranch, buttonListenerAboutUs, buttonMainProduct, rawMaterialButton } from './logic/buttons_display'



document.querySelector("body")!.innerHTML = `
  <header>
    <h1>Ethereon Health</h1>
    <ul>
      <li id="about">
        <p class="list_point" >about us</p>
      </li>

      <li id="branches">
        <p class="list_point" >branches</p>
      </li>

      <li id="main">
        <p class="list_point" id=" ">main product</p>
      </li>

      <li id="raw">
        <p class="list_point" >raw material, product on work</p>
      </li>
    </ul>
  </header>
  <main>
    <aside>
      <h2>
        What do we offer?
      </h2>
      <div>
        <div class="img_container" alt="">
          <img src="tylenol.png" alt="tylenol">
        </div>
        <div class="img_container">
          <img src="products.png" alt="grup_products_of_johson_and_johnson">
        </div>
      </div>

    </aside>
    <div id="about_us_div">
      <h2>ABOUT US</h2>
      <p>
        At Ethereon Health, we are honored to collaborate with Johnson & Johnson in shaping the future of wound care through the CleanWound™ line. 
        Guided by innovation and precision, we merge Johnson & Johnson’s trusted medical legacy with our vision of fast, precise, technology-driven healing. 
        Together, we’ve created smarter, cleaner, and more human-centered solutions that empower both patients and professionals. 
        From the CleanWound™ device to HydroPatch, SprayCare, and SmartApp, our partnership reflects one shared purpose — to elevate healing beyond boundaries.
        Because the only limit is the sky.
      </p>
    </div>
    <div id="main_office_div">
      <h2>Main office</h2>
      <p>Our main office is in New Brunswick, New Jersey, U.S</p>
      <img
        src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQzdvItF3nRUuIlPtaJkPqgAMeCGj2MpO0ZiItttgn2dT_N6I30-XOwc-98_NP7RZuDQbogYi8iqTWC8eT2svDm7bofP9zl0muBvllTXJA"
        alt="New Brunswick, New Jersey, U.S">

    </div>
  </main>
  <footer style="text-align: center; padding: 10px; background-color: #f1f1f1; position: relative; width: 100%;">
    &copy; Santiago mendoza ADSO 13
  </footer>
`
buttonListenerBranch()
buttonListenerAboutUs()
buttonMainProduct()
rawMaterialButton()