import React from "react";
import Navbar from "../../components/Navbar"; // Adjust the import path as needed
import Footer from "../../components/Footer"; // Adjust the import path as needed
// import search from "../../images/Search.png";
import arf from "../../images/arf.png";
import bigeyes from "../../images/bigeyes.png";
import color from "../../images/art3 1.png";

const ArtsSection = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Creative Activities</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Virtual Coloring Book */}
          <div className="bg-[#F5D4B4] p-6 rounded-lg text-center">
            <img src={arf} alt="Virtual Coloring Book" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Virtual Coloring Book</h2>
            <p>Engage in fun coloring activities with our virtual coloring book. Choose from various themes and colors.</p>
          </div>

          {/* Drawing Tutorials */}
          <div className="bg-[#F5D4B4] p-6 rounded-lg text-center">
            <img src={bigeyes} alt="Drawing Tutorials" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Drawing Tutorials</h2>
            <p>Follow our easy drawing tutorials to create amazing artworks. Perfect for beginners!</p>
          </div>

          {/* Craft Ideas */}
          <div className="bg-[#F5D4B4] p-6 rounded-lg text-center">
            <img src={color} alt="Craft Ideas" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Craft Ideas</h2>
            <p>Explore creative craft ideas that children can easily make with common household items.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtsSection;
