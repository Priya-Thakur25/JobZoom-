const Header = () =>{
    return (
        <>
          <header
  id="header"
  className="desktop_header navbar navbar-expand-lg bg-white navbar-end navbar-absolute-top navbar-light navbar-show-hide  pb-0"
  data-hs-header-options='{"fixMoment": 0, "fixEffect": "slide"}'
>
  <div className="container" id="topContainer">
    <nav
      className="js-mega-menu navbar-nav-wrap"
      style={{ justifyContent: "space-between" }}
    >
      <div>
        <button
          className="navbar-toggler iqbal"
          type="button"
          id="mobile-nav"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMobileNavlink"
          aria-controls="offcanvasMobileNavlink"
        >
          <span className="navbar-toggler-default">
            <i className="bi-list" />
          </span>
          <span className="navbar-toggler-toggled">
            <i className="bi-x" />
          </span>
        </button>
        <a
          className="navbar-brand"
          href="https://www.jobaaj.com/"
          aria-label="Front"
        >
          <img
            className="navbar-brand-logo"
            src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/svg/logos/jobaaj.png"
            width={80}
            height={60}
            alt="Logo"
          />
        </a>
      </div>
      <div id="mobile_login_div">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n          @media screen and (max-width:900px) {\n\n            #mobile-nav {\n              margin-left: 10px\n            }\n          }\n        "
          }}
        />
        <div className="p-2 me-2">
          <a
            className="btn btn-primary"
            href="https://www.jobaaj.com/jobs"
            style={{ padding: "5px 15px" }}
          >
            Jobs <i className="bi bi-briefcase-fill" />
          </a>
        </div>
        <div id="mobile-login">
          <a
            id="mobile_login_btn"
            style={{ fontSize: 16 }}
            href="javascript:;"
            onclick="showLogin()"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarSignup"
            aria-controls="offcanvasNavbarSignup"
            aria-label="mobile login icon"
          >
            <span>
              <i className="bi bi-person-circle" style={{ fontSize: 28 }} />
            </span>
          </a>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        @media only screen and (min-width:992px) {\n          #services_dropdown {\n            min-width: 26rem !important\n          }\n        }\n      "
        }}
      />
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="hs-has-mega-menu nav-item">
            <a
              id="landingsMegaMenu"
              className="hs-mega-menu-invoker nav-link dropdown-toggle"
              aria-current="page"
              role="button"
              aria-expanded="false"
            >
              Find Jobs
            </a>
            <div
              className="hs-mega-menu dropdown-menu p-0"
              aria-labelledby="landingsMegaMenu"
              id="jobs"
              style={{ minWidth: "30rem", width: "65%!important" }}
            >
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block">
                  <div
                    className="navbar-dropdown-menu-banner"
                    style={{
                      backgroundImage:
                        "url(https://cdn.nishtyainfotech.com/content/jobaaj/assets/svg/components/shape-3.svg)"
                    }}
                  >
                    <div className="navbar-dropdown-menu-banner-content">
                      <div className="mb-4">
                        <span className="h2 d-block">Find Jobs</span>
                        <p>
                          India's leading job portal with deep expertise in the
                          Accounting, Finance &amp; Data Industry.
                        </p>
                      </div>
                      <a
                        className="btn btn-primary btn-transition"
                        href="https://www.jobaaj.com/jobs"
                        target="_blank"
                      >
                        All Jobs
                        <i className="bi-chevron-right small" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="navbar-dropdown-menu-inner p-0">
                    <div className="row">
                      <div className="col-sm mb-3 p-0">
                        <span className="dropdown-header">
                          Popular Categories
                        </span>
                        <a
                          className="dropdown-item text-wrap mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/taxation-jobs?f_area=3"
                          target="_blank"
                        >
                          Taxation
                        </a>
                        <a
                          className="dropdown-item text-wrap mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/finance-jobs?f_area=4"
                          target="_blank"
                        >
                          Finance
                        </a>
                        <a
                          className="dropdown-item text-wrap mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/investment-banking-private-equity-vc-jobs?f_area=5"
                          target="_blank"
                        >
                          Investment Banking, Private Equity &amp; VC
                        </a>
                        <a
                          className="dropdown-item text-wrap mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/data-science-analytics-machine-learning-jobs?f_area=12"
                          target="_blank"
                        >
                          Data Science, Analytics &amp; Machine Learning
                        </a>
                        <a
                          className="dropdown-item text-wrap mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/management-strategic-consulting-jobs?f_area=16"
                          target="_blank"
                        >
                          Management/Strategic Consulting
                        </a>
                        <a
                          className="dropdown-item text-wrap mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/product-management-jobs?f_area=18"
                          target="_blank"
                        >
                          Product Management
                        </a>
                        <a
                          className="dropdown-item text-wrap mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/business-development-jobs?f_area=19"
                          target="_blank"
                        >
                          Business Development
                        </a>
                        <a
                          className="dropdown-item text-wrap mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/human-resource-talent-acquisition-jobs?f_area=20"
                          target="_blank"
                        >
                          Human Resource (HR)/ Talent Acquisition
                        </a>
                        <a
                          className="dropdown-item text-wrap mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/digital-marketing-jobs?f_area=21"
                          target="_blank"
                        >
                          Digital Marketing/Marketing
                        </a>
                        <a
                          className="dropdown-item text-wrap mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/it-software-development-jobs?f_area=22"
                          target="_blank"
                        >
                          IT/ Software Development &amp; Related Jobs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="navbar-dropdown-menu-inner p-0">
                    <div className="row">
                      <div className="col-sm mb-3 p-0">
                        <span className="dropdown-header">
                          Popular Locations
                        </span>
                        <a
                          className="dropdown-item mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/jobs-in-noida?l=noida"
                          target="_blank"
                        >
                          Jobs in Noida
                        </a>
                        <a
                          className="dropdown-item mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/jobs-in-delhi?l=delhi"
                          target="_blank"
                        >
                          Jobs in Delhi
                        </a>
                        <a
                          className="dropdown-item mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/jobs-in-bangalore?l=bangalore"
                          target="_blank"
                        >
                          Jobs in Bangalore
                        </a>
                        <a
                          className="dropdown-item mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/jobs-in-chennai?l=chennai"
                          target="_blank"
                        >
                          Jobs in Chennai
                        </a>
                        <a
                          className="dropdown-item mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/jobs-in-pune?l=pune"
                          target="_blank"
                        >
                          Jobs in Pune
                        </a>
                        <a
                          className="dropdown-item mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/jobs-in-gurugram?l=gurugram"
                          target="_blank"
                        >
                          Jobs in Gurugram
                        </a>
                        <a
                          className="dropdown-item mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/jobs-in-mumbai?l=mumbai"
                          target="_blank"
                        >
                          Jobs in Mumbai
                        </a>
                        <a
                          className="dropdown-item mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/jobs-in-hyderabad?l=hyderabad"
                          target="_blank"
                        >
                          Jobs in Hyderabad
                        </a>
                        <a
                          className="dropdown-item mb-0 pb-0"
                          href="https://www.jobaaj.com/jobs/jobs-in-kolkata?l=kolkata"
                          target="_blank"
                        >
                          Jobs in Kolkata
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="hs-has-sub-menu nav-item">
            <a
              id="Services"
              className="hs-mega-menu-invoker nav-link dropdown-toggle"
              aria-current="page"
              role="button"
              aria-expanded="false"
            >
              Services
            </a>
            <div
              className="hs-sub-menu dropdown-menu w-100"
              aria-labelledby="companyMegaMenu"
              id="services_dropdown"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="navbar-dropdown-menu-inner">
                    <span className="dropdown-header px-0">
                      Jobseeker Services
                    </span>
                    <a
                      className="dropdown-item px-0"
                      href="https://www.jobaaj.com/jobseeker-services"
                      id="jobseeker"
                    >
                      All Jobseeker Services
                    </a>
                    <a
                      className="dropdown-item px-0"
                      href="https://www.jobaaj.com/placement-assistance-service"
                      id="placement"
                    >
                      Placement Assistance
                    </a>
                    <a
                      className="dropdown-item px-0"
                      href="https://www.jobaaj.com/resume-writing-service"
                      id="resume"
                    >
                      Resume Writing
                    </a>
                    <a
                      className="dropdown-item px-0"
                      href="https://linkedinoptimizer.jobaaj.com/?utm_source=jobaaj_main&utm_medium=navbar&utm_campaign=tracking"
                      target="blank"
                    >
                      Linkedin Optimizer
                      <span className="badge bg-danger rounded-pill ms-1">
                        Hot
                      </span>
                    </a>
                    <a
                      className="dropdown-item px-0"
                      href="https://resume.jobaaj.com/?utm_source=jobaaj_main&utm_medium=navbar&utm_campaign=tracking"
                      target="blank"
                    >
                      Resume Builder
                      <span className="badge bg-danger rounded-pill ms-1">
                        Hot
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="navbar-dropdown-menu-inner">
                    <span className="dropdown-header px-0">
                      Recruiter Services
                    </span>
                    <a
                      className="dropdown-item px-0"
                      href="https://www.jobaaj.com/recruiter-services"
                    >
                      Consultancy &amp; Database
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="hs-has-mega-menu nav-item m-1">
            <a
              id="landingsMegaMenu"
              className="hs-mega-menu-invoker nav-link dropdown-toggle"
              aria-current="page"
              role="button"
              aria-expanded="false"
            >
              Workshops{" "}
              <span className="badge bg-primary rounded-pill ms-1">Free</span>
            </a>
            <div
              className="hs-mega-menu dropdown-menu"
              aria-labelledby="landingsMegaMenu"
              id="jobs"
              style={{ minWidth: "30rem", width: "65%!important" }}
            >
              <h5 className="mt-2 ms-4" style={{ color: "#444" }}>
                Upcoming Workshops
              </h5>
              <div className="row ms-5 upcoming-workshop p-3 py-4">
                <div className="col-lg-4 d-lg-block">
                  <a
                    className="d-block"
                    target="_blank"
                    href="https://go.jobaaj.com/Shubham-Agarwal?utm_source=jobaaj&utm_medium=header&utm_campaign=mgmtworkshop"
                  >
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="event-date">
                          <span>
                            07
                            <br />
                            Sep
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="text-inherit mb-0 mt-1 work-title">
                          2 days Management Consulting Workshop
                        </h6>
                      </div>
                    </div>
                  </a>
                  <a
                    className="d-block"
                    target="_blank"
                    href="https://go.jobaaj.com/tableau-workshop-p1?utm_source=jobaaj&utm_medium=header&utm_campaign=dataworkshop"
                  >
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="event-date">
                          <span>
                            08
                            <br />
                            Sep
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="text-inherit mb-0 mt-1 work-title">
                          5 Days Kickstart Data Science Workshop{" "}
                        </h6>
                      </div>
                    </div>
                  </a>
                  <a
                    className="d-block"
                    target="_blank"
                    href="https://go.jobaaj.com/google_ads?utm_source=jobaaj&utm_medium=header&utm_campaign=googleworkshop"
                  >
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="event-date">
                          <span>
                            07
                            <br />
                            Sep
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="text-inherit mb-0 mt-1 work-title">
                          Supercharge Your Online Marketing with our Free
                          Digital Marketing Workshop
                        </h6>
                      </div>
                    </div>
                  </a>
                  <a
                    className="d-block"
                    target="_blank"
                    href="https://go.jobaaj.com/financial_modelling?utm_source=jobaaj&utm_medium=header&utm_campaign=financeworkshop"
                  >
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="event-date">
                          <span>
                            08
                            <br />
                            Sep
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="text-inherit mb-0 mt-1 work-title">
                          Financial Modelling Workshop
                        </h6>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.jobaajlearnings.com/workshop?utm_source=jobaaj&utm_medium=header&utm_campaign=workshops"
                    target="_blank"
                    className="my-3"
                    style={{ color: "#387dff" }}
                  >
                    <br />
                    All Workshops <i className="bi bi-arrow-right-short" />
                  </a>
                </div>
                <div className="col-lg-2" />
                <div className="col-lg-5">
                  <a
                    className="d-block mb-3"
                    href="https://www.jobaajlearnings.com/podcast"
                  >
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="">
                          <img
                            src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/career_opportunities.webp"
                            style={{ width: 185, height: 110 }}
                            alt="career_opportunities"
                          />
                          {/* <iframe style="border-radius:5px;" src="https://www.youtube.com/embed/dtQ5UP8HUek?autoplay=0&amp;showinfo=0&amp;controls=0" allowfullscreen=""  width="185px" height="110px"></iframe> */}
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5
                          className="text-inherit mb-2"
                          style={{
                            fontWeight: 500,
                            lineHeight: 25,
                            color: "#333"
                          }}
                        >
                          Career Opportunities in Equity Research &amp;
                          Investment Banking
                        </h5>
                        <p style={{ fontSize: ".8rem", color: "grey" }}>
                          What is Investment Banking ? How to do Equity Research
                          ?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="d-block mb-3"
                    href="https://www.jobaajlearnings.com/podcast"
                  >
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="">
                          <img
                            src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/leveraging_data.webp"
                            style={{ width: 185, height: 110 }}
                            alt="leveraging_data"
                          />
                          {/* <iframe style="border-radius:5px;" src="https://www.youtube.com/embed/GK_HoaznLrM?autoplay=0&amp;showinfo=0&amp;controls=0" allowfullscreen=""  width="185px" height="110px"></iframe> */}
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5
                          className="text-inherit mb-2"
                          style={{
                            fontWeight: 500,
                            lineHeight: 25,
                            color: "#333"
                          }}
                        >
                          Leveraging Data Is The Secret To Dubai's Rapid Growth
                        </h5>
                        <p style={{ fontSize: ".8rem", color: "grey" }}>
                          Are you curious to know what’s the secret behind
                          Dubai’s rapid growth? We are too! In this podcast,
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="d-block mb-3"
                    href="https://www.jobaajlearnings.com/podcast"
                  >
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="">
                          <img
                            src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/secret_behind.webp"
                            style={{ width: 185, height: 110 }}
                            alt="secret_behind"
                          />
                          {/* <iframe style="border-radius:5px;" src="https://www.youtube.com/embed/TuKb70N33N0?autoplay=0&amp;showinfo=0&amp;controls=0" allowfullscreen=""  width="185px" height="110px"></iframe> */}
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5
                          className="text-inherit mb-2"
                          style={{
                            fontWeight: 500,
                            lineHeight: 25,
                            color: "#333"
                          }}
                        >
                          The Secret Behind Dubai's Growth :: Management
                          Consulting
                        </h5>
                        <p style={{ fontSize: ".8rem", color: "grey" }}>
                          Ever wondered what’s the secret behind Dubai’s growth?
                          We did too, and unraveled it ....
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.jobaajlearnings.com/podcast"
                    target="_blank"
                    className="my-3"
                    style={{ color: "#387dff" }}
                  >
                    More Podcasts <i className="bi bi-arrow-right-short" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link free"
              style={{
                padding: ".5rem .75rem",
                fontWeight: 600,
                borderBottom: "4px solid #f5ca9980"
              }}
              href="https://www.jobaaj.com/post-free-jobs"
            >
              Post Jobs
              <span
                id="free-badge"
                className="badge child rounded-pill ms-1 text-primary border"
              >
                Free
              </span>
            </a>
          </li>
          <li className="hs-has-sub-menu nav-item">
            <a
              id="learning"
              className="hs-mega-menu-invoker nav-link dropdown-toggle"
              aria-current="page"
              role="button"
              aria-expanded="false"
            >
              Others
            </a>
            <div
              className="hs-sub-menu dropdown-menu"
              aria-labelledby="accountMegaMenu"
              style={{ minWidth: "16rem!important" }}
            >
              <span className="dropdown-header">Quick Links</span>
              <a
                className="dropdown-item"
                href="https://www.jobaaj.com/about-us"
                id="about_us"
              >
                About us
              </a>
              <a
                className="dropdown-item"
                href="https://www.jobaaj.com/contact-us"
                id="contact_us"
              >
                Contact us
              </a>
              <a
                className="dropdown-item"
                href="https://www.jobaaj.com/blogs"
                id="blogs"
              >
                Our Blogs
              </a>
              <a
                className="dropdown-item"
                href="https://www.jobaaj.com/jobaajcares"
                id="jobaajcares"
              >
                Jobaaj Cares
              </a>
              <span className="dropdown-header">Our Brands</span>
              <a
                className="dropdown-item"
                href="https://jobaajlearnings.com/?utm_source=jobaaj_main&utm_medium=navbar&utm_campaign=tracking"
                target="blank"
              >
                Jobaaj Learnings
              </a>
              <a
                className="dropdown-item"
                href="https://stories.jobaaj.com/?utm_source=jobaaj_main&utm_medium=navbar&utm_campaign=tracking"
                target="blank"
              >
                Jobaaj Stories
              </a>
              <a
                className="dropdown-item"
                href="https://procapitas.com/?utm_source=jobaaj_main&utm_medium=navbar&utm_campaign=tracking"
                target="blank"
              >
                ProCapitas
              </a>
              <a
                className="dropdown-item"
                href="https://workcafe.jobaaj.com/?utm_source=jobaaj_main&utm_medium=footer&utm_campaign=tracking"
                target="blank"
              >
                Work Cafe
              </a>
            </div>
          </li>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n              .color {\n                background-color: #377dff;\n                color: #fff !important\n              }\n            "
            }}
          />
          <li className="nav-item d-none d-lg-inline-block ml-auto">
            <a
              className="btn btn-outline-primary"
              id="loginBtnNav"
              style={{ borderRadius: "2rem", fontSize: 16 }}
              href="javascript:;"
              onclick="showLogin()"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbarSignup"
              aria-controls="offcanvasNavbarSignup"
            >
              <span>
                Login/Register
                <i className="bi-person-fill" />
              </span>
            </a>
          </li>
          <li className="nav-item d-lg-none d-inline-block ml-auto">
            <a
              className="nav-link"
              data-bs-toggle="offcanvas"
              style={{ fontSize: 16 }}
              href="javascript:;"
              onclick="showLogin()"
              data-bs-target="#offcanvasNavbarSignup"
              aria-controls="offcanvasNavbarSignup"
            >
              <span>
                Login/Register
                <i className="bi-person-fill" />
              </span>
            </a>
          </li>
          <li className="nav-item ms-lg-2">
            <a
              className="btn btn-primary btn-transition"
              id="hiringNav"
              href="https://www.jobaaj.com/careers#hiringforus"
              style={{ borderRadius: "2rem", fontSize: 16 }}
            >
              Our Clients Openings
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      .fs-lg-3 {\n        font-size: 1.3125rem !important;\n      }\n\n      @media screen and (max-width:800px) {\n        .fs-sm-5 {\n          font-size: 1rem !important;\n        }\n      }\n    "
    }}
  />
  <div
    className="d-flex justify-content-center align-items-center gap-2 px-3 buy-now-section gap-lg-3 gap-1 flex-wrap premium-membership"
    style={{ background: "#0f09c8", padding: "10px 0", color: "white" }}
  >
    <div className="text-center">
      <p className="fs-sm-5 fs-lg-3 mb-0">
        {" "}
        Get Career Booster pack
        <span>
          @
          <b style={{ fontFamily: '"Water Brush", cursive' }} className="fs-1">
            <span className="fs-2">₹</span>99
          </b>
        </span>
        <span style={{ fontFamily: '"Water Brush", cursive' }}>
          <strike>9999</strike>
        </span>
      </p>
    </div>
    <a
      href="https://www.jobaaj.com/premium-membership"
      className="btn btn-danger rounded-pill  btn-sm"
    >
      Take a look <i className="bi-chevron-right small ms-1" />
    </a>
  </div>
</header>
  
        </>
    )
}
export default Header;