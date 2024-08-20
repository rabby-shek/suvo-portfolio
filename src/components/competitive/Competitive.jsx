import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Competitive = () => {
  const [leetCodeData, setLeetCodeData] = useState(null);
  const [startCount, setStartCount] = useState(false);
  const { ref: hackerrankRef, inView: hackerrankInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Start counting when 50% of the card is in view
  });
  const { ref: leetcodeRef, inView: leetcodeInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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

  useEffect(() => {
    if (hackerrankInView || leetcodeInView) {
      setStartCount(true);
    }
  }, [hackerrankInView, leetcodeInView]);

  return (
    <section className="skills-container mt-3">
      <div className="title" data-aos="fade-up">Competitive Programming</div>
      <div className="row g-2" data-aos="fade-right">
        <div className="col-lg-6 col-sm-6">
          <div className="card hackerrank-card" ref={hackerrankRef}>
            <div className="card-body">
              <h5 className="card-title">Hacker Rank</h5>
              <p className="card-text">
                {startCount && hackerrankInView ? (
                  <CountUp start={0} end={25} duration={2} /> 
                ) : (
                  "Over 25+ Problems"
                )}
                {" "}Problems Solved
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6" data-aos="fade-left">
          <div className="card leetcode-card" ref={leetcodeRef}>
            <div className="card-body">
              <h5 className="card-title">LeetCode</h5>
              <p className="card-text">
                Over{" "}
                {startCount && leetcodeInView && leetCodeData ? (
                  <CountUp
                    start={0}
                    end={leetCodeData.totalSolved - 1}
                    duration={2}
                  />
                ) : (
                  leetCodeData ? `${leetCodeData.totalSolved - 1} Problems Solved` : "Loading..."
                )}
                {" "}Problems Solved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitive;
