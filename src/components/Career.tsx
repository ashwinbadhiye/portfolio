import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancing</h4>
                {/* <h5>CallHQ.ai</h5> */}
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on AI-powered automation apps and web applications that
              simplify workflows and boost efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Oriens DevSecOps, Nagpur</h4>
                <h5>Software Developer</h5>
              </div>
              <h3>2023-25</h3>
            </div>
            <p>
              <li>
                Backend Development – POSA Salud (Mobile POS for Liquor Stores)
              </li>
              Built backend services connecting a Windows POS system with a
              mobile app for sales, inventory, and vendor management. Developed
              RESTful APIs in Java and Python for DBF–MySQL synchronization,
              integrated third-party platforms like DoorDash, and created a
              Windows installer for automated deployment. Improved performance,
              reliability, and scalability through query optimization and error
              handling.
              <li>WordPress Development</li>
              Designed and maintained 15+ responsive WordPress and WooCommerce
              websites using Elementor, WPBakery, and Gutenberg. Customized
              themes and plugins, integrated payment gateways and CRMs, and
              implemented SEO and performance optimizations with ongoing
              maintenance and updates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Culturelligence, Remote</h4>
                <h5>Web Developer </h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Designed and updated website content, managed events, and
              customized layouts using Elementor, MemberPress, and EventPress.
              Collaborated with cross-functional teams to maintain consistent
              site design while gaining hands-on experience with the WordPress
              CMS and plugin customization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CDAC - ACTS, Pune</h4>
                <h5>Post Graduate Diploma in Advanced Computing (PG-DAC)</h5>
              </div>
              <h3>2022-23</h3>
            </div>
            <p>
              <li>Grade - A, 77.50%</li>
              <li>CCAT Rank - AIR 17</li>
              Project - An E-Commerce website containing variety of products for
              online products sale. It will also provide a catalog of different
              available products in store. There are 3 different login and
              registration available here which are admin, seller and customer.
              All the data is loaded and stored using SQL in the form of tables.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>G H Raisoni College of Engineering, Nagpur</h4>
                <h5>Bachelor of Engineering, Mechanical</h5>
              </div>
              <h3>2014-18</h3>
            </div>
            <p>
              <li>CGPA - 7.51</li>
              Project - Design and development of charcoal cooler is for
              increasing shelf life of vegetables while slowing bacteria growth
              in hot climate zone, basically it is for poor farmers who cannot
              afford refrigerated cool storages as they are expensive to buy and
              run and also harms our environment, charcoal cooler is an
              eco-friendly system & provides natural cooling and does not harm
              anything. <br />
              Patent Filed - <br />
              Application ID 201821012328, <br />
              Date of Application 2018-03-31, <br />
              Publication Number 40/2019
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSSC (Higher Secondary School Certificate)</h4>
                <h5>Nagpur Board</h5>
              </div>
              <h3>2014</h3>
            </div>
            <p>
              <li>Percentage - 70.72%</li>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSC (Secondary School Certificate)</h4>
                <h5>Nagpur Board</h5>
              </div>
              <h3>2012</h3>
            </div>
            <p>
              <li>Percentage - 87.82%</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
