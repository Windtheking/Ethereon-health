export function buttonListenerBranch() {
    document.getElementById("branches")?.addEventListener("click", () => {
        document.querySelector("body")!.innerHTML = `
        <header>
            <h1>Ethereon Health</h1>
            <ul>
                <li id="about">
                    <p class="list_point">about us</p>
                </li>

                <li id="branches">
                    <p class="list_point" id="branches">branches</p>
                </li>

                <li id="main">
                    <p class="list_point">main product</p>
                </li>

                <li id="raw">
                    <p class="list_point">raw material, product on work</p>
                </li>
            </ul>
        </header>
        <main id= "branch_main">
            <h2>Avalible branches and personel</h2>
            <div id="branches_countries">
                <div class="section" id="brazil">
                    Rio, Brazil
                    <img src="./public/rio.jpg" alt="" id="rio_image">
                    <ol>
                        <li>Bachelor Santiago, espcialized in security cybersecurity</li>
                        <li>Dr. Mariana dos Santos</li>
                        <li>Prof. Rafael Oliveira</li>
                        <li>Dra. Beatriz Carvalho</li>
                        <li>Dr. Lucas Ferreira</li>

                    </ol>
                </div>
                <div class="section" id="rusia">
                    Moscow, Rusia
                    <img src="moscow.jpg" alt="" id="moscow_image">
                    <ol>
                        <li>Masters in marketing  Andres Almanza</li>
                        <li>Dr. Anastasia Volkov</li>
                        <li>Prof. Dmitri Ivanov</li>
                        <li>Dra. Ekaterina Morozova</li>
                        <li>Dr. Alexei Petrov</li>
                    </ol>
                </div>
                <div class="section" id="europe">
                    Belgium, Europe
                    <img src="belgium.jpeg" alt="" id="belgium_image">
                    <ol>
                        <li>Dr. Elise Verhaegen</li>
                        <li>Prof. Laurent De Smet</li>
                        <li>Dra. Amélie Dupont</li>
                        <li>Dr. Hugo Van den Berg</li>
                    </ol>
                </div>
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
    });

}

export function buttonListenerAboutUs() {
    document.getElementById("about")?.addEventListener("click", () => {
        document.querySelector("body")!.innerHTML = `
        <header >
            <h1>Ethereon Health</h1>
            <ul>
            <li id="about">
                <p class="list_point" >about us</p>
            </li>

            <li id="branches">
                <p class="list_point" >branches</p>
            </li>

            <li id="main">
                <p class="list_point" id="theMain">main product</p>
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
    });

}


export function buttonMainProduct() {
    document.getElementById("main")?.addEventListener("click", () => {
        document.querySelector("body")!.innerHTML = `
        <header style="position: absolute;">
            <h1>Ethereon Health</h1>
            <ul>
            <li id="about">
                <p class="list_point" >about us</p>
            </li>

            <li id="branches">
                <p class="list_point" >branches</p>
            </li>

            <li>
                <p class="list_point" id="main">main product</p>
            </li>

            <li id="raw">
                <p class="list_point" id=" ">raw material, product on work</p>
            </li>
            </ul>
        </header>
        <section style="display: flex; flex-direction: row; place-items: center; justify-content: center;">
            <main id="products_main" style="display: flex; flex-direction: row; place-items:center ; height: 100%; width: 100vh; padding-top: 21vh; padding-bottom:5vh;">
                <div class="card" style="width: 100%; height: 100%; margin: 1vh; padding-bottom:10px; box-shadow: 1px 3px 10px;">
                    
                    <img src="clean-wound.png" class="card-img-top" alt="clean Wound" style="height: 60%; width: 40%; margin: auto; padding-top: 2vh;">
                    <div class="card-body" style="display: flex; flex-direction: column; place-items: center; gap: 3vh; height:90%;">
                        <h5 class="card-title">Clean Wound</h5>
                            Meet the future of wound care. 
                            CleanWound™ is designed to gently and effectively cleanse injuries, reducing infection risk while speeding up recovery. 
                            Compact, portable, and easy to use, it brings hospital-grade care to your home.
                            <i>Protect what matters most. Heal smarter with CleanWound™.</i>

                    </div>
                </div>
            </main>
            
            <aside>
                <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="true" aria-controls="collapseWidthExample">
                        Browse products variations
                    </button>
                </p>
                <div style="min-height: 120px;">
                    <div class="collapse collapse-horizontal" id="collapseWidthExample">
                        <div class="card card-body" style="width: 300px;">
                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" style="place-items: center;" >
                                        <img src="hydropatch.png" class="d-block" style="width:60%; height: 100%;" alt="...">
                                        <i>Hydration that heals from within.</i>
                                    </div>
                                    <div class="carousel-item" style="place-items: center;">
                                        <img src="Smartapp.png" class="d-block" style="width:60%; height: 100%;" alt="...">
                                        <i>Your wound care, always in hand.</i>
                                    </div>
                                    <div class="carousel-item" style="place-items: center;">
                                        <img src="spraycare.png" class="d-block" style="width:60%; height: 100%;" alt="...">
                                        <i>Protection in every spray.</i>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                                </div>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
        <footer style="text-align: center; padding: 10px; background-color: #f1f1f1; position: relative; width: 100%;">
            &copy; Santiago mendoza ADSO 13
        </footer>

        `
        buttonListenerBranch()
        buttonListenerAboutUs()
        buttonMainProduct()
        rawMaterialButton()
    });

}

export function rawMaterialButton() {
    document.getElementById("raw")?.addEventListener("click", () => {
        document.querySelector("body")!.innerHTML = `
        <header style="position: absolute;">
            <h1>Ethereon Health</h1>
            <ul>
            <li id="about">
                <p class="list_point" >about us</p>
            </li>

            <li id="branches">
                <p class="list_point" >branches</p>
            </li>

            <li id="main">
                <p class="list_point">main product</p>
            </li>

            <li id="raw">
                <p class="list_point" id=" ">raw material, product on work</p>
            </li>
            </ul>
        </header>
        <section style="display: flex; flex-direction: column; place-items: center; justify-content: center; padding-top: 20vh; padding-bottom:5vh;">
            <main>
                <table class="table table-info table-striped" >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">material name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Medical-Grade ABS Plastic</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Silicone Medical Nozzle</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Polycarbonate Transparent Cap</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Polycarbonate Transparent Cap</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Polycarbonate Transparent Cap</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Polycarbonate Transparent Cap</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Polycarbonate Transparent Cap</td>
                        </tr>
                                                <tr>
                            <th scope="row">8</th>
                            <td>Polycarbonate Transparent Cap</td>
                        </tr>
                                                <tr>
                            <th scope="row">9</th>
                            <td>Polycarbonate Transparent Cap</td>
                        </tr>
                                                <tr>
                            <th scope="row">10</th>
                            <td>Polycarbonate Transparent Cap</td>
                        </tr>
                    </tbody>
            </table>

            <div class="card shadow-sm" style="width: 30rem; margin: 2rem;">
                <div class="card-body">
                <p class="card-text">At Johnson & Johnson, we believe in openness and quality. 
                    The materials listed on the left are the essential components 
                    that make CleanWound™ safe, effective, and durable.
                    Each selected to ensure medical-grade performance and skin-friendly care.

                    <h5>Disclaimer:</h5>
                    For external use only. Do not use on severe or infected wounds without medical supervision.
                </p>
                </div>
            </div>
            </main>
        </section>
        <footer style="text-align: center; padding: 10px; background-color: #f1f1f1; position: relative; width: 100%;">
            &copy; Santiago mendoza ADSO 13
        </footer>

        `
        buttonListenerBranch()
        buttonListenerAboutUs()
        buttonMainProduct()
        rawMaterialButton()
    });

}