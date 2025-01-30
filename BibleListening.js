import React, { useState } from "react";
import "../styles/BibleListening.css";

const BibleListening = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="bible-listening-page">
      <header className="bible-header">
        <h1>Listen to the Bible</h1>
        <p>
          Dive into the Word of God with ease. Choose from the Old or New Testament and start
          listening to your favorite chapters today.
        </p>
      </header>

      <main className="bible-main">
        {/* Old Testament Section */}
        <section className="bible-section">
          <h2 onClick={() => toggleSection("oldTestament")} className="section-title">
            Old Testament {activeSection === "oldTestament" ? "-" : "+"}
          </h2>
          {activeSection === "oldTestament" && (
            <div className="bible-books">
              <div className="book">
                <h3>Genesis</h3>
                <p>The story of creation and God’s covenant with Abraham.</p>
                <iframe
                  src="https://www.youtube.com/embed/QcMquFbcfA0"
                  title="Genesis Audio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="book">
                <h3>Exodus</h3>
                <p>The journey of the Israelites out of Egypt and their covenant with God.</p>
                <iframe
                  src="https://www.youtube.com/embed/ZVB4-2DL4oI"
                  title="Exodus Audio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="book">
                <h3>Psalms</h3>
                <p>Poetic prayers and songs that express the heart of God’s people.</p>
                <iframe
                  src="https://www.youtube.com/embed/XMb15Wh8U4I"
                  title="Psalms Audio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section>

        {/* New Testament Section */}
        <section className="bible-section">
          <h2 onClick={() => toggleSection("newTestament")} className="section-title">
            New Testament {activeSection === "newTestament" ? "-" : "+"}
          </h2>
          {activeSection === "newTestament" && (
            <div className="bible-books">
              <div className="book">
                <h3>Matthew</h3>
                <p>The life and teachings of Jesus Christ.</p>
                <iframe
                  src="https://www.youtube.com/embed/Q6bKoXtVgXE"
                  title="Matthew Audio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="book">
                <h3>John</h3>
                <p>The gospel that emphasizes the divinity of Jesus Christ.</p>
                <iframe
                  src="https://www.youtube.com/embed/uvhQ06jvJ4E"
                  title="John Audio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="book">
                <h3>Revelation</h3>
                <p>The prophetic vision of the end times and Christ’s ultimate victory.</p>
                <iframe
                  src="https://www.youtube.com/embed/1NGth-PiLYM"
                  title="Revelation Audio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default BibleListening;
