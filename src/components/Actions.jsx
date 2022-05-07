import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import deleteIcon from "../assests/delete.png";
import playIcon from "../assests/play-button.png";
import resetIcon from "../assests/arrow-circle.png";
import closeIcon from "../assests/close.png";
import updateIcon from "../assests/system-update.png";
import logoutIcon from "../assests/logout.png";
import "../cssFiles/actions.css";
export const Actions = ({ edit }) => {
  const count = useRef(0);
  const [maxActions, setMaxActions] = useState(false);
  const listActions = [
    ["START NEW APP", playIcon],
    ["RESET APP", resetIcon],
    ["CLOSE APP", closeIcon],
    ["MODIFY APP", updateIcon],
    ["LOGOUT APP", logoutIcon],
  ];
  const [arr, setArr] = useState([listActions[0][0]]);

  return (
    <>
      <span>Perform the following Actions</span>
      <Error>{maxActions ? "! More than 5 actions not allowed" : ""}</Error>
      <br />
      {arr.map((e, i) => {
        return (
          <>
            <button className="action-buttons" disabled={edit}>
              <img src={listActions[i][1]} alt="" />
              {e}
            </button>{" "}
            <DeleteImg
              onClick={() => {
                if (!edit) {
                  count.current -= 1;
                  arr.pop();
                  setMaxActions(false);
                  setArr([...arr]);
                }
              }}
              src={deleteIcon}
              alt=""
            />{" "}
            <br />
          </>
        );
      })}
      <hr />
      <button
        className="addAction-button"
        disabled={edit}
        onClick={() => {
          if (count.current > 3) return setMaxActions(true);
          count.current += 1;
          setArr([...arr, listActions[count.current][0]]);
          console.log(count.current);
        }}
      >
        Add Another Action
      </button>
      <div className="copyRight">© 2019 Hubbler Pvt Ltd</div>
    </>
  );
};
const DeleteImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
  margin-left: 20%;
  font-size: 20px;
`;
