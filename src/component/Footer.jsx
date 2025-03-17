const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Internships by Places */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Internships by places</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              "Internship in India",
              "Internship in Delhi",
              "Internship in Bangalore",
              "Internship in Hyderabad",
              "Internship in Mumbai",
              "Internship in Chennai",
              "Internship in Gurgaon",
              "Internship in Kolkata",
              "Virtual internship",
              "View all internships",
            ].map((item, index) => (
              <li key={index} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Internship by Stream */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Internship by Stream</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              "Computer Science Internship",
              "Electronics Internship",
              "Mechanical Internship",
              "Civil Internship",
              "Marketing Internship",
              "Chemical Internship",
              "Finance Internship",
              "Summer Research Fellowship",
              "Campus Ambassador Program",
              "View all internships",
            ].map((item, index) => (
              <li key={index} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Jobs by Places */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Jobs by Places</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              "Jobs in Delhi",
              "Jobs in Mumbai",
              "Jobs in Bangalore",
              "Jobs in Jaipur",
              "Jobs in Kolkata",
              "Jobs in Hyderabad",
              "Jobs in Pune",
              "Jobs in Chennai",
              "Jobs in Lucknow",
              "View all jobs",
            ].map((item, index) => (
              <li key={index} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Placement Guarantee Courses */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Placement Guarantee Courses
          </h3>
          <ul className="space-y-2 text-gray-400">
            {[
              "Full Stack Development",
              "Data Science",
              "Human Resource Management",
              "Digital Marketing",
              "Electric Vehicle",
              "UI/UX Design",
              "Product Management",
              "Financial Modelling",
              "Supply Chain Logistics",
            ].map((item, index) => (
              <li key={index} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2">
              {[
                "About us",
                "We're hiring",
                "Hire interns for your company",
                "Post a Job",
              ].map((item, index) => (
                <li key={index} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Resources</h3>
            <ul className="mt-3 space-y-2">
              {["Team Diary", "Blog", "Our Services", "Free Job Alerts"].map(
                (item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="mt-3 space-y-2">
              {["Terms & Conditions", "Privacy", "Contact us"].map(
                (item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">More</h3>
            <ul className="mt-3 space-y-2">
              {["Sitemap", "College TPO registration", "List of Companies"].map(
                (item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm px-5 max-w-7xl mx-auto">
        <div className="flex gap-3 mb-4 md:mb-0">
          <button className="bg-gray-700 px-4 py-2 rounded-md text-white">
            Get it on Play Store
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-md text-white">
            Download on the App Store
          </button>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <p className="mt-4 md:mt-0">
          &copy; 2025 Internshala (Scholiverse Educare Private Limited)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
