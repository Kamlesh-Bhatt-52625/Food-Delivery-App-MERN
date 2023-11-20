import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></Link>
          <span class="text-muted">© 2023 QuickEats, Inc</span>
        </div>

        {/* SocialMedia Section*/}
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <Link class="text-muted" to="/">
              <svg class="bi" width="24" height="24">
                {/* Logo for SocicalMedia */}
              </svg>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
