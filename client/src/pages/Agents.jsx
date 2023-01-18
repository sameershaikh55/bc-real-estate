import React from "react";

// COMPONENTS
import Hero2 from "../components/Hero2";
import AgentCard from "../components/AgentCard";
import DetailedAgentCard from "../components/DetailedAgentCard";

const Agents = () => {
  const agents = [
    {
      image:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-4.jpg",
      name: "Margaret Sotillo",
      bio: "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
      phone: "+54 356 945234",
      email: "agents@example.com",
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkdin: "",
      },
    },
    {
      image:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-1.jpg",
      name: "Margaret Sotillo",
      bio: "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
      phone: "+54 356 945234",
      email: "agents@example.com",
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkdin: "",
      },
    },
    {
      image:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-5.jpg",
      name: "Margaret Sotillo",
      bio: "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
      phone: "+54 356 945234",
      email: "agents@example.com",
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkdin: "",
      },
    },
    {
      image:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-4.jpg",
      name: "Margaret Sotillo",
      bio: "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
      phone: "+54 356 945234",
      email: "agents@example.com",
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkdin: "",
      },
    },
    {
      image:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-1.jpg",
      name: "Margaret Sotillo",
      bio: "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
      phone: "+54 356 945234",
      email: "agents@example.com",
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkdin: "",
      },
    },
    {
      image:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-5.jpg",
      name: "Margaret Sotillo",
      bio: "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
      phone: "+54 356 945234",
      email: "agents@example.com",
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkdin: "",
      },
    },
    {
      image:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-4.jpg",
      name: "Margaret Sotillo",
      bio: "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
      phone: "+54 356 945234",
      email: "agents@example.com",
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkdin: "",
      },
    },
    {
      image:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-1.jpg",
      name: "Margaret Sotillo",
      bio: "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
      phone: "+54 356 945234",
      email: "agents@example.com",
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkdin: "",
      },
    },
    {
      image:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-5.jpg",
      name: "Margaret Sotillo",
      bio: "Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.",
      phone: "+54 356 945234",
      email: "agents@example.com",
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkdin: "",
      },
    },
  ];

  return (
    <>
      <Hero2
        title={
          <>
            Our <span className="color1">Agents</span>
          </>
        }
      />

      <div className="page_container py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
            <div className="row gy-5">
              <div className="col-12">
                <div className="detailed_agent_card_container">
                  <DetailedAgentCard {...agents[0]} />
                </div>
              </div>

              {agents.map((content, i) => {
                return (
                  <div key={i} className="col-md-4">
                    <AgentCard {...content} />
                  </div>
                );
              })}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agents;
