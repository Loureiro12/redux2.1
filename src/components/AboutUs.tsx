import React from "react";
import { useSelector } from "react-redux";

import { IGlobalState } from "../store/modules/user/types";

const About: React.FC = () => {
  const state = useSelector((state: IGlobalState) => state.users);

  return (
    <div>
      <h1>Alunos matriculados na academia Accentire 2.1</h1>
      <>
        {state.map((user, index) => (
          <div key={index}>
            <ul>
              <li>{user.name}</li>
            </ul>
          </div>
        ))}
      </>
    </div>
  );
};

export default About;
