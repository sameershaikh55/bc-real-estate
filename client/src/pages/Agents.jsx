import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeam } from "../redux/action/team";

// COMPONENTS
import Hero2 from "../components/Hero2";
import AgentCard from "../components/AgentCard";
import DetailedAgentCard from "../components/DetailedAgentCard";
import Loader from "../components/Loader";

const Agents = () => {
  const dispatch = useDispatch();
  const { team, loading } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, []);

  if (loading) {
    return <Loader />;
  }

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
                    <DetailedAgentCard {...team[0]} />
                  </div>
                </div>

                {team.map((content, i) => {
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
