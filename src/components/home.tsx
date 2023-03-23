import React from 'react'

function HomePage() {
    return (<div>


        <header className="header header-absolute">
            {/* <!--  Top Bar--> */}
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-7 d-none d-sm-block">
                            <ul className="list-inline topbar-text mb-0">
                                <li className="list-inline-item pe-3 me-0">
                                    <svg className="svg-icon me-2">
                                        <use xlinkHref="#calls-1"> </use>
                                    </svg>020-800-456-747
                                </li>
                                <li className="list-inline-item px-3 border-start d-none d-lg-inline-block">Free shipping on orders over $300</li>
                            </ul>
                        </div>
                        <div className="col-sm-5 d-flex justify-content-end">
                            {/* <!--  Language Dropdown--> */}
                            <div className="dropdown border-end px-3"><a className="dropdown-toggle topbar-link" id="langsDropdown" href="index5.html#" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false">
                                <img className="topbar-flag" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/flag/gb.svg" alt="english" />English</a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated" aria-labelledby="langsDropdown"><a className="dropdown-item text-sm" href="index5.html#">
                                    <img className="topbar-flag" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/flag/de.svg" alt="german" />German</a><a className="dropdown-item text-sm" href="index5.html#"> <img className="topbar-flag" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/flag/fr.svg" alt="french" />French</a></div>
                            </div>
                            {/* <!--  Currency Dropdown--> */}
                            <div className="dropdown ps-3 ms-0"><a className="dropdown-toggle topbar-link" id="currencyDropdown" href="index5.html#" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-dollar-sign text-xs align-middle mt-n1 me-2"> </i>USD</a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated" aria-labelledby="currencyDropdown"><a className="dropdown-item text-sm" href="index5.html#"> <i className="fas fa-euro-sign text-xs align-middle mt-n1 me-2"> </i>EUR</a><a className="dropdown-item text-sm" href="index5.html#"><i className="fas fa-pound-sign text-xs align-middle mt-n1 me-2"> </i>GBP</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--  Top Bar End--> */}
            {/* <!--  Navbar--> */}
            <nav className="navbar navbar-expand-lg bg-transparent navbar-light navbar-airy bg-fixed-white">
                <div className="container-fluid">
                    {/* <!--  Navbar Header  --> */}<a className="navbar-brand" href="https://demo.bootstrapious.com/sell/2-0-1/index.html"><svg className="navbar-brand-svg" viewBox="0 0 65 16" width="85" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="navbar-brand-svg-text" d="M5.72266 18.1562C4.88281 18.1562 4.08529 18.0033 3.33008 17.6973C2.58138 17.3913 1.94661 16.9355 1.42578 16.3301C0.911458 15.7181 0.582682 14.9759 0.439453 14.1035L2.90039 13.4785C2.98503 14.2988 3.28776 14.9173 3.80859 15.334C4.33594 15.7507 4.98698 15.959 5.76172 15.959C6.23698 15.959 6.64714 15.8841 6.99219 15.7344C7.33724 15.5781 7.59766 15.3665 7.77344 15.0996C7.94922 14.8327 8.03711 14.5332 8.03711 14.2012C8.03711 13.804 7.91341 13.4655 7.66602 13.1855C7.42513 12.9056 7.1224 12.6745 6.75781 12.4922C6.39323 12.3099 5.89193 12.0918 5.25391 11.8379C4.42057 11.5059 3.74674 11.1999 3.23242 10.9199C2.7181 10.6335 2.27539 10.2363 1.9043 9.72852C1.53971 9.2207 1.35742 8.57943 1.35742 7.80469C1.35742 7.01693 1.54948 6.33659 1.93359 5.76367C2.32422 5.18424 2.84505 4.74479 3.49609 4.44531C4.15365 4.14583 4.8763 3.99609 5.66406 3.99609C6.54948 3.99609 7.35677 4.19792 8.08594 4.60156C8.8151 4.9987 9.40755 5.60417 9.86328 6.41797L7.80273 7.67773C7.56185 7.20898 7.24609 6.84766 6.85547 6.59375C6.46484 6.33333 6.03841 6.20312 5.57617 6.20312C5.25065 6.20312 4.95443 6.26497 4.6875 6.38867C4.42708 6.51237 4.21875 6.68815 4.0625 6.91602C3.91276 7.13737 3.83789 7.39128 3.83789 7.67773C3.83789 8.0293 3.95182 8.32878 4.17969 8.57617C4.40755 8.82357 4.69401 9.0319 5.03906 9.20117C5.39062 9.37044 5.86914 9.57227 6.47461 9.80664C7.33398 10.1387 8.0306 10.4512 8.56445 10.7441C9.09831 11.0371 9.55729 11.4473 9.94141 11.9746C10.3255 12.502 10.5176 13.1693 10.5176 13.9766C10.5176 14.8229 10.3027 15.5618 9.87305 16.1934C9.44987 16.8249 8.8737 17.3099 8.14453 17.6484C7.41536 17.987 6.60807 18.1562 5.72266 18.1562ZM16.8906 4.20117H26.0703V6.47656H19.3711V9.96289H25.6113V12.2383H19.3711V15.6562H26.0703V18H16.8906V4.20117ZM33.0586 4.20117H35.5391V15.6562H41.4375V18H33.0586V4.20117ZM47.4492 4.20117H49.9297V15.6562H55.8281V18H47.4492V4.20117Z" transform="translate(0 -3)" fill="#212529" />
                        <path className="text-primary" d="M62.0254 15.4219H64.418V18H62.0254V15.4219Z" transform="translate(0 -3)" fill="#9A6EE2" />
                    </svg></a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                    {/* <!--  Navbar Collapse --> */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle active" id="homeDropdownMenuLink" href="https://demo.bootstrapious.com/sell/2-0-1/index.html" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home        </a>
                                <div className="dropdown-menu dropdown-menu-animated" aria-labelledby="homeDropdownMenuLink"><a className="dropdown-item" href="index5.html">Slider + broken grid <span className="badge badge-info-light ms-1">New</span>    </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/index.html">Fullscreen home + Lookbook</a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/index2.html">Split-screen home</a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/index3.html">Classic home</a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/index4.html">Parallax sections <span className="badge badge-info-light ms-1">New</span></a></div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle " id="categoryDropdownMenuLink" href="https://demo.bootstrapious.com/sell/2-0-1/category.html" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                                <div className="dropdown-menu dropdown-menu-animated" aria-labelledby="categoryDropdownMenuLink"><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/category.html">Category - left sidebar   </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/category-right.html">Category - right sidebar   </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/category-no-sidebar.html">Category - no sidebar   </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/category-full.html">Category - full width   </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/category-masonry.html">Category - masonry items   </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/category-banner.html">Category - w/ banner   </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Product detail   </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html">Product detail - v.2   </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/detail-3.html">Product detail - v.3 <span className="badge badge-warning ms-1">New</span>   </a>
                                </div>
                            </li>
                            {/* <!--  Megamenu--> */}
                            <li className="nav-item dropdown position-static"><a className="nav-link dropdown-toggle " href="index5.html#" data-bs-toggle="dropdown">Template</a>
                                <div className="dropdown-menu dropdown-menu-animated megamenu py-lg-0">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="row p-3 pe-lg-0 ps-lg-5 pt-lg-5">
                                                <div className="col-lg-3">
                                                    {/* <!--  Megamenu list--> */}
                                                    <h6 className="text-uppercase">Homepage</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/index.html">Fullscreen home + Lookbook   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/index2.html">Split-screen home   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/index3.html">Classic home   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/index4.html">Parallax sections  <span className="badge bg-warning ms-1">New</span>   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="index5.html">Slider + Broken grid  <span className="badge bg-warning ms-1">New</span>   </a></li>
                                                    </ul>
                                                    {/* <!--  Megamenu list--> */}
                                                    <h6 className="text-uppercase">Shop</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/category.html">Category - left sidebar   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/category-right.html">Category - right sidebar   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/category-no-sidebar.html">Category - no sidebar   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/category-full.html">Category - full width   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/category-masonry.html">Category - masonry items   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/category-banner.html">Category - w/ banner   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Product detail   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html">Product detail - v.2   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail-3.html">Product detail - v.3 <span className="badge bg-warning ms-1">New</span>   </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3">
                                                    {/* <!--  Megamenu list--> */}
                                                    <h6 className="text-uppercase">Order process</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/cart.html">Shopping cart   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/cart-2.html">Shopping cart - v. 2 <span className="badge bg-warning ms-1">New</span>   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/checkout1.html">Checkout 1 - Address   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/checkout2.html">Checkout 2 - Delivery   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/checkout3.html">Checkout 3 - Payment   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/checkout4.html">Checkout 4 - Review     </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/checkout5.html">Checkout 5 - Confirmation   </a></li>
                                                    </ul>
                                                    {/* <!--  Megamenu list--> */}
                                                    <h6 className="text-uppercase">Blog</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/blog.html">Blog   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/post.html">Post   </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3">
                                                    {/* <!--  Megamenu list--> */}
                                                    <h6 className="text-uppercase">Pages</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/about.html">About us <span className="badge bg-warning ms-1">New</span>   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/about-2.html">About us v.2 <span className="badge bg-warning ms-1">New</span>   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/contact.html">Contact   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/contact-2.html">Contact v.2   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/text.html">Text page   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/faq.html">F.A.Q.s   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/coming-soon.html">Coming soon   </a></li>
                                                    </ul>
                                                    {/* <!--  Megamenu list--> */}
                                                    <h6 className="text-uppercase">Customer</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/customer-login.html">Login/sign up   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/customer-orders.html">Orders   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/customer-order.html">Order detail   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/customer-addresses.html">Addresses   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/customer-account.html">Profile   </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3">
                                                    {/* <!--  Megamenu list--> */}
                                                    <h6 className="text-uppercase">Documentation</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-introduction.html">Introduction   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-directory-structure.html">Directory structure   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-gulp.html">Gulp   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-customizing-css.html">Customizing CSS   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-credits.html">Credits   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-changelog.html">Changelog   </a></li>
                                                    </ul>
                                                    {/* <!--  Megamenu list--> */}
                                                    <h6 className="text-uppercase">Components</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/docs/components-bootstrap.html">Bootstrap   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/docs/components-sell.html">Theme   </a></li>
                                                        <li className="megamenu-list-item"><a className="megamenu-list-link" href="https://demo.bootstrapious.com/sell/2-0-1/component-variants/header.html">Header variants <span className="badge bg-warning ms-1">New</span>   </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row megamenu-services d-none d-lg-flex">
                                                <div className="col-xl-3 col-lg-6 d-flex">
                                                    <div className="megamenu-services-item">
                                                        <svg className="svg-icon megamenu-services-icon">
                                                            <use xlinkHref="#delivery-time-1"> </use>
                                                        </svg>
                                                        <div>
                                                            <h6 className="text-uppercase">Free shipping &amp; return</h6>
                                                            <p className="mb-0 text-muted text-sm">Free Shipping over $300</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-6 d-flex">
                                                    <div className="megamenu-services-item">
                                                        <svg className="svg-icon megamenu-services-icon">
                                                            <use xlinkHref="#money-1"> </use>
                                                        </svg>
                                                        <div>
                                                            <h6 className="text-uppercase">Money back guarantee</h6>
                                                            <p className="mb-0 text-muted text-sm">30 Days Money Back</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-6 d-flex">
                                                    <div className="megamenu-services-item">
                                                        <svg className="svg-icon megamenu-services-icon">
                                                            <use xlinkHref="#customer-support-1"> </use>
                                                        </svg>
                                                        <div>
                                                            <h6 className="text-uppercase">020-800-456-747</h6>
                                                            <p className="mb-0 text-muted text-sm">24/7 Available Support</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-6 d-flex">
                                                    <div className="megamenu-services-item">
                                                        <svg className="svg-icon megamenu-services-icon">
                                                            <use xlinkHref="#secure-payment-1"> </use>
                                                        </svg>
                                                        <div>
                                                            <h6 className="text-uppercase">Secure Payment</h6>
                                                            <p className="mb-0 text-muted text-sm">Secure Payment</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 d-none d-lg-block position-relative"><img className="bg-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/megamenu.jpg" alt="" /></div>
                                    </div>
                                </div>
                            </li>
                            {/* <!--  /Megamenu end--> */}
                            {/* <!--  Multi level dropdown    --> */}
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="index5.html#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <ul className="dropdown-menu dropdown-menu-animated" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="index5.html#">Action</a></li>
                                    <li><a className="dropdown-item" href="index5.html#">Another action</a></li>
                                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" id="navbarDropdownMenuLink2" href="index5.html#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown link</a>
                                        <ul className="dropdown-menu dropdown-menu-animated" aria-labelledby="navbarDropdownMenuLink2">
                                            <li><a className="dropdown-item" href="index5.html#">Action</a></li>
                                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" id="navbarDropdownMenuLink3" href="index5.html#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Another action</a>
                                                <ul className="dropdown-menu dropdown-menu-animated" aria-labelledby="navbarDropdownMenuLink3">
                                                    <li><a className="dropdown-item" href="index5.html#">Action</a></li>
                                                    <li><a className="dropdown-item" href="index5.html#">Action</a></li>
                                                    <li><a className="dropdown-item" href="index5.html#">Action</a></li>
                                                    <li><a className="dropdown-item" href="index5.html#">Action</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" id="navbarDropdownMenuLink4" href="index5.html#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Another action</a>
                                                <ul className="dropdown-menu dropdown-menu-animated" aria-labelledby="navbarDropdownMenuLink4">
                                                    <li><a className="dropdown-item" href="index5.html#">Action</a></li>
                                                    <li><a className="dropdown-item" href="index5.html#">Action</a></li>
                                                    <li><a className="dropdown-item" href="index5.html#">Action</a></li>
                                                    <li><a className="dropdown-item" href="index5.html#">Action</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="dropdown-item" href="index5.html#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" id="navbarDropdownMenuLink5" href="index5.html#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown link</a>
                                        <ul className="dropdown-menu dropdown-menu-animated" aria-labelledby="navbarDropdownMenuLink5">
                                            <li><a className="dropdown-item" href="index5.html#">Action                    </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* <!--  Multi level dropdown end--> */}
                            <li className="nav-item"><a className="nav-link" href="https://demo.bootstrapious.com/sell/2-0-1/contact.html">Contact</a>
                            </li>
                            <li className="nav-item dropdown"><a className="dropdown-toggle nav-link " id="docsDropdownMenuLink" href="index5.html#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Docs</a>
                                <div className="dropdown-menu dropdown-menu-animated dropdown-menu-end" aria-labelledby="docsDropdownMenuLink">
                                    <h6 className="dropdown-header fw-normal">Documentation</h6><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-introduction.html">Introduction </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-directory-structure.html">Directory structure </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-gulp.html">Gulp </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-customizing-css.html">Customizing CSS </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-credits.html">Credits </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/docs/docs-changelog.html">Changelog </a>
                                    <div className="dropdown-divider"></div>
                                    <h6 className="dropdown-header fw-normal">Components</h6><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/docs/components-bootstrap.html">Bootstrap </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/docs/components-sell.html">Theme </a><a className="dropdown-item" href="https://demo.bootstrapious.com/sell/2-0-1/component-variants/header.html">Header variants <span className="badge bg-warning ms-1">New</span> </a>
                                </div>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">
                            {/* <!--  Search Button--> */}
                            <div className="nav-item navbar-icon-link" data-bs-toggle="search">
                                <svg className="svg-icon">
                                    <use xlinkHref="#search-1"> </use>
                                </svg>
                            </div>
                            {/* <!--  User Not Logged - link to login page--> */}
                            <div className="nav-item"><a className="navbar-icon-link" href="https://demo.bootstrapious.com/sell/2-0-1/customer-login.html">
                                <svg className="svg-icon">
                                    <use xlinkHref="#male-user-1"> </use>
                                </svg><span className="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">Log in    </span></a></div>
                            {/* <!--  Cart Dropdown--> */}
                            <div className="nav-item dropdown"><a className="navbar-icon-link d-lg-none" href="https://demo.bootstrapious.com/sell/2-0-1/cart.html">
                                <svg className="svg-icon">
                                    <use xlinkHref="#cart-1"> </use>
                                </svg><span className="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">View cart</span></a>
                                <div className="d-none d-lg-block"><a className="navbar-icon-link" id="cartdetails" href="https://demo.bootstrapious.com/sell/2-0-1/cart.html" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg className="svg-icon">
                                        <use xlinkHref="#cart-1"> </use>
                                    </svg>
                                    <div className="navbar-icon-link-badge">3                         </div></a>
                                    <div className="dropdown-menu dropdown-menu-animated dropdown-menu-end p-4" aria-labelledby="cartdetails">
                                        <div className="navbar-cart-product-wrapper">
                                            {/* <!--  cart item--> */}
                                            <div className="navbar-cart-product">
                                                <div className="d-flex align-items-center"><a href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><img className="img-fluid navbar-cart-product-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/product-square-ian-dooley-347968-unsplash.jpg" alt="..." /></a>
                                                    <div className="w-100"><a className="navbar-cart-product-close" href="index5.html#"><i className="fa fa-times">                                                   </i></a>
                                                        <div className="ps-3"> <a className="navbar-cart-product-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Skull Tee</a><small className="d-block text-muted">Quantity: 1 </small><strong className="d-block text-sm">$75.00 </strong></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--  cart item--> */}
                                            <div className="navbar-cart-product">
                                                <div className="d-flex align-items-center"><a href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><img className="img-fluid navbar-cart-product-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/product-square-kyle-loftus-596319-unsplash.jpg" alt="..." /></a>
                                                    <div className="w-100"><a className="navbar-cart-product-close" href="index5.html#"><i className="fa fa-times">                                                   </i></a>
                                                        <div className="ps-3"> <a className="navbar-cart-product-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Transparent Blouse</a><small className="d-block text-muted">Quantity: 1 </small><strong className="d-block text-sm">$75.00 </strong></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--  cart item--> */}
                                            <div className="navbar-cart-product">
                                                <div className="d-flex align-items-center"><a href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><img className="img-fluid navbar-cart-product-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/product-square-serrah-galos-494312-unsplash.jpg" alt="..." /></a>
                                                    <div className="w-100"><a className="navbar-cart-product-close" href="index5.html#"><i className="fa fa-times">                                                   </i></a>
                                                        <div className="ps-3"> <a className="navbar-cart-product-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">White Tee</a><small className="d-block text-muted">Quantity: 1 </small><strong className="d-block text-sm">$75.00 </strong></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--  total price--> */}
                                        <div className="navbar-cart-total"><span className="text-uppercase text-muted">Total</span><strong className="text-uppercase">$75.00</strong></div>
                                        {/* <!--  buttons--> */}
                                        <div className="d-flex justify-content-between"><a className="btn btn-link text-dark me-3" href="https://demo.bootstrapious.com/sell/2-0-1/cart.html">View Cart <i className="fa-arrow-right fa"></i></a><a className="btn btn-outline-dark" href="https://demo.bootstrapious.com/sell/2-0-1/checkout1.html">Checkout</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!--  /Navbar --> */}
            {/* <!--  Fullscreen search area--> */}
            <div className="search-area-wrapper">
                <div className="search-area d-flex align-items-center justify-content-center">
                    <div className="close-btn">
                        <svg className="svg-icon svg-icon-light w-3rem h-3rem">
                            <use xlinkHref="#close-1"> </use>
                        </svg>
                    </div>
                    <form className="search-area-form" action="index5.html#">
                        <div className="mb-4 position-relative">
                            <input className="search-area-input" type="search" name="search" id="search" placeholder="What are you looking for?" />
                            <button className="search-area-button" type="submit">
                                <svg className="svg-icon">
                                    <use xlinkHref="#search-1"> </use>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!--  /Fullscreen search area--> */}
        </header>
        <section className="mh-full-screen">
            {/* <!--  Circle Slider--> */}
            <div className="owl-carousel owl-theme circle-slider">
                <div className="item d-flex align-items-end bg-gray-100 light-overlay light-overlay-md-0" style={{ paddingTop: "80px" }}>
                    <div className="container circle-slider-bg" style={{ background: "right bottom url(https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/slider/circle-slider-3.jpg) no-repeat;" }}>
                        <div className="w-100">
                            <div className="row py-5">
                                <div className="col-lg-8 py-md-5 py-lg-7 overlay-content">
                                    <h5 className="text-uppercase text-danger mb-3 letter-spacing-5"> Special</h5>
                                    <h2 className="mb-3">Ethnic blouses</h2>
                                    <p className="lead mb-4">Lorem ipsum dolor sit amet.<br />Consectetur adipisicing elit.</p>
                                    <p> <a className="btn btn-outline-dark" href="https://demo.bootstrapious.com/sell/2-0-1/category.html">View collection</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item d-flex align-items-end bg-gray-100 light-overlay light-overlay-md-0" style={{ paddingTop: "80px" }}>
                    <div className="container circle-slider-bg" style={{ background: "left bottom url(https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/slider/circle-slider-2.jpg) no-repeat;" }}>
                        <div className="w-100">
                            <div className="row py-5">
                                <div className="col-lg-6 py-md-5 py-lg-7 ms-lg-auto text-md-end overlay-content">
                                    <h5 className="text-uppercase text-info mb-3 letter-spacing-5"> Just arrived</h5>
                                    <h2 className="mb-3">Tigerrrs College Jackets</h2>
                                    <p className="lead mb-4">Lorem ipsum dolor sit amet.<br />Consectetur adipisicing elit.</p>
                                    <p> <a className="btn btn-outline-dark" href="https://demo.bootstrapious.com/sell/2-0-1/category.html">View collection                            </a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item d-flex align-items-end bg-gray-100 light-overlay light-overlay-md-0" style={{ paddingTop: "80px" }}>
                    <div className="container circle-slider-bg" style={{ background: "right bottom url(https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/slider/circle-slider-1.jpg) no-repeat; " }}>
                        <div className="w-100">
                            <div className="row py-5">
                                <div className="col-lg-8 py-md-5 py-lg-7 overlay-content">
                                    <h5 className="text-uppercase text-muted mb-3 letter-spacing-5"> Special</h5>
                                    <h2 className="mb-3">Autumn-colour coats</h2>
                                    <p className="lead mb-4">Lorem ipsum dolor sit amet.<br />Consectetur adipisicing elit.</p>
                                    <p> <a className="btn btn-outline-dark" href="https://demo.bootstrapious.com/sell/2-0-1/category.html">View collection</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--  /Circle Slider--> */}
        </section>
        <section className="py-6">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 mb-5">
                        <p className="text-uppercase text-muted fw-bold mb-1">Top choices</p>
                        <h3>Popular this week</h3>
                        <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-6 pt-lg-3"><a href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/artboard-bag.jpg" alt="" /></a>
                        <div className="px-4 position-relative z-index-2 mt-n3"><a className="text-dark text-decoration-none" href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html">
                            <h3>Black<br />canvas<br />bag     </h3>
                            <p className="text-muted">$39.90</p></a>
                            <p> <a className="btn btn-link text-dark text-decoration-none px-0" href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html"> Shop now                       </a></p>
                        </div>
                    </div>
                    <div className="col-md-7 ms-auto mb-4 mb-md-5">
                        <div className="position-absolute z-index-5 py-6"><a className="text-dark text-decoration-none" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">
                            <h2>Sweaters<br />for<br />her     </h2>
                            <p className="text-muted">$39.90</p></a>
                            <p> <a className="btn btn-link text-dark text-decoration-none px-0" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"> Shop now      </a></p>
                        </div>
                        <div className="ms-6"><a href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/photo/matthew-kane-365718-unsplash-gray-square.jpg" alt="" /></a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 mb-4 mb-lg-5">
                        <div className="position-absolute z-index-5 py-6"><a className="text-dark text-decoration-none" href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html">
                            <h2>Skeleton<br />Tees<br /></h2>
                            <p className="text-muted">$39.90</p></a>
                            <p> <a className="btn btn-link text-dark text-decoration-none px-0" href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html"> Shop now                        </a></p>
                        </div>
                        <div className="ms-6"><a href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/photo/ian-dooley-347968-unsplash.jpg" alt="" /></a></div>
                    </div>
                    <div className="col-lg-4 ms-auto pt-lg-6 mb-4 mb-lg-5"><a className="text-dark text-decoration-none" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/artboard-sunglasses.jpg" alt="" /></a>
                        <div className="px-4 position-relative z-index-2 mt-n3"><a className="text-dark text-decoration-none" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">
                            <h3>Retro<br />sunglasses</h3>
                            <p className="text-muted">$39.90</p></a>
                            <p> <a className="btn btn-link text-dark text-decoration-none px-0"> Shop now     </a></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 pt-lg-3 mb-4 mb-lg-5"><a href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/artboard-watch.jpg" alt="" /></a>
                        <div className="px-4 position-relative z-index-2 mt-n3"><a className="text-dark text-decoration-none" href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html">
                            <h3>Swiss<br />All<br />Black     </h3>
                            <p className="text-muted">$149.90</p></a>
                            <p> <a className="btn btn-link text-dark text-decoration-none px-0" href="https://demo.bootstrapious.com/sell/2-0-1/detail-2.html"> Shop now                       </a></p>
                        </div>
                    </div>
                    <div className="col-lg-8 ms-auto">
                        <div className="position-absolute z-index-5 py-6"><a className="text-dark text-decoration-none" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">
                            <h2>Ethnic<br />design<br />everywhere     </h2>
                            <p className="text-muted">$39.90</p></a>
                            <p> <a className="btn btn-link text-dark text-decoration-none px-0" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"> Shop now      </a></p>
                        </div>
                        <div className="ms-6"><a href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/photo/serrah-galos-494279-unsplash-square.jpg" alt="" /></a></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-danger">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-white text-center py-7">
                        <h2 className="display-4 text-uppercase mb-4">Final sales</h2>
                        <p className="mb-0">Up to</p>
                        <h2 className="display-1 fw-bold mb-3">70%</h2>
                        <p className="mb-5">* Free shipping on orders over $70.</p>
                        <p><a className="btn btn-outline-light" href="index5.html#">Shop now</a></p>
                    </div>
                    <div className="col-lg-6" style={{ background: "right bottom url(https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/photo/sale-circle.jpg) no-repeat; background-size: contain;" }}></div>
                </div>
            </div>
        </section>
        <section className="py-6">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 mx-auto text-center mb-5">
                        <h3 className="text-uppercase">Last viewed products</h3>
                    </div>
                </div>
                {/* <!--  Products Slider--> */}
                <div className="owl-carousel owl-theme product-slider">
                    {/* <!--  product--> */}
                    <div className="product-slider-item">
                        <div className="product">
                            <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/serrah-galos-494231-unsplash.jpg" alt="product" />
                                <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"></a>
                                    <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-muted text-sm mb-1">Jackets</p>
                                <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Striped T-Shirt</a></h3><span className="text-muted">$40.00</span>
                            </div>
                        </div>
                    </div>
                    {/* <!--  /product--> */}
                    {/* <!--  product--> */}
                    <div className="product-slider-item">
                        <div className="product">
                            <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/averie-woodard-319832-unsplash.jpg" alt="product" />
                                <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"></a>
                                    <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-muted text-sm mb-1">Shirts</p>
                                <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Short top</a></h3><span className="text-muted">$40.00</span>
                            </div>
                        </div>
                    </div>
                    {/* <!--  /product--> */}
                    {/* <!--  product--> */}
                    <div className="product-slider-item">
                        <div className="product">
                            <div className="product-image">
                                <div className="ribbon ribbon-danger">Sold out</div><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/serrah-galos-494279-unsplash.jpg" alt="product" />
                                <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"></a>
                                    <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-muted text-sm mb-1">Sweaters</p>
                                <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Ethnic Sweater</a></h3><span className="text-muted">$40.00</span>
                            </div>
                        </div>
                    </div>
                    {/* <!--  /product--> */}
                    {/* <!--  product--> */}
                    <div className="product-slider-item">
                        <div className="product">
                            <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/dmitriy-ilkevich-437760-unsplash.jpg" alt="product" />
                                <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"></a>
                                    <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-muted text-sm mb-1">Coats</p>
                                <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Beige</a></h3><span className="text-muted">$40.00</span>
                            </div>
                        </div>
                    </div>
                    {/* <!--  /product--> */}
                    {/* <!--  product--> */}
                    <div className="product-slider-item">
                        <div className="product">
                            <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/ian-dooley-347968-unsplash.jpg" alt="product" />
                                <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"></a>
                                    <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-muted text-sm mb-1">T-Shirts</p>
                                <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Skull Tee</a></h3><span className="text-muted">$40.00</span>
                            </div>
                        </div>
                    </div>
                    {/* <!--  /product--> */}
                    {/* <!--  product--> */}
                    <div className="product-slider-item">
                        <div className="product">
                            <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/alex-holyoake-571682-unsplash.jpg" alt="product" />
                                <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"></a>
                                    <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-muted text-sm mb-1">Denim</p>
                                <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Trucker jacket</a></h3><span className="text-muted">$40.00</span>
                            </div>
                        </div>
                    </div>
                    {/* <!--  /product--> */}
                    {/* <!--  product--> */}
                    <div className="product-slider-item">
                        <div className="product">
                            <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/ao-456813-unsplash.jpg" alt="product" />
                                <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"></a>
                                    <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-muted text-sm mb-1">Denim</p>
                                <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Blouse</a></h3><span className="text-muted">$40.00</span>
                            </div>
                        </div>
                    </div>
                    {/* <!--  /product--> */}
                    {/* <!--  product--> */}
                    <div className="product-slider-item">
                        <div className="product">
                            <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/kyle-loftus-592041-unsplash.jpg" alt="product" />
                                <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"></a>
                                    <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-muted text-sm mb-1">Denim</p>
                                <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="https://demo.bootstrapious.com/sell/2-0-1/detail.html">Shirt</a></h3><span className="text-muted">$40.00</span>
                            </div>
                        </div>
                    </div>
                    {/* <!--  /product--> */}
                </div>
            </div>
        </section>
        {/* <!--  Footer--> */}
        <footer className="main-footer">
            {/* <!--  Services block--> */}
            <div className="bg-gray-100 text-dark-700 py-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 service-column">
                            <svg className="svg-icon service-icon">
                                <use xlinkHref="#delivery-time-1"> </use>
                            </svg>
                            <div className="service-text">
                                <h6 className="text-uppercase">Free shipping &amp; return</h6>
                                <p className="text-muted fw-light text-sm mb-0">Free Shipping over $300</p>
                            </div>
                        </div>
                        <div className="col-lg-4 service-column">
                            <svg className="svg-icon service-icon">
                                <use xlinkHref="#money-1"> </use>
                            </svg>
                            <div className="service-text">
                                <h6 className="text-uppercase">Money back guarantee</h6>
                                <p className="text-muted fw-light text-sm mb-0">30 Days Money Back Guarantee</p>
                            </div>
                        </div>
                        <div className="col-lg-4 service-column">
                            <svg className="svg-icon service-icon">
                                <use xlinkHref="#customer-support-1"> </use>
                            </svg>
                            <div className="service-text">
                                <h6 className="text-uppercase">020-800-456-747</h6>
                                <p className="text-muted fw-light text-sm mb-0">24/7 Available Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--  Main block - menus, subscribe form--> */}
            <div className="py-6 bg-gray-300 text-muted">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="fw-bold text-uppercase text-lg text-dark mb-3">Sell<span className="text-primary">.</span></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a className="text-muted text-primary-hover" href="index5.html#" target="_blank" title="twitter"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a className="text-muted text-primary-hover" href="index5.html#" target="_blank" title="facebook"><i className="fab fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a className="text-muted text-primary-hover" href="index5.html#" target="_blank" title="instagram"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a className="text-muted text-primary-hover" href="index5.html#" target="_blank" title="pinterest"><i className="fab fa-pinterest"></i></a></li>
                                <li className="list-inline-item"><a className="text-muted text-primary-hover" href="index5.html#" target="_blank" title="vimeo"><i className="fab fa-vimeo"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                            <h6 className="text-uppercase text-dark mb-3">Shop</h6>
                            <ul className="list-unstyled">
                                <li> <a className="text-muted" href="index5.html#">For Women</a></li>
                                <li> <a className="text-muted" href="index5.html#">For Men</a></li>
                                <li> <a className="text-muted" href="index5.html#">Stores</a></li>
                                <li> <a className="text-muted" href="index5.html#">Our Blog</a></li>
                                <li> <a className="text-muted" href="index5.html#">Shop</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                            <h6 className="text-uppercase text-dark mb-3">Company</h6>
                            <ul className="list-unstyled">
                                <li> <a className="text-muted" href="index5.html#">Login                    </a></li>
                                <li> <a className="text-muted" href="index5.html#">Register                    </a></li>
                                <li> <a className="text-muted" href="index5.html#">Wishlist                    </a></li>
                                <li> <a className="text-muted" href="index5.html#">Our Products                    </a></li>
                                <li> <a className="text-muted" href="index5.html#">Checkouts                    </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h6 className="text-uppercase text-dark mb-3">Daily Offers & Discounts</h6>
                            <p className="mb-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                            <form action="index5.html#" id="newsletter-form">
                                <div className="input-group mb-3">
                                    <input className="form-control bg-transparent border-secondary border-end-0" type="email" placeholder="Your Email Address" aria-label="Your Email Address" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary border-start-0" type="submit"> <i className="fa fa-paper-plane text-lg text-dark"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--  Copyright section of the footer--> */}
            <div className="py-4 fw-light bg-gray-800 text-gray-300">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-md-0">&copy; 2020 Your company.  All rights reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end">
                                <li className="list-inline-item"><img className="w-2rem" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/visa.svg" alt="..." /></li>
                                <li className="list-inline-item"><img className="w-2rem" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/mastercard.svg" alt="..." /></li>
                                <li className="list-inline-item"><img className="w-2rem" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/paypal.svg" alt="..." /></li>
                                <li className="list-inline-item"><img className="w-2rem" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/western-union.svg" alt="..." /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!--  /Footer end--> */}
        <div id="scrollTop"><i className="fa fa-long-arrow-alt-up"></i></div>
        <button className="btn btn-primary btn-sm d-none d-lg-block" type="button" data-bs-toggle="collapse" data-bs-target="#style-switch" id="style-switch-button"><i className="fa fa-cog fa-2x"></i></button>
        <div className="collapse" id="style-switch">
            <div className="p-3">
                <h6 className="text-uppercase mb-4">Select theme colour</h6>
                <form className="mb-3">
                    <select className="form-select style-switch-select" name="colour" id="colour">
                        <option value="">select colour variant</option>
                        <option value="css/style.default.7acfaf01.css">blue</option>
                        <option value="css/style.pink.bcb9f645.css">pink</option>
                        <option value="css/style.green.eba38840.css">green</option>
                        <option value="css/style.red.e64fe507.css">red</option>
                        <option value="css/style.violet.00703a6d.css">violet</option>
                    </select>
                </form>
                <p className="text-muted text-sm">Stylesheet switching is done with JavaScript and can cause a blink while page loads. This will not happen in your production code.</p>
            </div>
        </div>
    </div>

    );
}

export default HomePage;