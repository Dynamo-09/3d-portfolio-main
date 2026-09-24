import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
        Data Analyst and Computer Science graduate with hands-on experience in Python, SQL, Power BI, Tableau, Exploratory Data Analysis (EDA), Data
cleaning, ETL, Data pipelines, Business Intelligence, and data visualization. Experienced in transforming raw and unstructured data into analysisready datasets, optimizing SQL queries, building interactive dashboards, tracking KPIs, and communicating trends through business-focused insights.
Strong foundation in Machine Learning with Scikit-learn and TensorFlow, with additional experience in MySQL, AWS, FastAPI, and React.js.

        <div style={{ marginTop: "30px" }}>
          <h4 style={{ color: "var(--accentColor)", fontSize: "24px", marginBottom: "15px" }}>AI Tools Known</h4>
          <p className="para" style={{ fontSize: "18px" }}>
            Julius.AI, Quadratic.AI, Ask Your Database, Claude, Antigravity, and Cursor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
