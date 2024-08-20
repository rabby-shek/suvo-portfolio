import React, { useEffect, useState } from "react";

const Competitive = () => {
  const [leetCodeData, setLeetCodeData] = useState(null);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch("https://leetcode-stats-api.herokuapp.com/rabbyshek");
        const data = await response.json();
        setLeetCodeData(data);
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    fetchLeetCodeData();
  }, []);

  return (
    <section className="skills-container mt-3">
      <div className="title" data-aos="fade-up">Competitive Programming</div>
      <div className="row g-2" data-aos="fade-right">
        <div className="col-lg-6 col-sm-6">
          <div className="card hackerrank-card">
            <div className="card-body">
              <h5 className="card-title">Hacker Rank</h5>
              <p className="card-text">
                Over 25+ Problems
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6" data-aos="fade-left">
          <div className="card leetcode-card">
            <div className="card-body">
              <h5 className="card-title">LeetCode</h5>
              <p className="card-text">
               Over {leetCodeData ? `${leetCodeData.totalSolved - 1}+ Problems Solved` : "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitive;
