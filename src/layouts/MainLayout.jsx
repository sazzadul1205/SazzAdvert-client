import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Track the scroll position and show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true); // Show button after 300px scroll
      } else {
        setShowScroll(false); // Hide button if less than 300px
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

      {/* Back to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 right-5 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
          style={{ zIndex: 1000 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default MainLayout;
