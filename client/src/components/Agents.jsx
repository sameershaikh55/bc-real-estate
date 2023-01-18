import React from "react";
import Button from "./Button";
import STtitle from "./STtitle";
import AgentCard from "./AgentCard";

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
  ];

  return (
    <div className="agents_container">
      <div className="page_container">
        <div className="container-fluid">
          <STtitle>Best Agents</STtitle>

          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row gy-4">
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

          <div className="mt-4">
            <Button>
              <span className="opacity-0">....</span>
              view more
              <span className="opacity-0">....</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
