import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { context } from '../context';
//import "./question2.css"

function DigitalMarketing() {

  const quest = {
    "1": "What awesome stuff will your business offer?",
    "2": "How do you figure out what to make and how to make it?",
    "3": "How much do you expect to make, and how much will it cost to get started?",
    "4": "What could go wrong with your business, and how will you handle it?",
    "5": "Do you have any special rights to your cool ideas?",
    "6": "How will you tell people about your awesome products?",
    "7": "How can customers get your product or service?",
    "8": "What's your plan for bringing in cash?",
    "9": "How will you tell people about your awesome products?",
    "10": "What goals are you aiming for, and how will you track your progress?"
  }

  const ref = useRef(null);
  useEffect(() => {
    // window.scrollTo(0, 0);
    if (ref.current) {
      // Scroll the component into view
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  let { questions, setQuestions, addQuestions, answers, setAnswers, addAnswers, domain, setDomain } = useContext(context)
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const addQuestion = (question, answer) => {
    const updatedTechnology = {
      ...domain['digital'],
      [question]: answer
    };
    setDomain({
      ...domain,
      digital: updatedTechnology
    });
  };

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer
    });
    addQuestion(quest[questionId], answer)
  };

  return (
    <div ref={ref} className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="title text-center mb-3">Digital Marketing</h1>
          <form>
            <div className="card w-100 max-w-lg">
              <div className="card-header">
                <br></br>
                <h4 className="card-title text-center">STEP 2 OF 6</h4>

                <h5 className="card-title">Question 1</h5>
                <p className="card-text">
                  How do you plan to integrate social media marketing (YouTube,
                  Facebook, Instagram) and performance marketing (Ads) into your
                  overall digital marketing business strategy?
                </p>
              </div>
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input border-2 border-dark"
                    type="radio"
                    name="q1"
                    id="q1a1"
                    value="Integrate both equally"
                  />
                  <label className="form-check-label" htmlFor="q1a1">
                    Integrate both equally
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input border-2 border-dark"
                    type="radio"
                    name="q1"
                    id="q1a2"
                    value="Focus more on social media"
                  />
                  <label className="form-check-label" htmlFor="q1a2">
                    Focus more on social media
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input border-2 border-dark"
                    type="radio"
                    name="q1"
                    id="q1a3"
                    value="Prioritize performance marketing"
                  />
                  <label className="form-check-label" htmlFor="q1a3">
                    Prioritize performance marketing
                  </label>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text">
                    What types of clients are you targeting for your digital
                    marketing services, and how will you tailor your offerings
                    to meet their specific needs across social media platforms
                    and ad campaigns?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a1"
                      value="Small businesses"
                    />
                    <label className="form-check-label" htmlFor="q2a1">
                      Small businesses
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a2"
                      value="E-commerce companies"
                    />
                    <label className="form-check-label" htmlFor="q2a2">
                      E-commerce companies
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a3"
                      value="Enterprises"
                    />
                    <label className="form-check-label" htmlFor="q2a3">
                      Enterprises
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">
                    Can you outline the specific services you will offer for
                    social media marketing (YouTube, Facebook, Instagram) and
                    performance marketing (Ads), including campaign creation,
                    optimization, and analytics?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a1"
                      value="Comprehensive services for both"
                    />
                    <label className="form-check-label" htmlFor="q3a1">
                      Comprehensive services for both
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a2"
                      value="Specialize in one area"
                    />
                    <label className="form-check-label" htmlFor="q3a2">
                      Specialize in one area
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a3"
                      value="Customized offerings for each client"
                    />
                    <label className="form-check-label" htmlFor="q3a3">
                      Customized offerings for each client
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">
                    What expertise do you have in leveraging each social media
                    platform (YouTube, Facebook, Instagram) and advertising
                    channels for performance marketing, and how will you
                    capitalize on their unique strengths?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a1"
                      value="Extensive expertise in all platforms"
                    />
                    <label className="form-check-label" htmlFor="q4a1">
                      Extensive expertise in all platforms
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a2"
                      value="Specialized knowledge in select platforms"
                    />
                    <label className="form-check-label" htmlFor="q4a2">
                      Specialized knowledge in select platforms
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a3"
                      value="Willingness to learn and adapt"
                    />
                    <label className="form-check-label" htmlFor="q4a3">
                      Willingness to learn and adapt
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 5</h5>
                  <p className="card-text">
                    How do you plan to integrate social media marketing efforts
                    across YouTube, Facebook, and Instagram with performance
                    marketing campaigns to create cohesive and impactful digital
                    marketing strategies for your clients?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a1"
                      value="Seamless integration across all platforms"
                    />
                    <label className="form-check-label" htmlFor="q5a1">
                      Seamless integration across all platforms
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a2"
                      value="Separate strategies for each platform"
                    />
                    <label className="form-check-label" htmlFor="q5a2">
                      Separate strategies for each platform
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a3"
                      value="Flexible approach based on client needs"
                    />
                    <label className="form-check-label" htmlFor="q5a3">
                      Flexible approach based on client needs
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 6</h5>
                  <p className="card-text">
                    What strategies will you employ to effectively target and
                    engage audiences on each social media platform (YouTube,
                    Facebook, Instagram) and through performance marketing ads,
                    ensuring maximum reach and conversion potential?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a1"
                      value="Detailed audience segmentation"
                    />
                    <label className="form-check-label" htmlFor="q6a1">
                      Detailed audience segmentation
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a2"
                      value="Tailored messaging for each platform"
                    />
                    <label className="form-check-label" htmlFor="q6a2">
                      Tailored messaging for each platform
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a3"
                      value="Continuous optimization based on analytics"
                    />
                    <label className="form-check-label" htmlFor="q6a3">
                      Continuous optimization based on analytics
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 7</h5>
                  <p className="card-text">
                    How will you allocate budgets between social media marketing
                    efforts and performance marketing ad campaigns, considering
                    factors such as platform costs, ad bidding strategies, and
                    client goals?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a1"
                      value="Balanced allocation across both"
                    />
                    <label className="form-check-label" htmlFor="q7a1">
                      Balanced allocation across both
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a2"
                      value="Adjust based on campaign performance1"
                    />
                    <label className="form-check-label" htmlFor="q7a2">
                      Adjust based on campaign performance
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a3"
                      value="Client-driven budget allocation"
                    />
                    <label className="form-check-label" htmlFor="q7a3">
                      Client-driven budget allocation
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 8</h5>
                  <p className="card-text">
                    What metrics and analytics will you use to measure the
                    success of your social media marketing efforts on YouTube,
                    Facebook, and Instagram, as well as the performance of your
                    ad campaigns, and how will you report these insights to{" "}
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a1"
                      value="Comprehensive reporting with KPIs"
                    />
                    <label className="form-check-label" htmlFor="q8a1">
                      Comprehensive reporting with KPIs
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a2"
                      value="Comprehensive reporting with KPIs"
                    />
                    <label className="form-check-label" htmlFor="q8a2">
                      Comprehensive reporting with KPIs
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a3"
                      value="Emphasis on conversion tracking"
                    />
                    <label className="form-check-label" htmlFor="q8a3">
                      Emphasis on conversion tracking
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 9</h5>
                  <p className="card-text">
                    How do you plan to develop compelling ad creatives and
                    messaging that resonate with target audiences across social
                    media platforms (YouTube, Facebook, Instagram) and
                    performance marketing campaigns, driving engagement and
                    conversions?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a1"
                      value="Creative storytelling approach"
                    />
                    <label className="form-check-label" htmlFor="q9a1">
                      Creative storytelling approach
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a2"
                      value="A/B testing for ad variations"
                    />
                    <label className="form-check-label" htmlFor="q9a2">
                      A/B testing for ad variations
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a3"
                      value="Collaborative process with clients"
                    />
                    <label className="form-check-label" htmlFor="q9a3">
                      Collaborative process with clients
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>

              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 10</h5>
                  <p className="card-text">
                    Where do you see your digital marketing business in the next
                    5 years in terms of social media marketing and performance
                    marketing, and how will you adapt to evolving trends and
                    technologies in the digital landscape?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a1"
                      value="Diversifying services"
                    />
                    <label className="form-check-label" htmlFor="q10a1">
                      Diversifying services
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a2"
                      value="Expanding clientele"
                    />
                    <label className="form-check-label" htmlFor="q10a2">
                      Expanding clientele
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a3"
                      value="Embracing emergin trends"
                    />
                    <label className="form-check-label" htmlFor="q10a3">
                      Embracing emergin trends
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
