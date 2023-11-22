

const header = document.querySelector('header');
const footer = document.querySelector('footer')


header.innerHTML = `
<div class="container-fluid navbar-start">


<!-- first-header  -->

<nav class="navbar navbar-expand-md first-navbar navbar-light">
    <div class="container-fluid">
        <!-- home page top logo  -->
        <a class="navbar-brand " href="../../../index.html"><span class="navbar-brand-span ">LUCKY
                STAR</span></a>
        <!-- home page top logo  -->
        <button class="navbar-toggler navbar-toggler-icon-btn" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- home page search box  -->
            <form class="d-flex ms-md-auto first-navbar-2nd-box">
                <input class="form-control me-2 navbar-search-box" type="search" placeholder="Search"
                    aria-label="Search">
                <button class="btn navbar-search-btn" type="submit">Search</button>
            </form>
            <!-- home page search box  -->

            <!-- login and cart box -->
            <ul class="navbar-nav d-flex ms-md-auto">
                <li class="nav-item">
                    <a href="../../login/login.html" class="nav-link active py-0"
                        aria-current="page"><button type="button"
                            class="btn first-navbar-2nd-box navbar-login-btn">Login</button></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link py-1" href="../../cart/cart.html"><i
                            class="fa-solid fa-cart-shopping navbar-login-icon"></i></a>
                </li>
            </ul>
            <!-- login and cart box -->
        </div>
    </div>
</nav>

<!-- first header  -->


<!-- second header  -->

<nav class="navbar navbar-expand second-navbar navbar-light">
    <div class="container-fluid">

        <div class="collapse d-flex justify-content-between navbar-collapse">

            <!-- all second header links  -->
            <ul class="navbar-nav justify-content-around flex-wrap w-100">
                <li class="nav-item">
                    <a href="../../../index.html" class="nav-link" aria-current="page">Home</a>
                </li>
                <li class="nav-item">
                    <a href="../all-products/all-products.html" class="nav-link" aria-current="page">All
                        Products</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                        href="../womens/women-products.html" role="button" aria-expanded="false">Women</a>
                    <!-- link dropdown menu  -->
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="../womens/women-products.html">All Products</a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="../womens/women-dresses.html">Dresses</a></li>
                        <li><a class="dropdown-item" href="../womens/women-pants.html">Pants</a></li>
                        <li><a class="dropdown-item" href="../womens/women-skirts.html">Skirts</a></li>
                    </ul>
                    <!-- link dropdown menu  -->
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                        href="../mens/mens-products.html" role="button" aria-expanded="false">Mens</a>
                    <!-- link dropdown menu  -->
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="../mens/mens-products.html">All Products</a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="../mens/men-hoodies.html">Hoodies</a></li>
                        <li><a class="dropdown-item" href="../mens/men-shirts.html">Shirts</a></li>
                        <li><a class="dropdown-item" href="../mens/men-jeans.html">Jeans</a></li>
                    </ul>
                    <!-- link dropdown menu  -->
                </li>
                <li class="nav-item">
                    <a href="../kids/kids-products.html" class="nav-link" aria-current="page">Kids</a>
                </li>
                <li class="nav-item">
                    <a href="../../contact-us/contact-us.html" class="nav-link"
                        aria-current="page">Contact</a>
                </li>

            </ul>
            <!-- all second header links  -->
        </div>

    </div>
</nav>

<!-- second header  -->

</div>`;


footer.innerHTML = `
<section class="bg-dark text-center">
    <div class="container-fluid p-4">
    
        <!-- social media  -->
        <section class="mb-4">
            <!-- Facebook -->
            <a class="btn btn-floating m-1 card-cart-btn" href="#!" role="button"><i
                    class="fab fa-facebook-f"></i></a>
    
            <!-- Twitter -->
            <a class="btn card-cart-btn btn-floating m-1" href="#!" role="button"><i
                    class="fab fa-twitter"></i></a>
    
            <!-- Google -->
            <a class="btn card-cart-btn btn-floating m-1" href="#!" role="button"><i
                    class="fab fa-google"></i></a>
    
            <!-- Instagram -->
            <a class="btn card-cart-btn btn-floating m-1" href="#!" role="button"><i
                    class="fab fa-instagram"></i></a>
    
            <!-- Linkedin -->
            <a class="btn card-cart-btn btn-floating m-1" href="#!" role="button"><i
                    class="fab fa-linkedin-in"></i></a>
    
            <!-- Github -->
            <a class="btn card-cart-btn btn-floating m-1" href="#!" role="button"><i
                    class="fab fa-github"></i></a>
        </section>
        <!-- socaial media  -->
    
        <!-- footer comment  -->
        <section class="mb-4">
            <p class="footer-comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique consequuntur inventore
                maxime eos
                exercitationem adipisci harum eligendi quidem. Asperiores sapiente repudiandae, consequatur
                deleniti nemo
                ipsam, iure adipisci doloremque aspernatur voluptate inventore! Esse accusantium magni odit
                temporibus
                adipisci placeat aspernatur enim.
            </p>
        </section>
        <!-- footer comment  -->
    
        <!-- footer link  -->
    
        <section>
            <div class="row">
    
                <!-- Grid column  -->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-3">
                    <h5 class="text-uppercase"><a href="../womens/women-products.html"
                            class="footer-link-head">Women</a></h5>
    
                    <ul class="list-unstyled mb-0">
                        <li>
                            <a href="../womens/women-dresses.html" class="footer-sub-link">Dresses</a>
                        </li>
                        <li>
                            <a href="../womens/women-pants.html" class="footer-sub-link">Pants</a>
                        </li>
                        <li>
                            <a href="../womens/women-skirts.html" class="footer-sub-link">Skirts</a>
                        </li>
                    </ul>
                </div>
                <!-- Grid column  -->
    
    
                <!-- Grid column  -->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-3">
                    <h5 class="text-uppercase"><a href="../mens/"
                            class="footer-link-head">Mens</a></h5>
    
                    <ul class="list-unstyled mb-0">
                        <li>
                            <a href="../mens/men-shirts.html" class="footer-sub-link">Shirts</a>
                        </li>
                        <li>
                            <a href="../mens/men-jeans.html" class="footer-sub-link">Jeans</a>
                        </li>
                        <li>
                            <a href="../mens/men-hoodies.html" class="footer-sub-link">Hoodies</a>
                        </li>
                    </ul>
                </div>
                <!-- Grid column  -->
    
    
                <!-- Grid column  -->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-3">
                    <h5 class="text-uppercase"><a href="../kids/kids-products.html"
                            class="footer-link-head">Kids</a></h5>
                </div>
                <!-- Grid column  -->
    
    
                <!-- Grid column  -->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-3">
                    <h5 class="text-uppercase"><a href="" class="footer-link-head">Links</a></h5>
                    <a href=""></a>
                    <ul class="list-unstyled mb-0">
                        <li>
                            <a href="../../../index.html" class="footer-sub-link">Home</a>
                        </li>
                        <li>
                            <a href="../../login/login.html" class="footer-sub-link">Login</a>
                        </li>
                        <li>
                            <a href="../../contact-us/contact-us.html" class="footer-sub-link">Contact</a>
                        </li>
                    </ul>
                </div>
                <!-- Grid column  -->
            </div>
        </section>
    
    </div>
    
    <hr style="color: white;">
    <!-- copyrigth  -->
    <div class="text-center pb-4 " style="color: rgb(21, 255, 0);">
        Copyright © <a href="../../../index.html" style="color: rgb(21, 255, 0); text-decoration: none;">Lucky - Star</a> 2022-23
    </div>
    </section>`;