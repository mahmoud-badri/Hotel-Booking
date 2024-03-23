function Footer() {
    return (
    <footer className="bg-dark text-white m-5">
    <div className="container py-4">
    <div className="row">
    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
    <h5 className="text-uppercase mb-4">About Us</h5>
    <p>
    At vero eos et accusamus et iusto odio dignissimos ducimus qui
    blanditiis praesentium voluptatum deleniti atque corrupti.
    </p>
    <p>
    Blanditiis praesentium voluptatum deleniti atque corrupti quos
    dolores et quas molestias.
    </p>
    <div className="mt-4">
    <a href="#" className="btn btn-floating btn-danger btn-md">
    <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" className="btn btn-floating btn-danger btn-md">
    <i className="fab fa-dribbble"></i>
    </a>
    <a href="#" className="btn btn-floating btn-danger btn-md">
    <i className="fab fa-twitter"></i>
    </a>
    <a href="#" className="btn btn-floating btn-danger btn-md">
    <i className="fab fa-google-plus-g"></i>
    </a>
    </div>
    </div>
    
    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
    <h5 className="text-uppercase mb-4 pb-1">Search</h5>
    <div className="input-group mb-4">
    <input
    type="text"
    className="form-control"
    placeholder="Search"
    aria-label="Search"
    aria-describedby="button-addon2"
    />
    <button
    className="btn btn-danger"
    type="button"
    id="button-addon2"
    >
    Go
    </button>
    </div>
    <ul className="list-unstyled">
    <li className="mb-3">
    <i className="fas fa-home"></i> New York, NY 10012, US
    </li>
    <li className="mb-3">
    <i className="fas fa-envelope"></i> info@example.com
    </li>
    <li className="mb-3">
    <i className="fas fa-phone"></i> +01 234 567 88
    </li>
    <li className="mb-3">
    <i className="fas fa-print"></i> +01 234 567 89
    </li>
    </ul>
    </div>
    
    <div className="col-lg-4 col-md-12">
    <h5 className="text-uppercase mb-4">Opening Hours</h5>
    <table className="table text-center text-white">
    <tbody className="font-weight-normal">
    <tr>
    <td>Mon - Thu:</td>
    <td>8am - 9pm</td>
    </tr>
    <tr>
    <td>Fri - Sat:</td>
    <td>8am - 1am</td>
    </tr>
    <tr>
    <td>Sunday:</td>
    <td>9am - 10pm</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </div>
    <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
    © 2024 Your Company. All rights reserved.
    </div>
    </footer>
    );
    }
    
    export default Footer;