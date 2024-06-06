import React from "react";
import SoloLearnCSSCertificate from "../../assets/images/css-solo-learn-cirtificate.png";
import SoloLearnJSCertificate from '../../assets/images/solo-l-js.png';
import SoloLearnResponsiveCertificate from '../../assets/images/solo-learn-responsive.png';
import IntroAlgorithmCertificate from '../../assets/images/introduction-algorithm-data-structure.png';
import GoogleCertificate1 from '../../assets/images/google-colab-1.PNG';
import GoogleCertificate2 from '../../assets/images/Gemini-api-program.PNG';
import GoogleCertificate3 from '../../assets/images/Gemini-api-program.PNG';
const Certificates = () => {
  const certificateList = [
    {
      id: 1,
      path: SoloLearnCSSCertificate,
      flip: 'flip-right'
    },
    {
      id: 2,
      path: SoloLearnJSCertificate,
      flip: 'flip-left'
    },
    {
      id: 3,
      path: SoloLearnResponsiveCertificate,
      flip: 'flip-right'
    },
    {
      id: 4,
      path: IntroAlgorithmCertificate,
      flip: 'flip-left'
    },
    {
      id: 5,
      path: GoogleCertificate1,
      flip: 'flip-right'
    },
    {
      id: 6,
      path: GoogleCertificate2,
      flip: 'flip-left'
    },
    {
      id: 7,
      path: GoogleCertificate3,
      flip: 'flip-right'
    },
  ];
  return (
    <section className="certificate-container">
      <div className="container">
        <div className="title" data-aos="fade-up">Certificates</div>
        <div className="row g-3">
          {certificateList.map((certificate) => {
            return (
              <div key={certificate.id} className="col-lg-6 col-sm-6" data-aos={certificate.flip}>
                <img src={certificate.path} alt="certificate" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
